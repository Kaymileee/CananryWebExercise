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
    console.log(results);
  };
  console.log(results);
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
  return (
    <div className="w-full bg-white">
      <h1 className="header">Image Identification</h1>
      <div className="inputHolder">
        <input
          type="file"
          accept="image/*"
          capture="camera"
          className="uploadInput"
          onChange={uploadImage}
          ref={fileInputRef}
        />
        <button className="uploadImage" onClick={triggerUpload}>
          Upload Image
        </button>
        <span className="or">OR</span>
        <input
          type="text"
          placeholder="Paster image URL"
          ref={textInputRef}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex items-center justify-center mainWrapper">
        <div className="mainContent">
          <div className="imageHolder">
            {imageURL && (
              <img
                src={imageURL}
                alt="Upload Preview"
                crossOrigin="anonymous"
                ref={imageRef}
                className="w-[400px] h-[400px] rounded-lg object-contain"
              />
            )}
          </div>
          {results.length > 0 && (
            <div className="text-white resultsHolder">
              {results.map((result, index) => {
                return (
                  <div className="flex result gap-x-2" key={result.className}>
                    <span className="name">{result.className}</span>
                    <span className="confidence">
                      Confidence level: {(result.probability * 100).toFixed(2)}%{" "}
                      {index === 0 && (
                        <span className="bestGuess">Best Guess</span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {imageURL && (
          <button
            className="p-5 text-white bg-black button"
            onClick={() => identify()}
          >
            Identify Image
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
