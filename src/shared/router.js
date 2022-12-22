import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../redux/components/Header";
import Community from "../pages/Community";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/123" element={<Community />} />
        <Route path="/" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
