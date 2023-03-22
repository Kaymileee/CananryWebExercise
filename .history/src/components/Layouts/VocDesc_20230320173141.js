import axios from "axios";
import { setCORS } from "google-translate-api-browser";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ItemVoc from "../item/ItemVoc";

const VocDesc = () => {
  const { vocName } = useParams();
  const [vocTxt, setVocTxt] = useState();

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
      .then((response) => setVocTxt(response.data))
      .catch((err) => console.error(err));
  }, []);
  const vocTrans = vocTxt?.translations[0].translatedText;
  return (
    <div className="w-full p-20">
      <div className="h-screen text-black bg-[#C6EBC5] py-10 rounded-lg">
        <h3 className="mb-10 text-3xl font-semibold text-center">Face Parts</h3>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-5 justify-evenly">
          <ItemVoc name={"eye"}></ItemVoc>
        </div>
      </div>
    </div>
  );
};

export default VocDesc;
