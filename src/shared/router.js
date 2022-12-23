import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../redux/components/Header/Header";
import Footer from "../redux/components/Footer/Footer";
import "./router.css";
import Community from "../pages/Community/Community";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="contentWrapper">
          <Header />
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<></>} />
            <Route path="/123" element={<Community />} />
=======
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
>>>>>>> 686710853796f67d441469beaac5d14f17a62eb2
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
