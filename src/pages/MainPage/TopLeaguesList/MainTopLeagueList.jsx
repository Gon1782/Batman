import './Main_page.css';
import eplLogo from '../../../assets/img/EPL_logo.png';
import Laliga from '../../../assets/img/Laliga.png';
import SerieA from '../../../assets/img/SerieA.png';
// import { useQuery } from 'react-query';
// import axios from 'axios';

// import { useState } from 'react';

export default function MainTopLeagueList() {
  const topLeaguesLists = ['Premier League', 'Laliga', 'Serie A'];
  const handleEplClick = () => {};
  return (
    <div className='list'>
      <div>
        <div className='Topleagues'>Top leagues</div>
        <div>
          <div className='Epl' onClick={handleEplClick}>
            <img src={eplLogo} alt='' />
            {topLeaguesLists[0]}
          </div>
          <div className='Laliga'>
            {' '}
            <img src={Laliga} alt='' />
            {topLeaguesLists[1]}
          </div>
          <div className='SerieA'>
            {' '}
            <img src={SerieA} alt='' />
            {topLeaguesLists[2]}
          </div>
        </div>
      </div>
    </div>
  );
}
