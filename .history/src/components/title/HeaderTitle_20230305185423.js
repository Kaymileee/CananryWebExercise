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
      <div className="text-left">
        <h3 className="text-2xl font-bold">Our programe</h3>
      </div>
    </div>
  );
};

export default HeaderTitle;
