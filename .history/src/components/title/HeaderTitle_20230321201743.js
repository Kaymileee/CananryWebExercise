import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
const dataDummies = [
  {
    title: "Nhận diện vật thể",
    img: "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?size=626&ext=jpg&uid=R40653510&ga=GA1.1.370007770.1677681756&semt=ais",
    link: "AI",
  },
  {
    title: "Trò chơi",
    img: "https://img.freepik.com/free-vector/education-learning-concept-love-reading-people-reading-students-studying-preparing-examination-library-book-lovers-readers-modern-literature-flat-cartoon-vector-illustration_1150-60938.jpg?size=626&ext=jpg&uid=R40653510&ga=GA1.2.370007770.1677681756&semt=ais",
    link: "Exercise",
  },
  {
    title: "Từ vựng",
    img: "https://img.freepik.com/free-vector/students-learning-foreign-language-with-vocabulary_74855-11070.jpg?size=626&ext=jpg&uid=R40653510&ga=GA1.2.370007770.1677681756&semt=ais",
    link: "Grammar",
  },
];
const HeaderTitle = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex  items-center justify-center py-20 bg-[#8CA3FE] container rounded-lg gap-20">
        <div className="flex flex-col items-start">
          <h1 className="mx-auto mb-10 text-3xl font-semibold leading-snug text-left text-white lg:leading-relaxed lg:text-4xl">
            Test-English <br></br>
            <span className="txt-primary">Take your learning with you!</span>
          </h1>
          <Link
            className="inline-flex items-center justify-center gap-x-3 px-8 py-4 font-sans font-semibold tracking-wide text-white bg-gradient-secondary rounded-lg h-[60px] w-full sm:w-[230px] button-effect text-left"
            to={"/exercise"}
          >
            Let's Go
          </Link>
        </div>
        {/* <img
          src="https://img.freepik.com/free-vector/young-teacher-with-joyful-kids_74855-6162.jpg?w=1060&t=st=1679398460~exp=1679399060~hmac=4cfeabb9e9f826161fa94656cb2a5a0de65c3c6acaa88be18dd01823e44d3a1e"
          alt=""
        /> */}
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-back-school-illustration_23-2149479527.jpg?t=st=1679398592~exp=1679399192~hmac=564c2f10d1c0bb6ae4b01b9c7465a2f5aabc5f3a3f3a703ddf5c7e8e53c7eeff"
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className="container my-10">
        <div className="mt-10 mb-5 text-left">
          <div className="w-10 h-1 my-2 primary line"></div>
          <h3 className="text-2xl font-bold uppercase">Our program</h3>
        </div>
        <div className="grid grid-cols-4 transition-all gap-x-5 dataDumies">
          {dataDummies.map((item, index) => (
            <div
              className="relative rounded-lg shadow-md cursor-pointer item"
              key={index}
              onClick={() => navigate(`/${item.link}`)}
            >
              <div className="w-full h-[350px] filter grayscale hover:grayscale-0 transition">
                <img
                  src={item.img}
                  alt=""
                  className="object-cover w-full h-full rounded-lg "
                />
              </div>
              <div className="absolute bottom-0 left-0 z-50 w-full p-5 font-medium text-white bg-black rounded-lg bg-opacity-95">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 mb-5 text-left">
          <div className="w-10 h-1 my-2 primary line"></div>
          <h3 className="text-2xl font-bold uppercase">About Us</h3>
        </div>
        {/* about us */}
        <div className="flex items-center justify-between">
          <div
            className="border rounded-lg w-full h-[400px] bg-center"
            style={{
              backgroundImage: `url("https://cdn.dribbble.com/userupload/5207979/file/original-f88580e518a76065ed2114bd7672faf3.jpg?compress=1&resize=1200x900&vertical=center")`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default HeaderTitle;
