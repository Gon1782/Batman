import React from 'react';
import Epl from '../components/LeagueInformation/Epl';
import MainTopLeagueList from '../components/TopLeaguesList/MainTopLeagueList';
import EplRanking from '../components/RankingList/EplRanking';

export default function MainpageRouter() {
  const style = {
    display: 'flex',
    marginTop: '3%',
  };

  return (
    <div style={style}>
      <MainTopLeagueList />
      <Epl />
      <EplRanking />
    </div>
  );
}
