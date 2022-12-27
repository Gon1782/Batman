import React from "react";
import Bet from '../components/bet/Bet';
import Comment from '../components/comment/Comment';
import Match from '../components/match/Match';
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
