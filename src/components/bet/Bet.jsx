import React from "react";
import { useQueries, useQueryClient } from "react-query";
import "./bet.css";
import draw from "../../assets/img/DRAW.png";
import { changeBet, getBets, getEPL, getLaliga, getSerieA } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { betOff, betOn } from "../../redux/modules/betSlice";
import { useParams } from "react-router-dom";

const Bet = () => {
  const queryClient = useQueryClient();
  const { path } = useParams();
  const dispatch = useDispatch();
  const bet = useSelector((state) => state.bet);
  let betCheck = bet.filter((x) => x.isBet === true).length;

  let param = path.match(/[a-z]+/gi).join("");
  let matches = Number(path.match(/\d+/g).join(""));

  const results = useQueries([
    {
      queryKey: "bets",
      queryFn: getBets,
    },
    {
      queryKey: "EPL",
      queryFn: getEPL,
    },
    {
      queryKey: "Laliga",
      queryFn: getLaliga,
    },
    {
      queryKey: "SerieA",
      queryFn: getSerieA,
    },
  ]);

  const isLoading = results.some((result) => result.isLoading);

  const isError = results.some((result) => result.isError);

  const error = results.some((result) => result.error);

  const data = results.map((result) => result.data);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  let league = [];
  if (param === "EPL") league = data[1][matches];
  if (param === "Laliga") league = data[2][matches];
  if (param === "SerieA") league = data[3][matches];

  let homemoney = league.homebet;
  let drawmoney = league.drawbet;
  let awaymoney = league.awaybet;
  let money = homemoney + drawmoney + awaymoney;
  let homeOdd = Math.floor((drawmoney + awaymoney) / (homemoney / 100) + 100);
  let drawOdd = Math.floor((homemoney + awaymoney) / (drawmoney / 100) + 100);
  let awayOdd = Math.floor((homemoney + drawmoney) / (awaymoney / 100) + 100);
  let homePercent = Math.round((homemoney / money) * 100);
  let drawPercent = Math.round((drawmoney / money) * 100);
  let awayPercent = Math.round((awaymoney / money) * 100);

  const betHandler = (id, onBet, money) => {
    if (!onBet) {
      dispatch(betOn(id));
      if (id === 1) changeBet(param, league.id, { homebet: money + 100 });
      if (id === 2) changeBet(param, league.id, { drawbet: money + 100 });
      if (id === 3) changeBet(param, league.id, { awaybet: money + 100 });
    } else {
      dispatch(betOff());
      if (id === 1) changeBet(param, league.id, { homebet: money - 100 });
      if (id === 2) changeBet(param, league.id, { drawbet: money - 100 });
      if (id === 3) changeBet(param, league.id, { awaybet: money - 100 });
    }
    queryClient.invalidateQueries(param);
  };

  const lists = [
    {
      id: 1,
      name: league.home,
      img: league.homeimg,
      homeAndAway: "Home",
      odd: homeOdd,
      percent: homePercent,
    },
    {
      id: 2,
      name: "Draw",
      img: draw,
      homeAndAway: "Draw",
      odd: drawOdd,
      percent: drawPercent,
    },
    {
      id: 3,
      name: league.away,
      img: league.awayimg,
      homeAndAway: "Away",
      odd: awayOdd,
      percent: awayPercent,
    },
  ];

  return (
    <div className="bet_layout">
      <div className="bet_body">
        {lists.map((x) => {
          let onBet = bet[x.id - 1];
          let money = 0;
          if (x.homeAndAway === "Home") money = homemoney;
          if (x.homeAndAway === "Draw") money = drawmoney;
          if (x.homeAndAway === "Away") money = awaymoney;
          let labelClass = "";
          let btnClass = "";
          if (onBet.id === x.id && betCheck > 0) {
            labelClass = "bet_disabled";
            btnClass = "bet_to_disabled";
          } else {
            labelClass = "bet";
            btnClass = "bet_to";
          }
          return (
            <label className={onBet.isBet ? "bet on" : labelClass} key={x.homeAndAway}>
              <button className={onBet.isBet ? "bet_on" : btnClass} onClick={() => betHandler(x.id, onBet.isBet, money)} disabled={!onBet.isBet && betCheck > 0 ? "disabled" : ""}>
                <img src={x.img} alt="" width="150px" height="150px" />
              </button>
              <div className="bet_btn">
                <div>Bet: {money} P</div>
                <div>예상 포인트: {x.odd} P</div>
                <div>{x.percent}%</div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Bet;
