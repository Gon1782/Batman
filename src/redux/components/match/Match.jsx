import React, { useState, useEffect } from "react";
import "./match.css";
import eplLogo from "../../../assets/img/EPL_logo.png";
import ENG from "../../../assets/img/eng.png";
import Man_City from "../../../assets/img/Man_City.png";
import Liverpool from "../../../assets/img/Liverpool.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Match = () => {
  const navigate = useNavigate();

  const [matchdatas, setMatchdatas] = useState([]);

  // const matchdata = async () => {
  //   const { data } = await axios.get("http://localhost:3001/matchdatas");
  //   setMatchdatas(data);
  // };

  useEffect(() => {
    axios.get("http://localhost:3001/matchdatas").then((res) => setMatchdatas(res.data));
  }, []);

  return (
    <div className="match_info">
      <section className="match_header">
        {/* 경기정보의 상단 부분 */}
        <button className="match_btn" onClick={() => navigate("/")}>
          &lt; 뒤로가기
        </button>
        {/* 홈으로 돌아가는 버튼 */}
        <div className="league">
          <img alt="" width="22" height="22" src={eplLogo} />
          {matchdatas.map((data) => {
            return <div>{data.league}</div>;
          })}
        </div>

        <div className="country">
          <img alt="" width="22" height="22" src={ENG} />
          <div>ENG</div>
        </div>
      </section>
      <section className="match_body">
        {/* 경기정보의 중단 부분 */}
        <div className="home">
          <div>Manchester City</div>
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
