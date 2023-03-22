import React from "react";

const Grammar = () => {
  return (
    <div className="w-full p-20">
      <div className="h-screen text-black bg-white">
        <h3 className="text-3xl font-semibold text-left">Topics</h3>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-5 justify-evenly">
          <div className="h-[300px] bg-red-400 rounded-md w-[300px] relative cursor-pointer hover:shadow-lg transition-all z-10">
            <img
              src="https://lingokids.com/wp-content/uploads/2020/04/Face.png"
              alt=""
              className="object-cover w-full h-full opacity-80"
            />
            <div className="absolute bottom-0 z-30 p-2 text-2xl font-bold text-white bg-pink-600 rounded-md left-2/4 -translate-x-2/4">
              Face Parts
            </div>
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
