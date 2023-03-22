import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemVoc = () => {
  const [vocTxt, setVocTxt] = useState();
  const { vocName } = useParams();

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
    <div className="w-[400px] p-5 flex items-center flex-col border rounded-lg">
      <img
        src="https://lingokids.com/wp-content/uploads/2020/11/20172F102F032F102F392F592F229d1721-b20b-47be-b25f-d13acd6b5e022FEye.png"
        alt=""
        className="object-cover "
      />
      <div className="flex gap-x-1">
        <h5 className="text-xl font-semibold text-blue-700">Eye</h5>
        <h5 className="text-xl font-semibold text-blue-300">({vocTrans})</h5>
      </div>
    </div>
  );
};

export default ItemVoc;
