import React from "react";
import { useState, useEffect, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
const AI = () => {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  const imageRef = useRef();
  const textInputRef = useRef();
  const fileInputRef = useRef();
  const [res, setRes] = useState();
  const [txtTrans, setTxtTrans] = useState("");
  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    } else {
      setImageURL(null);
    }
  };

  const identify = async () => {
    textInputRef.current.value = "";
    const results = await model.classify(imageRef.current);
    setResults(results);
    setRes(results[0]);
  };
  const handleOnChange = (e) => {
    setImageURL(e.target.value);
    setResults([]);
  };

  const triggerUpload = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    loadModel();
  }, []);

  useEffect(() => {
    if (imageURL) {
      setHistory([imageURL, ...history]);
    }
  }, [imageURL]);

  if (isModelLoading) {
    return <h2>Model Loading...</h2>;
  }
  let trans = res?.className;
  // const encodedParams = new URLSearchParams();
  // encodedParams.append("source_language", "en");
  // encodedParams.append("target_language", "vi");
  // encodedParams.append("text", trans);

  // const options = {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/x-www-form-urlencoded",
  //     "X-RapidAPI-Key": "ee07226633msh227d5acadff5384p1fb98ejsn50ea09922fa7",
  //     "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  //   },
  //   body: encodedParams,
  // };

  // useEffect(() => {
  //   const handleFetch = () => {
  //     fetch("https://text-translator2.p.rapidapi.com/translate", options)
  //       .then((response) => response.json())
  //       .then((response) => setTxtTrans(response.data.translatedText))
  //       .catch((err) => console.error(err));
  //   };
  //   handleFetch();
  // }, []);
  console.log(trans);
  return (
    <div className="container h-screen my-10 border rounded-lg bg-[#CCEDCB]">
      <h1 className="py-10 text-2xl font-bold text-[#00CDC4]">
        Phân tích vật thể sang tiếng anh
      </h1>
      <div className="flex flex-col items-center justify-between">
        <div className="flex items-center justify-center">
          <input
            type="file"
            accept="image/*"
            capture="camera"
            className="uploadInput "
            onChange={uploadImage}
            ref={fileInputRef}
          />
          {/* <button className="uploadImage" onClick={triggerUpload}>
            Upload Image
          </button> */}
        </div>
        <span className="hidden or">OR</span>
        <input
          type="text"
          className="hidden"
          placeholder="Paster image URL"
          ref={textInputRef}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex items-start justify-center my-5 mainWrapper gap-x-5">
        <div className="mainContent">
          <div className="imageHolder w-[400px] h-[400px] rounded-lg overflow-hidden">
            {imageURL && (
              <img
                src={imageURL}
                alt="Upload Preview"
                crossOrigin="anonymous"
                ref={imageRef}
                className="object-cover w-full h-full rounded-lg "
              />
            )}
          </div>
          {results.length > 0 && (
            <div className="my-5 text-slate-900 resultsHolder">
              {results.map((result, index) => {
                return (
                  <div className="flex result gap-x-2" key={result.className}>
                    <span className="name">{result.className} --</span>
                    <span className="confidence">
                      Độ Chính Xác: {(result.probability * 100).toFixed(2)}%{" "}
                      {/* {index === 0 && (
                        <span className="bestGuess">Best Guess</span>
                      )} */}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {imageURL && (
          <button
            className="p-5 text-white bg-black rounded-lg button"
            onClick={() => identify()}
          >
            Phân tích
          </button>
        )}
      </div>
      {/* {history.length > 0 && (
        <div className="recentPredictions">
          <h2>Recent Images</h2>
          <div className="flex recentImages gap-x-5">
            {history.map((image, index) => {
              return (
                <div className="recentPrediction" key={`${image}${index}`}>
                  <img
                    src={image}
                    alt="Recent Prediction"
                    onClick={() => setImageURL(image)}
                    className="w-[200px] h-[200px] rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AI;
