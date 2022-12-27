import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Epl from "../components/LeagueInformation/Epl";
import LaLiga from "../components/LeagueInformation/Laliga";
import SerieA from "../components/LeagueInformation/SerieA";
import MainpageRouter from "../pages/MainpageRouter";
import Detail from "../pages/Detail";
import Community from "../components/Community/Community";
import { DarkModeProvider } from "../context/DarkMode";

const Router = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };
  return (
    <BrowserRouter>
      <DarkModeProvider>
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
      </DarkModeProvider>
    </BrowserRouter>
  );
};

export default Router;
