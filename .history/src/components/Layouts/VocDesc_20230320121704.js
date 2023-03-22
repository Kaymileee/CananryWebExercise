import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const VocDesc = () => {
  const { vocName } = useParams();
  console.log(vocName);
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates saepe
      a modi consectetur? Perspiciatis ullam adipisci quos modi libero illo quas
      est perferendis ab, quo iusto? Porro nesciunt ea voluptas!
    </div>
  );
};

export default VocDesc;
