import React from "react";

const Grammar = () => {
  return (
    <div className="w-full p-20">
      <div className="h-screen text-black bg-white">
        <h3 className="text-3xl font-semibold text-left">Topics</h3>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-5 justify-evenly">
          <div className="h-[300px] bg-red-400 rounded-md w-[300px]">
            <div className="w-full h-[200px]">
              <img
                src="https://lingokids.com/wp-content/uploads/2020/04/Face.png"
                alt=""
              />
            </div>
            <h5>Face Parts</h5>
          </div>
          <div className="h-[300px] bg-red-400 rounded-md w-[300px]"></div>
          <div className="h-[300px] bg-red-400 rounded-md w-[300px]"></div>
          <div className="h-[300px] bg-red-400 rounded-md w-[300px]"></div>
          <div className="h-[300px] bg-red-400 rounded-md w-[300px]"></div>
          <div className="h-[300px] bg-red-400 rounded-md w-[300px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Grammar;
