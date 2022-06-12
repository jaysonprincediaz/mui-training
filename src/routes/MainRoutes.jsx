import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Feature from "../pages/Feature";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default MainRoutes;
