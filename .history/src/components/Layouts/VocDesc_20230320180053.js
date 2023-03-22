import axios from "axios";
import { setCORS } from "google-translate-api-browser";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ItemVoc from "../item/ItemVoc";

const VocDesc = () => {
  const { vocName } = useParams();
  const data = [
    {
      name: "eye",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20172F092F142F092F142F072Fdddea867-4b04-4f2e-bbdc-f8647227dc582FEars.png",
    },
    {
      name: "eye",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20172F092F142F092F142F072Fdddea867-4b04-4f2e-bbdc-f8647227dc582FEars.png",
    },
    {
      name: "eye",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20172F092F142F092F142F072Fdddea867-4b04-4f2e-bbdc-f8647227dc582FEars.png",
    },
    {
      name: "eye",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20172F092F142F092F142F072Fdddea867-4b04-4f2e-bbdc-f8647227dc582FEars.png",
    },
    {
      name: "eye",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20172F092F142F092F142F072Fdddea867-4b04-4f2e-bbdc-f8647227dc582FEars.png",
    },
    {
      name: "eye",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20172F092F142F092F142F072Fdddea867-4b04-4f2e-bbdc-f8647227dc582FEars.png",
    },
    {
      name: "eye",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20172F092F142F092F142F072Fdddea867-4b04-4f2e-bbdc-f8647227dc582FEars.png",
    },
    {
      name: "eye",
      img: "https://lingokids.com/wp-content/uploads/2020/11/20172F092F142F092F142F072Fdddea867-4b04-4f2e-bbdc-f8647227dc582FEars.png",
    },
  ];
  return (
    <div className="w-full p-20">
      <div className="h-screen text-black bg-[#C6EBC5] py-10 rounded-lg">
        <h3 className="mb-10 text-3xl font-semibold text-center">Face Parts</h3>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-5 justify-evenly">
          <ItemVoc
            name={"Mouth"}
            img={
              "https://lingokids.com/wp-content/uploads/2020/11/20172F092F282F092F412F172F84ef6666-79ab-451d-ae88-513c25fc36b52FMouth.png"
            }
          ></ItemVoc>
          <ItemVoc
            name={"nose"}
            img={
              "https://lingokids.com/wp-content/uploads/2020/11/20172F092F282F092F432F542Fe1a7acc2-3ab6-4eee-9977-452dd3bfe94c2FNose.png"
            }
          ></ItemVoc>
        </div>
      </div>
    </div>
  );
};

export default VocDesc;
