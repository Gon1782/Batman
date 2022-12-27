import axios from 'axios';
import { useQuery } from 'react-query';
import LaligaLanking from '../../../pages/MainPage/LankingList/LaligaLanking';
import MainTopLeagueList from '../TopLeaguesList/MainTopLeagueList';
import { useNavigate } from 'react-router-dom';

export default function Laliga() {
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery(['information'], async () => await axios.get('http://localhost:3001/Laliga').then((res) => res.data));
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <div className='Laliga_page_body'>
      <MainTopLeagueList />
      <div className='information'>
        {data.map((data, i) => (
          <>
            <div className='main_league_title' key={data.id}>
              {data.title}
            </div>

            <div
              className='main_league'
              onClick={() => {
                navigate('/detail/Laliga' + i + '', { state: { LaligaId: 'Laliga', LaligaUId: parseInt('200' + i) } });
              }}
            >
              <div className='epllist' key={data.id}>
                <div className='home'>{data.home}</div>
                <div className='game_time'>
                  <img src={data.homeimg} alt='img' />
                  {data.time}
                  <img src={data.awayimg} alt='img' />
                </div>
                <div className='away'>{data.away}</div>
              </div>
            </div>
          </>
        ))}
      </div>
      <LaligaLanking />
    </div>
  );
}
