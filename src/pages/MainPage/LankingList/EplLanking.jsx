import React, { useState, useEffect } from 'react';

import axios from 'axios';
import './AllRanking.css';

export default function EplLanking() {
  const [rankTitle, setRankTitle] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/Epl_LanKing_title').then((res) => setRankTitle(res.data));
  }, []);

  const [rank, setRank] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/Epl_Lanking').then((res) => setRank(res.data));
  }, []);

  return (
    <div className='Ranking_body'>
      {rankTitle.map((data) => (
        <div className='rank_header' key={data.id}>
          <div>
            <div className='rank_title'>{data.title}</div>
            <div className='rank_text'>{data.text}</div>
          </div>
          <img className='rank_logo' src={data.logo} alt='img' />
        </div>
      ))}
      <div className='ranking_list_title'>Top Lanking</div>
      {rank.map((data) => (
        <div className='rank_list' key={data.id}>
          <div className='rank_num'>{data.num}</div>
          <div className='list_logo'>
            <div>
              <img src={data.img} alt='img' />
            </div>
            <div className='rank_list_name'>{data.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
