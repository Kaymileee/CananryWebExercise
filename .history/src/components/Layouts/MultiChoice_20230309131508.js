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
        </div>
      </div>
    </DashBoard>
  );
};

export default MultiChoice;
