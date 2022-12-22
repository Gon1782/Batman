import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Main_page.css';

export default function MainLeagueInformation() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/LeagueInformation').then((res) => setInfo(res.data));
  }, []);
  console.log(info);
  return (
    <div className='information'>
      <div className='title'>리그 타이틀</div>
      <div className='league'>
        <div>
          {info.map((data) => (
            <div key={data.id}>
              <div>{data.name1}</div>

              <div>{data.name2}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
