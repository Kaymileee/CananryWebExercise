import React from "react";
import DashBoard from "./DashBoard";

const MultiChoice = () => {
  return (
    <DashBoard>
      <div className="container">
        <div className="h-screen p-10 bg-white rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-black uppercase">
            Chọn đáp án đúng📝
          </h3>
          {/* exercise */}
          <div className="flex gap-x-5">
            <div className="w-[200px] h-[200px]">
              <img
                src="https://img.freepik.com/free-vector/gradient-adventure-background_23-2149048608.jpg?size=626&ext=jpg&ga=GA1.2.12167484.1678342596&semt=ais"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="text-black">
              <h4 className="my-10 text-xl">six là số nào sau đây ?</h4>
              <div className="flex items-center justify-between">
                {" "}
                <label className="flex items-center gap-x-3">
                  <input type="radio" name="answer" />
                  <span>3</span>
                </label>
                <label className="flex items-center gap-x-3">
                  <input type="radio" name="answer" />
                  <span>4</span>
                </label>
                <label className="flex items-center gap-x-3">
                  <input type="radio" name="answer" />
                  <span>6</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashBoard>
  );
};

export default MultiChoice;
