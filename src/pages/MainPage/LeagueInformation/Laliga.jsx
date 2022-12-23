import axios from 'axios';
import { useQuery } from 'react-query';
import LaligaLanking from '../LankingList/LaligaLanking';
import MainTopLeagueList from '../TopLeaguesList/MainTopLeagueList';

export default function Laliga() {
  const { isLoading, error, data } = useQuery(['information'], async () => await axios.get('http://localhost:3001/Laliga').then((res) => res.data));
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <div className='Laliga_page_body'>
      <MainTopLeagueList />
      <div className='information'>
        {data.map((data) => (
          <>
            <div className='main_league_title' key={data.id}>
              {data.title}
            </div>

            <div className='main_league'>
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
      <LaligaLanking />
    </div>
  );
}
