import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemVoc = ({ name }) => {
  const [vocTrans, setVocTrans] = useState("");
  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", "en");
  encodedParams.append("target_language", "vi");
  encodedParams.append("text", "What is your name?");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "ee07226633msh227d5acadff5384p1fb98ejsn50ea09922fa7",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    body: encodedParams,
  };

  const handleFetch = () => {
    fetch("https://text-translator2.p.rapidapi.com/translate", options)
      .then((response) => response.json())
      .then((response) => setVocTrans(response.data.translatedText))
      .catch((err) => console.error(err));
  };
  return (
    <div className="w-[350px] p-5 flex items-center flex-col border rounded-lg bg-white">
      <img
        src="https://lingokids.com/wp-content/uploads/2020/11/20172F102F032F102F392F592F229d1721-b20b-47be-b25f-d13acd6b5e022FEye.png"
        alt=""
        className="object-cover "
      />
      <div className="flex gap-x-1">
        <h5 className="text-xl font-semibold text-blue-700">{name}</h5>
        <h5 className="text-xl font-semibold text-blue-300">({vocTrans})</h5>
      </div>
    </div>
  );
};

export default ItemVoc;
