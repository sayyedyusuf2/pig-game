import React from "react";
import "./Players.css";

const Players = ({active, score, name, winner,current }) => {
  let playerPanel = `player-container`;
  if(active) playerPanel += ' active';
  else if(winner)  playerPanel += ' winner';
  return (
    <div className={playerPanel}>
      <div className="player-header">{name}</div>
      <div className="player-score">{score}</div>
      <div className="player-current-container">
        <div className="current-score-header">CURRENT</div>
        <div className="current-score">{current}</div>
      </div>
    </div>
  );
};

export default Players;
