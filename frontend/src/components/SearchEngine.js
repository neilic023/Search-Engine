import React, { useState, useEffect } from "react";
import "./SearchEngine.css";
import api from "../axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  //fetching all the results from the backend
  const fetchData = async () => {
    try {
      if (search === "") {
        console.log(results);
        return;
      } else {
        const response = await api.get(`/?title=${search}`);
        const result = response.data;
        setResults(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //function that will handle search results
  const handleSearch = async (e) => {
    e.preventDefault();
    fetchData();
  };

  // hook that will run on mount and trigger fetch on search change
  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div>
      <header>
        <h1> Search engine </h1>
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <div className="results">
        {results.length > 0 && (
          <div className="result">
            {results.map((result) => (
              <>
                <img className="thumbnail-photo" src={result.photo} alt="new" />
                <div className="search-result">
                  <h3>{result.title}</h3>
                  <p>{result.shortDescription}</p>
                </div>
              </>
            ))}
          </div>
        )}
        {results.length === 0 && (
          <div className="result">
            <p>Nothing to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
