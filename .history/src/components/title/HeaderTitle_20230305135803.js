import React from "react";

const HeaderTitle = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="mx-auto mb-10 text-3xl font-semibold leading-snug text-center text-white lg:leading-relaxed lg:text-4xl ">
          Test-English <br></br>
          <span className="txt-primary">Take your learning with you!</span>
        </h1>
        <button>Let's Go</button>
      </div>
    </div>
  );
};

export default HeaderTitle;
