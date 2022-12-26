import React, { useState, useEffect } from "react";
import "./match.css";
import eplLogo from "../../../assets/img/EPL_logo.png";
import ENG from "../../../assets/img/eng.png";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
// import Man_City from "../../../assets/img/Man_City.png";
// import Liverpool from "../../../assets/img/Liverpool.png";

const Match = () => {
  const { path } = useParams();
  const location = useLocation();
  let EPLId = location.state.EPLId;
  let LaligaId = location.state.LaligaId;
  let SerieAId = location.state.SerieAId;
  let EPLUId = location.state.EPLUId;
  let LaligaUId = location.state.LaligaUId;
  let SerieAUId = location.state.SerieAUId;
  let t = path.replace(/[^0-9]/g, "");

  const LeagueId = (i) => {
    let leagueid;
    if (path === "EPL" + i + "") {
      leagueid = EPLId;
    } else if (path === "Laliga" + i + "") {
      leagueid = LaligaId;
    } else if (path === "SerieA" + i + "") {
      leagueid = SerieAId;
    }
    return leagueid;
  };

  const LeagueUId = (i) => {
    let leagueuid;
    if (path === "EPL" + i + "") {
      leagueuid = EPLUId;
    } else if (path === "Laliga" + i + "") {
      leagueuid = LaligaUId;
    } else if (path === "SerieA" + i + "") {
      leagueuid = SerieAUId;
    }
    return leagueuid;
  };

  // console.log(location.pathname);
  const navigate = useNavigate();

  const [matchdatas, setMatchdatas] = useState([]);
  const matchData = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.league);
  const matchDatahome = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.home);
  const matchDatahomeimg = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.homeimg);
  const matchDataaway = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.away);
  const matchDataawayimg = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.awayimg);
  const matchDatahour = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.hour);
  const matchDatatime = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.time);
  const matchDataplace = matchdatas.filter((data) => data.id === LeagueUId(t)).map((data) => data.homeplace);
  console.log(matchDatahomeimg);
  console.log(matchData);
  useEffect(() => {
    axios
      .get("http://localhost:3001/" + LeagueId(t) + "")
      .then((res) => setMatchdatas(res.data))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, []);

  return (
    <div className="match_info">
      <section className="match_header">
        {/* 경기정보의 상단 부분 */}
        <button className="match_btn" onClick={() => navigate(-1)}>
          &lt; 뒤로가기
        </button>
        {/* 홈으로 돌아가는 버튼 */}
        <div className="league">
          <img alt="img" width="22" height="22" src={eplLogo} />
          {matchData}
        </div>

        <div className="country">
          <img alt="img" width="22" height="22" src={ENG} />
          <div>ENG</div>
        </div>
      </section>
      <section className="match_body">
        {/* 경기정보의 중단 부분 */}
        <div className="home">
          <div>{matchDatahome}</div>
          <img alt="img" src={matchDatahomeimg} />
        </div>
        <div className="match_middle">
          <div>{matchDatahour}</div>
          <div>vs</div>
        </div>
        <div className="away">
          <img alt="img" width="50" height="50" src={matchDataawayimg} />
          <div>{matchDataaway}</div>
        </div>
      </section>
      <section className="match_footer">
        {/* 경기정보의 하단부분 */}
        <div>{matchDatatime}</div>
        {/* 경기 시작시간 */}
        <div>{matchDataplace}</div>
        {/* 경기 장소 */}
      </section>
    </div>
  );
};

export default Match;
