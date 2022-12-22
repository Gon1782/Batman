import React from 'react';
import MainLanking from './pages/MainPage/MainLanking';
import MainLeagueInformation from './pages/MainPage/MainLeagueInformation';
import MainTopLeagueList from './pages/MainPage/MainTopLeagueList';

const App = () => {
  return (
    <div>
      <MainTopLeagueList />
      <MainLeagueInformation />
      <MainLanking />
    </div>
  );
};

export default App;
