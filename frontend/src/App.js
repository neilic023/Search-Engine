import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchEngine from "./components/SearchEngine";
import Result from "./components/Result";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<SearchEngine />} />
          <Route path="/:id" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
