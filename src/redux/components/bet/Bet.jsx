import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import "./bet.css";
import Man_City from "../../../assets/img/Man_City.png";
import Liverpool from "../../../assets/img/Liverpool.png";
import draw from "../../../assets/img/DRAW.png";
import { changeBet, getBets } from "../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { betOff, betOn } from "../../modules/betSlice";

const Bet = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const bet = useSelector((state) => state.bet);
  let betCheck = bet.filter((x) => x.isBet === true).length;

  const changeMutation = useMutation(changeBet, {
    onSuccess: () => {
      queryClient.invalidateQueries("bets");
    },
  });

  const { isLoading, isError, data, error } = useQuery("bets", getBets, {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  let money = data.map((x) => x.betMoney);
  let homeOdd = Math.floor((money[1] + money[2]) / (money[0] / 100) + 100)
  let drawOdd = Math.floor((money[0] + money[2]) / (money[1] / 100) + 100)
  let awayOdd = Math.floor((money[0] + money[1]) / (money[2] / 100) + 100)
  let homePercent = Math.round((money[0] / money.reduce((a, b) => a + b)) * 100);
  let drawPercent = Math.round((money[1] / money.reduce((a, b) => a + b)) * 100);
  let awayPercent = Math.round((money[2] / money.reduce((a, b) => a + b)) * 100);

  const betHandler = (id, onBet) => {
    if (!onBet) {
      dispatch(betOn(id));
      changeBet(id, { betMoney: money[id - 1] + 100 });
    } else {
      dispatch(betOff(id));
      changeBet(id, { betMoney: money[id - 1] - 100 });
    }
    changeMutation.mutate(id);
  };

  const lists = [
    {
      id: 1,
      name: "Man City",
      img: Man_City,
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
      name: "Liverpool",
      img: Liverpool,
      homeAndAway: "Away",
      odd: awayOdd,
      percent: awayPercent,
    },
  ];

  return (
    <div className="bet_layout">
      <div className="bet_body">
        {lists.map((x) => {
          let list = data.filter((a) => a.id === x.id);
          let team = list[0];
          let id = team.id;
          let Bet = bet[id - 1];
          let labelClass = "";
          let btnClass = "";
          if (Bet.id === id && betCheck > 0) {
            labelClass = "bet_disabled";
            btnClass = "bet_to_disabled";
          } else {
            labelClass = "bet";
            btnClass = "bet_to";
          }
          return (
            <label className={Bet.isBet ? "bet on" : labelClass} key={x.homeAndAway}>
              <button className={Bet.isBet ? "bet_on" : btnClass} onClick={() => betHandler(id, Bet.isBet)} disabled={!Bet.isBet && betCheck > 0 ? "disabled" : ""}>
                <img src={x.img} alt="" width="150px" height="150px" />
              </button>
              <div className="bet_btn">
                <div>Bet: {team.betMoney} P</div>
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
