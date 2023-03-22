import axios from "axios";
import { setCORS } from "google-translate-api-browser";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

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
    <div className="my-10">
      <h2 className="text-2xl font-semibold">{vocName.toUpperCase()}</h2>
    </div>
  );
};

export default VocDesc;
