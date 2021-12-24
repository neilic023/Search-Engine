import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchEngine from "./components/SearchEngine";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SearchEngine} />
      </div>
    </Router>
  );
}

export default App;
