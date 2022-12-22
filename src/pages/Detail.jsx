import React from "react";
import Bet from '../redux/components/bet/Bet';
import Comment from '../redux/components/comment/Comment';
import Match from '../redux/components/match/Match';
import "../styles/detail.css"

const Detail = () => {
  return (
    <div className="detail_layout">
      <Match />
      <Bet />
      <Comment />
    </div>
  );
};

export default Detail;
