import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig/fbConfig";
const Grammar = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  // get topic from Fbase ---topic(name,img)
  const colRef = collection(db, "TopicVoc");
  useEffect(() => {
    async function getTopicVoc() {
      const results = [];
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        results.push(doc.data());
      });
      setTopics(results);
    }
    getTopicVoc();
  }, []);
  console.log(topics);
  return (
    <div className="w-full p-20">
      <div className="h-screen text-black bg-[#C6EBC5] py-10 rounded-lg">
        <h3 className="mb-10 text-3xl font-semibold text-center">Topics</h3>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-5 justify-evenly">
          <div
            className="h-[300px] bg-red-400 rounded-md w-[300px] relative cursor-pointer hover:shadow-lg transition-all z-10"
            onClick={() => navigate("faceparts")}
          >
            <img
              src="https://lingokids.com/wp-content/uploads/2020/04/Face.png"
              alt=""
              className="object-cover w-full h-full "
            />
            <div className="absolute bottom-0 z-30 p-2 text-2xl font-bold text-white bg-yellow-600 rounded-md left-2/4 -translate-x-2/4">
              Face Parts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grammar;
