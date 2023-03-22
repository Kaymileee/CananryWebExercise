import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig/fbConfig";
import Button from "../button/Button";
import ChoiceItem from "../ItemChoice/ChoiceItem";
import DashBoard from "./DashBoard";

const MultiChoice = () => {
  const [check, setCheck] = useState(true);
  const [listChoice, setListChoice] = useState([]);
  let answer = [];
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
  // const handleChoice = (e) => {
  //   setChoice({ ...choice, ques_1: e.target.value });
  // };
  let quesI = listChoice.filter((ques) => ques.maLoai === 0);
  let arr = quesI.map((item) => {
    // console.log(item.DapAn);
    answer.push(item.DapAn.toLowerCase());
  });
  console.log(quesI);

  const handleCheckResult = () => {
    const resultForUser = Object.values(choice);
    console.log(resultForUser);
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
