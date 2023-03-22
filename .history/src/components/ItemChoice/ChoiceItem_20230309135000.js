import React from "react";

const ChoiceItem = ({ props, onClick }) => {
  const handleChoice = onClick;
  return (
    <div className="flex gap-x-5">
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
    </div>
  );
};

export default ChoiceItem;
