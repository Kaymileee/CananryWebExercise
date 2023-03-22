import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

const DashBoard = () => {
  const [quesOne, setQuesOne] = useState("");
  const [quesTwo, setQuesTwo] = useState("");
  const [score, setScore] = useState(0);
  const demo = ["apple", "orange"];
  let arr = [];

  // const compareArrays = (a, b) =>
  //   a.length === b.length && a.every((element, index) => element === b[index]);
  const handleCheck = async () => {
    if (quesOne !== "" && quesTwo !== "") {
      await arr.push(quesOne, quesTwo);
      const arrRest = arr.filter((item, index) => item !== demo[index]);
      await setScore((arrRest.length / demo.length) * 100);
    } else {
      setScore(0);
    }
  };

  return (
    <div className="container py-20">
      <div className="flex items-center my-5 gap-x-5">
        <Link
          to={"/multiple-choice"}
          className="p-4 text-white transition-colors rounded-lg bg-slate-600 hover:bg-slate-200 hover:text-orange-600"
        >
          Trắc nghiệm
        </Link>
        <Link
          to={"/fill-in-the-word"}
          className="p-4 text-white transition-colors rounded-lg bg-slate-600 hover:bg-slate-200 hover:text-orange-600"
        >
          Điền từ
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;
