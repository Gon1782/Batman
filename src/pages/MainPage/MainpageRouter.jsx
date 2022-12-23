import React from 'react';
import Epl from './LeagueInformation/Epl';
import MainTopLeagueList from './TopLeaguesList/MainTopLeagueList';
import EplLanking from './LankingList/EplLanking';

export default function MainpageRouter() {
  const style = {
    display: 'flex',
    marginTop: '3%',
    backgroundColor: '#C0C0C0',
  };

  return (
    <div style={style}>
      <MainTopLeagueList />
      <Epl />
      <EplLanking />
    </div>
  );
}
