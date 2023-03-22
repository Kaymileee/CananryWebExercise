import React, { useState } from "react";

const DashBoard = () => {
  const [quesOne, setQuesOne] = useState("");
  console.log(quesOne);
  return (
    <div className="container py-20">
      <div className="w-full h-screen bg-white rounded-lg">
        <div className="flex flex-col">
          <h4>Ques 1:</h4>
          <div className="flex items-center w-full ques gap-x-5">
            <div className="w-[100px] h-[100px] ">
              <img
                src="https://img.freepik.com/free-vector/apple-fruit-cartoon-icon-illustration-food-fruit-icon-concept-isolated-flat-cartoon-style_138676-2922.jpg?size=338&ext=jpg&uid=R40653510&ga=GA1.2.370007770.1677681756&semt=ais"
                alt=""
                className="object-cover w-full h-full rounded-full"
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
      </div>
    </div>
  );
};

export default DashBoard;
