import React from "react";

const ChoiceItem = ({ item, onClick }) => {
  const handleChoice = onClick;
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
          <label className="flex items-center text-xl gap-x-3">
            <input
              type="radio"
              name="answer"
              onClick={handleChoice}
              value="A"
              className="w-5 h-5 "
            />
            <span>{item.A}</span>
          </label>
          <label className="flex items-center text-xl gap-x-3">
            <input
              type="radio"
              name="answer"
              onClick={handleChoice}
              value="B"
              className="w-5 h-5 "
            />
            <span>{item.B}</span>
          </label>
          <label className="flex items-center text-xl gap-x-3">
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
