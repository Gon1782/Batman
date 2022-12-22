import React from 'react';

import './Main_page.css';

const topLeagueLists = ['Premier League', 'LaLiga', 'Serie A'];

export default function MainTopLeagueList() {
  return (
    <div className='list'>
      <p>Top leagues</p>
      <ul>
        {topLeagueLists.map((value, index) => (
          <li key={index}>
            <button>{value}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
