import axios from "axios";
import { collection, doc, getDocs } from "firebase/firestore";
import { setCORS } from "google-translate-api-browser";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { db } from "../../firebaseConfig/fbConfig";
import ItemVoc from "../item/ItemVoc";

const VocDesc = () => {
  const { vocName } = useParams();
  console.log(vocName);
  // get slug =>get data from slug ,voc(name,img)
  const data = [
    {
      name: "Mouth",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20172F092F282F092F412F172F84ef6666-79ab-451d-ae88-513c25fc36b52FMouth.png",
    },
    {
      name: "hair",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20172F102F032F102F242F382Fc6da2592-1b3b-45b2-b89e-a7cb32177bba2FHair.png",
    },
    {
      name: "head",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20172F092F142F092F152F282F36587f5c-7eec-49b9-833b-fb35976ab5452FHead.png",
    },
    {
      name: "nose",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20172F092F282F092F432F542Fe1a7acc2-3ab6-4eee-9977-452dd3bfe94c2FNose.png",
    },
    {
      name: "chin",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20182F012F122F102F242F472F541be293-da1a-48dc-8d71-2a0051f06cdb2Fchin.png",
    },
    {
      name: "forehead",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20182F012F122F102F242F482F69fa2e17-1185-40c4-a171-e071325b799d2Fforehead.png",
    },
  ];
  const [topicName, setTopicName] = useState();
  const colRef = collection(db, "TopicVoc");
  useEffect(() => {
    async function getTopicVoc() {
      const results = [];
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        if (doc.TopicName === vocName) {
          results.push(doc.data());
        }
        setTopicName(results);
      });
    }
    getTopicVoc();
  }, []);
  return (
    <div className="w-full h-screen p-10">
      <div className=" text-black bg-[#C6EBC5] py-10 rounded-lg">
        <h3 className="mb-10 text-3xl font-semibold text-center text-[#FA7070]">
          Face Parts
        </h3>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-5 justify-evenly">
          {data.map((item) => (
            <ItemVoc key={item.name} name={item.name} img={item.img}></ItemVoc>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VocDesc;
