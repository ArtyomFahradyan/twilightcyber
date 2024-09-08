import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(
  /* webpackChunkName: "Home" */ () => import("./sub-pages/Home")
);

function Applications() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Applications;
