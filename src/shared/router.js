import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../redux/components/Header/Header";
import Footer from "../redux/components/Footer/Footer";
import "./router.css";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="contentWrapper">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div>메인페이지</div>
                </>
              }
            />
            <Route
              path="/community"
              element={
                <>
                  <div>커뮤니티</div>
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
