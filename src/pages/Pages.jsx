import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home";
import LoadFilteredMovies from "./LoadFilteredMovies";
import Searched from "./Searched";

function Pages() {
  const location = useLocation();

  return (
    <Routes Location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/cat/:category" element={<LoadFilteredMovies />} />
    </Routes>
  );
}

export default Pages;
