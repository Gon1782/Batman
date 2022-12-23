import { useNavigate } from 'react-router-dom';
import './Main_page.css';

export default function MainTopLeagueList() {
  const topLeagueLists = ['Premier League', 'LaLiga', 'Serie A'];

  const navigate = useNavigate();
  // const [list, setList] = useState(['Premier League', 'LaLiga', 'Serie A']);
  return (
    <div className='list'>
      <div>
        <div className='Topleagues'>Top leagues</div>
        <div
          className='Epl'
          onClick={() => {
            navigate('/');
          }}
        >
          {topLeagueLists[0]}
        </div>
        <div
          className='Laliga'
          onClick={() => {
            navigate('/Laliga');
          }}
        >
          {topLeagueLists[1]}
        </div>
        <div
          className='SerieA'
          onClick={() => {
            navigate('/SerieA');
          }}
        >
          {topLeagueLists[2]}
        </div>
      </div>
    </div>
  );
}
