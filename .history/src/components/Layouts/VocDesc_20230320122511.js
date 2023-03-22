import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const VocDesc = () => {
  const { vocName } = useParams();
  useEffect(() => {}, []);
  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold">{vocName.toUpperCase()}</h2>
      <div className="grid h-screen grid-cols-4 bg-white rounded-lg">
        <div className="w-[400px] ">
          <img
            src="https://lingokids.com/wp-content/uploads/2020/11/20172F102F032F102F392F592F229d1721-b20b-47be-b25f-d13acd6b5e022FEye.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default VocDesc;
