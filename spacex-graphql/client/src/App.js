import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import logo from "./logo.jpg";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          {/* <Launches /> */}
          <Routes>
            <Route exact path="/" Component={Launches} />
            <Route exact path="/launch/:flight_number" Component={Launch} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
