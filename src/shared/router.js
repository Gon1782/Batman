import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainTopLeagueList from '../pages/MainPage/MainTopLeagueList';
import Epl from '../pages/MainPage/LeagueInformation/Epl';
import Laliga from '../pages/MainPage/LeagueInformation/Laliga';
import SerieA from '../pages/MainPage/LeagueInformation/SerieA';
import Mainpage from './Mainpage';

const Router = () => {
  return (
    <BrowserRouter>
      <Mainpage>
        <Routes>
          <Route path='/' element={<MainTopLeagueList />} />
          <Route path='Epl' element={<Epl />} />
          <Route path='Laliga' element={<Laliga />} />
          <Route path='SerieA' element={<SerieA />} />
        </Routes>
      </Mainpage>
    </BrowserRouter>
  );
};

export default Router;
