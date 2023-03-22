import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";
import IconVl from "../icons/IconVl";
const ItemVoc = ({ name, img }) => {
  const { speak, voices } = useSpeechSynthesis();
  const [vocTrans, setVocTrans] = useState("");
  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", "en");
  encodedParams.append("target_language", "vi");
  encodedParams.append("text", name);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": process.env.RAPID_APIKEY,
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    body: encodedParams,
  };

  useEffect(() => {
    const handleFetch = () => {
      fetch("https://text-translator2.p.rapidapi.com/translate", options)
        .then((response) => response.json())
        .then((response) => setVocTrans(response.data.translatedText))
        .catch((err) => console.error(err));
    };
    handleFetch();
  }, []);
  return (
    <div className="w-[350px] p-5 flex items-center flex-col border rounded-lg bg-white h-[350px] justify-center">
      <img src={img} alt="" className="object-cover h-[150px] " />
      <div className="flex my-10 gap-x-1">
        <h5 className="text-xl font-semibold text-blue-700">{name}</h5>
        <h5 className="text-xl font-semibold text-blue-300">({vocTrans})</h5>
      </div>

      <IconVl
        className={"cursor-pointer"}
        onClick={() => speak({ text: name })}
      ></IconVl>
    </div>
  );
};

export default ItemVoc;
