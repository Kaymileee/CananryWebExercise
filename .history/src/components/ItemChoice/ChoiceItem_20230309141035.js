import React from "react";

const ChoiceItem = ({ item, onClick, setChoice, index, choice }) => {
  const handleChoice = (e, n) => {
    switch (n) {
      case 0:
        setChoice({ ...choice, ques_1: e.target.value });

        break;

      default:
        break;
    }
  };
  return (
    <div className="flex my-10 gap-x-5">
      <div className="w-[200px] h-[200px]">
        <img
          src={item.Hinh}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="text-left text-black">
        <h4 className="my-10 text-xl">{item.CH}</h4>
        <div className="flex items-center justify-between gap-x-5">
          <label className="flex items-center text-xl gap-x-2">
            <input
              type="radio"
              name="answer"
              onClick={handleChoice}
              value="A"
              className="w-5 h-5 "
            />
            <span>{item.A}</span>
          </label>
          <label className="flex items-center text-xl gap-x-2">
            <input
              type="radio"
              name="answer"
              onClick={handleChoice}
              value="B"
              className="w-5 h-5 "
            />
            <span>{item.B}</span>
          </label>
          <label className="flex items-center text-xl gap-x-2">
            <input
              type="radio"
              name="answer"
              onClick={handleChoice}
              value="C"
              className="w-5 h-5 "
            />
            <span>{item.C}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ChoiceItem;
