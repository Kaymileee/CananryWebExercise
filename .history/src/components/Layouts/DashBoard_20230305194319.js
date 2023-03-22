import React from "react";

const DashBoard = () => {
  return (
    <div className="container py-20">
      <div className="w-full h-screen bg-white rounded-lg">
        <div className="flex flex-col items-start justify-start ques">
          <div className="w-[100px] h-[100px]">
            <img
              src="https://img.freepik.com/free-vector/apple-fruit-cartoon-icon-illustration-food-fruit-icon-concept-isolated-flat-cartoon-style_138676-2922.jpg?size=338&ext=jpg&uid=R40653510&ga=GA1.2.370007770.1677681756&semt=ais"
              alt=""
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <label htmlFor="apple">Apple</label>
          <input
            type="checkbox"
            value={"Apple"}
            onClick={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
