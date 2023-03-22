import React from "react";
import { Link } from "react-router-dom";

const HeaderTitle = () => {
  return (
    <div className="container my-10">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="mx-auto mb-10 text-3xl font-semibold leading-snug text-center text-white lg:leading-relaxed lg:text-4xl ">
          Test-English <br></br>
          <span className="txt-primary">Take your learning with you!</span>
        </h1>
        <Link
          className="inline-flex items-center justify-center gap-x-3 px-8 py-4 font-sans font-semibold tracking-wide text-white bg-gradient-secondary rounded-lg h-[60px] w-full sm:w-[230px] button-effect"
          to={"/dashboard"}
        >
          Let's Go
        </Link>
      </div>
      <div className="my-10 text-left">
        <div className="w-10 h-1 my-2 primary line"></div>
        <h3 className="text-2xl font-bold uppercase">Our program</h3>
      </div>
      <div className="grid grid-cols-3 gap-x-5">
        <div className="relative rounded-lg cursor-pointer item">
          <div className="w-full h-[350px] filter grayscale hover:grayscale-0 transition">
            <img
              src="https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?size=626&ext=jpg&uid=R40653510&ga=GA1.1.370007770.1677681756&semt=ais"
              alt=""
              className="object-cover w-full h-full rounded-lg "
            />
          </div>
          <div className="absolute bottom-0 left-0 z-50 w-full p-5 font-medium text-white bg-black ">
            AI
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
