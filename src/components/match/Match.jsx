import React, { useState, useEffect } from 'react';
import './match.css';
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const Match = () => {
  const { path } = useParams();
  const location = useLocation();
  let EPLId = location.state.EPLId;
  let LaligaId = location.state.LaligaId;
  let SerieAId = location.state.SerieAId;
  let EPLUId = location.state.EPLUId;
  let LaligaUId = location.state.LaligaUId;
  let SerieAUId = location.state.SerieAUId;
  let t = path.replace(/\D/g, '');

  const LeagueId = (i) => {
    let leagueid;
    if (path === 'EPL' + i + '') {
      leagueid = EPLId;
    } else if (path === 'Laliga' + i + '') {
      leagueid = LaligaId;
    } else if (path === 'SerieA' + i + '') {
      leagueid = SerieAId;
    }
    return leagueid;
  };

  const LeagueUId = (i) => {
    let leagueuid;
    if (path === 'EPL' + i + '') {
      leagueuid = EPLUId;
    } else if (path === 'Laliga' + i + '') {
      leagueuid = LaligaUId;
    } else if (path === 'SerieA' + i + '') {
      leagueuid = SerieAUId;
    }
    return leagueuid;
  };

  const navigate = useNavigate();

  const [matchdatas, setMatchdatas] = useState([]);
  const matchData = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.league);
  const matchDatalogo = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.logo);
  const matchDatanationlogo = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.nationlogo);
  const matchDatanation = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.nation);
  const matchDatahome = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.home);
  const matchDatahomeimg = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.homeimg);
  const matchDataaway = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.away);
  const matchDataawayimg = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.awayimg);
  const matchDatahour = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.hour);
  const matchDatatime = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.time);
  const matchDataplace = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.homeplace);
  
  useEffect(() => {
    axios
      .get('https://available-dented-arrhinceratops.glitch.me/' + LeagueId(t) + '')
      .then((res) => setMatchdatas(res.data))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }, []);

  return (
    <div className='match_info'>
      <section className='match_header'>
        {/* ??????????????? ?????? ?????? */}
        <button className='match_btn' onClick={() => navigate(-1)}>
          <FiChevronLeft />
        </button>
        {/* ????????? ???????????? ?????? */}
        <div className='league'>
          <img alt='img' width='30' height='30' src={matchDatalogo} />
          {matchData}
        </div>

        <div className='country'>
          <img alt='img' width='30' height='30' src={matchDatanationlogo} />
          <div>{matchDatanation}</div>
        </div>
      </section>
      <section className='match_body'>
        {/* ??????????????? ?????? ?????? */}
        <div className='match_home'>
          <div>{matchDatahome}</div>
          <img alt='img' width='75' height='75' src={matchDatahomeimg} />
        </div>
        <div className='match_middle'>
          <div>{matchDatahour}</div>
          <div>vs</div>
        </div>
        <div className='match_away'>
          <img alt='img' width='75' height='75' src={matchDataawayimg} />
          <div>{matchDataaway}</div>
        </div>
      </section>
      <section className='match_footer'>
        {/* ??????????????? ???????????? */}
        <div>{matchDatatime}</div>
        {/* ?????? ???????????? */}
        <div>{matchDataplace}</div>
        {/* ?????? ?????? */}
      </section>
    </div>
  );
};

export default Match;
