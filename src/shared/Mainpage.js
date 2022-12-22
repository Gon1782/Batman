import React from 'react';
import Epl from '../pages/MainPage/LeagueInformation/Epl';
import MainTopLeagueList from '../pages/MainPage/MainTopLeagueList';
import MainLanking from '../pages/MainPage/MainLanking';
import './Main.css';

export default function Mainpage() {
  return (
    <div className='MAIN'>
      <MainTopLeagueList />
      <Epl />
      <MainLanking />
    </div>
  );
}
