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
    <div className="container my-10">
      <div className="my-10 text-left">
        <div className="w-10 h-1 my-2 primary line"></div>
        <h3 className="text-2xl font-bold uppercase">Our program</h3>
      </div>
      <div className="grid grid-cols-3 transition-all gap-x-5 dataDumies">
        {dataDummies.map((item, index) => (
          <div
            className="relative rounded-lg cursor-pointer item "
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
            <div className="absolute bottom-0 left-0 z-50 w-full p-5 font-medium text-white bg-black bg-opacity-95 ">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderTitle;
