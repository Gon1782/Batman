import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../redux/components/Header/Header";
import Footer from "../redux/components/Footer/Footer";
import "./router.css";
import Community from "../pages/Community";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="contentWrapper">
          <Header />
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/123" element={<Community />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
