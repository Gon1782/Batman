import './Main_page.css';
import eplLogo from '../../../assets/img/EPL_logo.png';
import Laliga from '../../../assets/img/Laliga.png';
import SerieA from '../../../assets/img/SerieA.png';
import { useNavigate } from 'react-router-dom';
import MainNews from '../components/MainNews/MainNews';

export default function MainTopLeagueList() {
  const topLeaguesLists = ['Premier League', 'Laliga', 'Serie A'];
  const navigate = useNavigate();

  return (
    <div className='list'>
      <div>
        <div className='Topleagues'>Top leagues</div>
        <div>
          <div
            className='Epl'
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={eplLogo} alt='' />
            {topLeaguesLists[0]}
          </div>
          <div
            className='Laliga'
            onClick={() => {
              navigate('/Laliga');
            }}
          >
            <img src={Laliga} alt='' />
            {topLeaguesLists[1]}
          </div>
          <div
            className='SerieA'
            onClick={() => {
              navigate('/SerieA');
            }}
          >
            <img src={SerieA} alt='' />
            {topLeaguesLists[2]}
          </div>
        </div>
      </div>
      <MainNews />
    </div>
  );
}

// src/pages/home.js
