import axios from "axios";
import { setCORS } from "google-translate-api-browser";
import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import translate from "google-translate-api";

const VocDesc = () => {
  const { vocName } = useParams();
  // useEffect(() => {
  //   axios
  //     .get("https://libretranslate.de/languages", {
  //       headers: { accept: "application/json" },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }, []);

  useEffect(() => {
    translate("Ik spreek Engels", { to: "vn" })
      .then((res) => {
        console.log(res.text);
        //=> I speak English
        console.log(res.from.language.iso);
        //=> nl
      })
      .catch((err) => {
        console.error(err);
      });
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
