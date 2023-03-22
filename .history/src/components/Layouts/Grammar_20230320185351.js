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
  return (
    <div className="w-full p-10">
      <div className="h-screen text-black bg-[#C6EBC5] py-10 rounded-lg">
        <h3 className="mb-10 text-3xl font-bold text-center">Chủ đề</h3>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-5 justify-evenly">
          {topics.length > 0 &&
            topics.map((topic) => (
              <div
                className="h-[300px]  rounded-md w-[300px] relative cursor-pointer  transition-all z-10 bg-white"
                onClick={() => navigate(topic.TopicName)}
                key={topic.TopicId}
              >
                <div className="w-full h-[200px] ">
                  <img
                    src={topic.TopicImg}
                    alt=""
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>

                <div className="absolute bottom-0 z-30 p-2 text-2xl font-bold bg-[#FBF2CF] text-[#FA7070] rounded-md left-2/4 -translate-x-2/4">
                  {topic.TopicName}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Grammar;
