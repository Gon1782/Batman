import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Header from "../redux/components/Header";
import Community from "../pages/Community";
import Detail from "../pages/Detail";
=======
import Header from "../redux/components/Header/Header";
import Footer from "../redux/components/Footer/Footer";
import "./router.css";
>>>>>>> b627fc0da10a30eee726eb61517bbbe44fbbfa75

const Router = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Header />
      <Routes>
        <Route path="/123" element={<Community />} />
        <Route path="/" element={<Detail />} />
      </Routes>
=======
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
>>>>>>> b627fc0da10a30eee726eb61517bbbe44fbbfa75
    </BrowserRouter>
  );
};

export default Router;
