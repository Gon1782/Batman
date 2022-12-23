import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "../redux/components/Header/Header";
import Footer from "../redux/components/Footer/Footer";
import Detail from "../pages/Detail";
import "./router.css";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="Wrapper">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                메인페이지
                <Link to="/detail">Go to Detail</Link>
              </div>
            }
          />
          <Route path="/community" element={<div>커뮤니티</div>} />
          <Route path="/detail" element={<Detail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
