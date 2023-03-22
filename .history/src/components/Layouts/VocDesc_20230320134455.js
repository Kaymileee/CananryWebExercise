import axios from "axios";
import { setCORS } from "google-translate-api-browser";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const VocDesc = () => {
  const { vocName } = useParams();
  // const [data, setData] = useState();
  // useEffect(() => {
  //   axios
  //     .get("https://libretranslate.de/languages", {
  //       headers: { accept: "application/json" },
  //     })
  //     .then((res) => console.log(res.data));
  // }, []);
  useEffect(() => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", "eye");
    encodedParams.append("target", "vi");
    encodedParams.append("source", "en");

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "ee07226633msh227d5acadff5384p1fb98ejsn50ea09922fa7",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: encodedParams,
    };

    fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  });
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
