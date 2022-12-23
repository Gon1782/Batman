import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EplRanking.css';

export default function MainLanking() {
  const [rank, setRank] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/EPL_Lanking').then((res) => setRank(res.data));
  }, []);
  console.log(rank);
  return (
    <div className='Ranking'>
      <div>
        {rank.map((data) => (
          <div className='rank_title' key={data.id}>
            <div>
              <div>{data.title}</div>
              <div>{data.text}</div>
            </div>
            <img src={data.logo} alt='img' />
          </div>
        ))}
      </div>

      <div className='rank_list'>
        {rank.map((data) => (
          <div key={data.id}>
            <div className='list_logo'>
              <div>
                <img src={data.img1} alt='img' />
              </div>
              <div>{data.name1}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
