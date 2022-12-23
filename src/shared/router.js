//
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../redux/components/Header/Header';
import Footer from '../redux/components/Footer/Footer';
import './router.css';
import Epl from '../pages/MainPage/LeagueInformation/Epl';
import LaLiga from '../pages/MainPage/LeagueInformation/Laliga';
import MainpageRouter from '../pages/MainPage/MainpageRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className='contentWrapper'>
          <Header />
          <Routes>
            <Route path='/' element={<MainpageRouter />} />
            <Route path='/' element={<Epl />} />
            <Route path='/Laliga' element={<LaLiga />} />
            <Route path='/community' element={<></>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
