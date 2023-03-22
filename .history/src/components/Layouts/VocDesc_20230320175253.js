import axios from "axios";
import { setCORS } from "google-translate-api-browser";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ItemVoc from "../item/ItemVoc";

const VocDesc = () => {
  const { vocName } = useParams();

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
