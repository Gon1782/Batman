import React, { useState } from "react";
import "./bet.css";
import Man_City from "../../../assets/img/Man_City.png";
import Liverpool from "../../../assets/img/Liverpool.png";
import draw from "../../../assets/img/DRAW.png";

const Bet = () => {
  const [bet, setBets] = useState(100);

  const betting = (event) => {
    event.preventDefault();
    setBets(bet + 100);
  };

  const lists = [
    {
      name: "Man City",
      img: Man_City,
      homeAndAway: "Home",
      odd: 1.83,
      isBet: true
    },
    {
      name: "draw",
      img: draw,
      homeAndAway: "draw",
      odd: 3.75,
      isBet: false
    },
    {
      name: "Liverpool",
      img: Liverpool,
      homeAndAway: "Away",
      odd: 4.20,
      isBet: false
    },
  ];

  return (
    <div className="bet_layout">
      <div className="bet_body">
        {lists.map((x) => {
          return (
            <form onSubmit={betting} key={x.homeAndAway}>
              <label className="bet">
                <button className="bet_to">
                  <img src={x.img} alt="" width="150px" height="150px" />
                </button>
                <div className="bet_point_home">
                  <button className="bet_btn">{x.odd.toFixed(2)}</button>
                </div>
              </label>
            </form>
          );
        })}
      </div>
    </div>
  );
};

export default Bet;
