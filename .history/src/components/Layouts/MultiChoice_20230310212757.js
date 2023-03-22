import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig/fbConfig";
import Button from "../button/Button";
import ChoiceItem from "../ItemChoice/ChoiceItem";
import DashBoard from "./DashBoard";

const MultiChoice = () => {
  const [check, setCheck] = useState(true);
  const [listChoice, setListChoice] = useState([]);
  const [choice, setChoice] = useState({
    ques_1: "",
    ques_2: "",
    ques_3: "",
    ques_4: "",
    ques_5: "",
  });
  const [name, setName] = useState({
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
  console.log(choice);
  let quesI = listChoice.filter((ques) => ques.maLoai === 0);
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
                name={name}
                setName={setName}
                key={index}
                item={item}
                setChoice={setChoice}
                choice={choice}
                index={index}
              ></ChoiceItem>
            ))}
          {/* exercise */}
          {/* <div className="flex gap-x-5">
            <div className="w-[200px] h-[200px]">
              <img
                src="https://img.freepik.com/free-vector/gradient-adventure-background_23-2149048608.jpg?size=626&ext=jpg&ga=GA1.2.12167484.1678342596&semt=ais"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="text-black">
              <h4 className="my-10 text-xl">
                <span className="font-bold">Six</span> là số nào sau đây ?
              </h4>
              <div className="flex items-center justify-between">
                <label className="flex items-center text-xl gap-x-3">
                  <input
                    type="radio"
                    name="answer"
                    onClick={handleChoice}
                    value="A"
                    className="w-5 h-5 "
                  />
                  <span>3</span>
                </label>
                <label className="flex items-center text-xl gap-x-3">
                  <input
                    type="radio"
                    name="answer"
                    onClick={handleChoice}
                    value="B"
                    className="w-5 h-5 "
                  />
                  <span>4</span>
                </label>
                <label className="flex items-center text-xl gap-x-3">
                  <input
                    type="radio"
                    name="answer"
                    onClick={handleChoice}
                    value="C"
                    className="w-5 h-5 "
                  />
                  <span>6</span>
                </label>
              </div>
            </div>
          </div> */}
          {/* ex2 */}
          {/* <div className="flex gap-x-5">
            <div className="w-[200px] h-[200px]">
              <img
                src="https://img.freepik.com/free-vector/gradient-adventure-background_23-2149048608.jpg?size=626&ext=jpg&ga=GA1.2.12167484.1678342596&semt=ais"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="text-black">
              <h4 className="my-10 text-xl">
                <span className="font-bold">Four</span> là số nào sau đây ?
              </h4>
              <div className="flex items-center justify-between">
                <label className="flex items-center text-xl gap-x-3">
                  <input
                    type="radio"
                    name="answer"
                    onClick={handleChoice}
                    value="A"
                    className="w-5 h-5 "
                  />
                  <span>3</span>
                </label>
                <label className="flex items-center text-xl gap-x-3">
                  <input
                    type="radio"
                    name="answer"
                    onClick={handleChoice}
                    value="B"
                    className="w-5 h-5 "
                  />
                  <span>4</span>
                </label>
                <label className="flex items-center text-xl gap-x-3">
                  <input
                    type="radio"
                    name="answer"
                    onClick={handleChoice}
                    value="C"
                    className="w-5 h-5 "
                  />
                  <span>6</span>
                </label>
              </div>
            </div>
          </div> */}
          {/*  */}
          <Button className={"bg-black text-white my-10 inline-block"}>
            Kết quả
          </Button>
        </div>
      </div>
    </DashBoard>
  );
};

export default MultiChoice;
