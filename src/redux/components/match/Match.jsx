import React, { useState, useEffect } from "react";
import "./match.css";
import eplLogo from "../../../assets/img/EPL_logo.png";
import ENG from "../../../assets/img/eng.png";
import Man_City from "../../../assets/img/Man_City.png";
import Liverpool from "../../../assets/img/Liverpool.png";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
// import { useQuery } from "react-query";

const Match = () => {
  const { path } = useParams();
  const location = useLocation();
  const EPLId = location.state.EPLId;
  const LaligaId = location.state.LaligaId;
  const SerieAId = location.state.SerieAId;
  const EPLUId = location.state.EPLUId;
  const [leagueUID, setLeagueUID] = useState(0);
  console.log(EPLUId);
  console.log("100" + 1);

  const LeagueId = (i) => {
    let leagueid;
    if (path === "EPL" + i + "") {
      setLeagueUID(i);
      leagueid = EPLId;
    } else if (path === "Laliga" + i + "") {
      setLeagueUID(i);
      leagueid = LaligaId;
    } else if (path === "SerieA" + i + "") {
      setLeagueUID(i);
      leagueid = SerieAId;
    }
    return leagueid;
  };

  console.log(location.pathname);
  console.log(leagueUID);

  const navigate = useNavigate();

  const [matchdatas, setMatchdatas] = useState([]);
  const matchData = matchdatas.filter((data) => data.id === EPLUId).map((data) => <div key={data.id}>{data.home}</div>);

  // const { isLoading, error, data } = useQuery(["info"], async () => await axios.get("http://localhost:3001/" + { uid } + "").then((res) => res.data));
  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>error</p>;

  // const matchdata = async () => {
  //   const { data } = await axios.get("http://localhost:3001/matchdatas");
  //   setMatchdatas(data);
  // };

  useEffect(() => {
    axios
      .get("http://localhost:3001/" + LeagueId(leagueUID) + "")
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
        <button className="match_btn" onClick={() => navigate("/")}>
          &lt; 뒤로가기{path}
        </button>
        {/* 홈으로 돌아가는 버튼 */}
        <div className="league">
          <img alt="" width="22" height="22" src={eplLogo} />
          {matchData}
        </div>

        <div className="country">
          <img alt="" width="22" height="22" src={ENG} />
          <div>ENG</div>
        </div>
      </section>
      <section className="match_body">
        {/* 경기정보의 중단 부분 */}
        <div className="home">
          <div>Manchester City{}</div>
          <img alt="" width="50" height="50" src={Man_City} />
        </div>
        <div className="match_middle">
          <div>{}</div>
          <div>vs</div>
        </div>
        <div className="away">
          <img alt="" width="50" height="50" src={Liverpool} />
          <div>Liverpool</div>
        </div>
      </section>
      <section className="match_footer">
        {/* 경기정보의 하단부분 */}
        <div>{}</div>
        {/* 경기 시작시간 */}
        <div>Etihad Stadium</div>
        {/* 경기 장소 */}
      </section>
    </div>
  );
};

export default Match;
