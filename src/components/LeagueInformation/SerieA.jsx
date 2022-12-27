import axios from 'axios';
import { useQuery } from 'react-query';
import MainTopLeagueList from '../TopLeaguesList/MainTopLeagueList';
import SerieALanking from '../LankingList/SerieALanking';
import { useNavigate } from 'react-router-dom';

export default function SerieA() {
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery(['information'], async () => await axios.get('http://localhost:3001/SerieA').then((res) => res.data));
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <div className='Laliga_page_body'>
      <MainTopLeagueList />
      <div className='information'>
        {data.map((data, i) => (
          <div key={data.id}>
            <div className='main_league_title'>
              {data.title}
            </div>

            <div
              className='main_league'
              onClick={() => {
                navigate('/detail/SerieA' + i + '', { state: { SerieAId: 'SerieA', SerieAUId: parseInt('300' + i) } });
              }}
            >
              <div className='epllist'>
                <div className='home'>{data.home}</div>
                <div className='game_time'>
                  <img src={data.homeimg} alt='img' />
                  {data.time}
                  <img src={data.awayimg} alt='img' />
                </div>
                <div className='away'>{data.away}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SerieALanking />
    </div>
  );
}
