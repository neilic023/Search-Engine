import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./SearchEngine.css";
import api from "../axios";

const Result = () => {
  const [result, setResult] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchResult = async () => {
    try {
      const response = await api.get(`/${id}`);
      console.log(response);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const buttonBackHandler = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <div className="result">
      {result.map((results) => (
        <>
          <div>
            <img className="full-size" src={results.photo} alt="new" />
          </div>
          <div className="search-result">
            <p>{results.description}</p>
            <button type="button" onClick={buttonBackHandler}>
              Go back
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Result;
