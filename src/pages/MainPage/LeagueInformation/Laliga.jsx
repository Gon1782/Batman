import React from 'react';

export default function Laliga() {
  return <div>라리가</div>;
}

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import MainTopLeagueList from '../TopLeaguesList/MainTopLeagueList';

// import './Laliga.css';

// export default function LaLiga() {
//   const [info, setInfo] = useState([]);
//   useEffect(() => {
//     axios.get('http://localhost:3001/Laliga').then((res) => setInfo(res.data));
//   }, []);
//   console.log(info);
//   return (
//     <div className='Laliga_body'>
//       <MainTopLeagueList />
//       <div className='information'>
//         <div className='title'>Premier League</div>

//         <div className='league'>
//           <div>
//             {info.map((data) => (
//               <div className='epllist' key={data.id}>
//                 <div className='home'>
//                   {data.home} <img src={data.homeimg} alt='img' />
//                 </div>
//                 <div>{data.time}</div>
//                 <div className='away'>
//                   <img src={data.awayimg} alt='img' />
//                   {data.away}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
