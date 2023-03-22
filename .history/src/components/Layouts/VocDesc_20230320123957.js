import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const VocDesc = () => {
  const { vocName } = useParams();
  useEffect(() => {}, []);
  const [txt, setTxt] = useState("eye");
  const translate = async () => {
    // `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from_lang}&tl=${to_lang}&dt=t&ie=UTF-8&oe=UTF-8&q=${encodeURIComponent(sentences)}`
    Axios({
      url: "https://translate.googleapis.com/translate_a/single?client=gtx",
      method: "GET",
      params: {
        sl: "vi",
        tl: "en",
        dt: "t",
      },
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch(() => {});
  };

  useEffect(() => {
    translate();
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold">{vocName.toUpperCase()}</h2>
      <div className="grid h-screen grid-cols-4 bg-white rounded-lg">
        <div className="w-[400px] ">
          <img
            src="https://lingokids.com/wp-content/uploads/2020/11/20172F102F032F102F392F592F229d1721-b20b-47be-b25f-d13acd6b5e022FEye.png"
            alt=""
            className="object-cover "
          />
          <h5 className="text-xl font-semibold text-blue-700">Eye</h5>
        </div>
      </div>
    </div>
  );
};

export default VocDesc;
