import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const VocDesc = () => {
  const { vocName } = useParams();
  useEffect(() => {}, []);
  return (
    <div>
      <h2>{vocName.toUpperCase()}</h2>
    </div>
  );
};

export default VocDesc;
