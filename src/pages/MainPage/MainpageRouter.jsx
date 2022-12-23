import React from 'react';
import Epl from './LeagueInformation/Epl';
import MainTopLeagueList from './TopLeaguesList/MainTopLeagueList';
import MainLanking from './LankingList/MainLanking';

export default function MainpageRouter() {
  const style = {
    display: 'flex',
    marginTop: '5%',
    backgroundColor: '#C0C0C0',
  };

  return (
    <div style={style}>
      <MainTopLeagueList />
      <Epl />
      <MainLanking />
    </div>
  );
}
