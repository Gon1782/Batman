import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../redux/components/Header/Header";
import Footer from "../redux/components/Footer/Footer";
import Epl from "../pages/MainPage/LeagueInformation/Epl";
import LaLiga from "../pages/MainPage/LeagueInformation/Laliga";
import SerieA from "../pages/MainPage/LeagueInformation/SerieA";
import MainpageRouter from "../pages/MainPage/MainpageRouter";
import Detail from "../pages/Detail";
import Community from "../pages/Community/Community";

const Router = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };
  return (
    <BrowserRouter>
      <div style={style}>
        <Header />
        <Routes>
          <Route path="/" element={<MainpageRouter />} />
          <Route path="/" element={<Epl />} />
          <Route path="/Laliga" element={<LaLiga />} />
          <Route path="/SerieA" element={<SerieA />} />
          <Route path="/community" element={<Community />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/detail/:path" element={<Detail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
