import axios from 'axios';
import { useQuery } from 'react-query';
import './AllLeagues.css';
import { useNavigate } from 'react-router-dom';

export default function Epl() {
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery(['information'], async () => await axios.get('http://localhost:3001/EPL').then((res) => res.data));
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <div className='information'>
      {data.map((data) => (
        <>
          <div className='main_league_title' key={data.id}>
            {data.title}
          </div>

          <div
            className='main_league'
            onClick={() => {
              navigate('/detail');
            }}
          >
            <div className='epllist' key={data.id}>
              <div className='home'>
                {data.home} <img src={data.homeimg} alt='img' />
              </div>
              <div className='game_time'>{data.time}</div>
              <div className='away'>
                <img src={data.awayimg} alt='img' />
                {data.away}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
