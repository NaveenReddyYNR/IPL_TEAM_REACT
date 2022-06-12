import React from "react";
import Teams from "./Teams/Teams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Teams" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
