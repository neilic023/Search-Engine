import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchEngine from "./components/SearchEngine";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<SearchEngine />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
