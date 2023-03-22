import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const VocDesc = () => {
  const { vocName } = useParams();
  useEffect(() => {}, []);
  return (
    <div>
      <h2 className="text-2xl font-semibold">{vocName.toUpperCase()}</h2>
    </div>
  );
};

export default VocDesc;
