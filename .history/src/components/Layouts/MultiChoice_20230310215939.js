import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig/fbConfig";
import Button from "../button/Button";
import ChoiceItem from "../ItemChoice/ChoiceItem";
import DashBoard from "./DashBoard";

const MultiChoice = () => {
  const [check, setCheck] = useState(true);
  const [listChoice, setListChoice] = useState([]);
  const [score, setScore] = useState(0);
  let solution = [];
  const [error, setError] = useState({
    errorAll: "",
    errorForOne: "",
    errorForTwo: "",
    errorForThree: "",
    errorForFour: "",
    errorForFive: "",
  });
  const [choice, setChoice] = useState({
    ques_1: "",
    ques_2: "",
    ques_3: "",
    ques_4: "",
    ques_5: "",
  });

  useEffect(() => {
    const colRef = collection(db, "kiem tra trac nghiem");

    async function getData() {
      const querySnapshot = await getDocs(colRef);
      let arrQuesChoice = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        arrQuesChoice.push(doc.id, doc.data());
      });
      setListChoice(arrQuesChoice);
    }
    getData();
  }, []);

  let quesI = listChoice.filter((ques) => ques.maLoai === 0);
  const arr = quesI.map((item) => {
    solution.push(item.DapAn);
  });

  const handleCheckResult = () => {
    if (
      choice.ques_1 === "" &&
      choice.ques_2 === "" &&
      choice.ques_3 === "" &&
      choice.ques_4 === "" &&
      choice.ques_5 === ""
    ) {
      setError({ ...error, errorAll: "Xin hãy chọn các đáp án" });
    } else if (choice.ques_1 === "") {
      setError({ ...error, errorForOne: "Xin hãy chọn đáp án câu 1" });
    }
    const resultForUser = Object.values(choice);
    const arrRest = resultForUser.filter(
      (item, index) => item !== solution[index]
    );
    setScore(100 - (arrRest.length / solution.length) * 100);
  };
  return (
    <DashBoard>
      <div className="container">
        <div className="p-10 bg-white rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-black uppercase">
            Chọn đáp án đúng📝
          </h3>
          {/* data */}
          {quesI &&
            quesI.map((item, index) => (
              <ChoiceItem
                key={index}
                item={item}
                setChoice={setChoice}
                choice={choice}
                index={index}
              ></ChoiceItem>
            ))}
          {error.errorAll && (
            <div className="font-semibold text-red-600">{error.errorAll}</div>
          )}
          <button
            className={
              "bg-black text-white my-10 inline-block px-6 py-3 text-sm font-medium text-white rounded-lg  text-opacity-1"
            }
            onClick={handleCheckResult}
          >
            Kết quả
          </button>
        </div>
      </div>
    </DashBoard>
  );
};

export default MultiChoice;
