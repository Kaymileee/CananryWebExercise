import React, { useState } from "react";

const DashBoard = () => {
  const [quesOne, setQuesOne] = useState("");
  const [quesTwo, setQuesTwo] = useState("");
  const [score, setScore] = useState(0);
  const demo = ["apple", "orange"];
  let arr = [];

  const compareArrays = (a, b) =>
    a.length === b.length && a.every((element, index) => element === b[index]);
  const handleCheck = () => {
    arr.push(quesOne, quesTwo);

    const rs = arr.filter((item, index) => item !== demo[index]);
    setScore((rs.length / demo.length) * 100);
  };
  return (
    <div className="container py-20">
      <div className="flex-col w-full h-[500px] bg-white rounded-lg">
        <div className="flex flex-col items-start ques">
          <h4 className="text-black">Ques 1:</h4>
          <div className="flex items-center w-full mb-10 gap-x-5">
            <div className="w-[100px] h-[100px] ">
              <img
                src="https://img.freepik.com/free-vector/apple-fruit-cartoon-icon-illustration-food-fruit-icon-concept-isolated-flat-cartoon-style_138676-2922.jpg?size=338&ext=jpg&uid=R40653510&ga=GA1.2.370007770.1677681756&semt=ais"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="flex gap-x-1">
              <label htmlFor="ques" className="text-xl text-black">
                This is a
              </label>
              <input
                type="text"
                id="ques"
                className=" outline-none text-xl text-[#ffb86c]"
                placeholder="..."
                onChange={(e) => setQuesOne(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start ques">
          <h4 className="text-black">Ques 2:</h4>
          <div className="flex items-center w-full mb-10 gap-x-5">
            <div className="w-[100px] h-[100px] ">
              <img
                src="https://img.freepik.com/free-vector/vector-pastel-orange-fruit-sticker-cartoon-clipart_53876-173130.jpg?size=338&ext=jpg&uid=R40653510&ga=GA1.2.370007770.1677681756&semt=ais"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="flex gap-x-1">
              <label htmlFor="ques" className="text-xl text-black">
                This is a
              </label>
              <input
                type="text"
                id="ques"
                className=" outline-none text-xl text-[#ffb86c]"
                placeholder="..."
                onChange={(e) => setQuesTwo(e.target.value)}
              />
            </div>
          </div>
        </div>
        {score && (
          <h3 className="my-10 font-semibold text-blue-400">
            Score: <span className="text-blue-700">{score}</span>
          </h3>
        )}
        <button
          className="px-6 py-3 rounded-lg bg-gradient-secondary"
          onClick={handleCheck}
        >
          Check Answer
        </button>
      </div>
    </div>
  );
};

export default DashBoard;
