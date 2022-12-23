import React from "react";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import "./bet.css";
import Man_City from "../../../assets/img/Man_City.png";
import Liverpool from "../../../assets/img/Liverpool.png";
import draw from "../../../assets/img/DRAW.png";
import { changeBet, getBets } from '../../../api/api';

const Bet = () => {
  const queryClient = useQueryClient();

  const changeMutation = useMutation(changeBet, {
    onSuccess: () => {
      queryClient.invalidateQueries("bets")
    }
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

  let money = data.map(x => x.betMoney)
  let homeOdd = ((money[1] + money[2]) / (money[0]/100) + 100)/100
  let drawOdd = ((money[0] + money[2]) / (money[1]/100) + 100)/100
  let awayOdd = ((money[0] + money[1]) / (money[2]/100) + 100)/100

  let betOnlyOne = data.filter(x => x.isBet === true)
  let betId = betOnlyOne.map(x => x.id)[0]
  let bettingMoney = betOnlyOne.map(x => x.betMoney)[0]
  let onBetting = betOnlyOne.map(x => x.isBet)[0]

  const betHandler = (id ,onBet) => {
    !onBet ? changeBet(id, {betMoney: money[id-1] + 100, isBet: !onBet}) : changeBet(id, {betMoney: money[id-1] - 100, isBet: !onBet}) 
    if (betOnlyOne.length !== 0) changeBet(betId, {betMoney: bettingMoney, isBet: !onBetting})
    changeMutation.mutate(id) 
  }

  const lists = [
    {
      id: 1,
      name: "Man City",
      img: Man_City,
      homeAndAway: "Home",
      odd: homeOdd,
    },
    {
      id: 2,
      name: "Draw",
      img: draw,
      homeAndAway: "Draw",
      odd: drawOdd,
    },
    {
      id: 3,
      name: "Liverpool",
      img: Liverpool,
      homeAndAway: "Away",
      odd: awayOdd,
    },
  ];

  return (
    <div className="bet_layout">
      <div className="bet_body">
        {lists.map((x) => {
          let team = data.filter(a => a.id === x.id)[0]
          let onBet = team.isBet
          let id = team.id
          return (
            <label className={ onBet ? "bet on" : "bet"} key={x.homeAndAway}>
              <button className={ onBet ? "bet_on" : "bet_to"} onClick={() => betHandler(id, onBet)}>
                <img src={x.img} alt="" width="150px" height="150px" />
              </button>
              <div className="bet_btn">{x.odd.toFixed(2)}</div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Bet;
