import React from "react";
import "./style.css"

const Score = props => {
  return (
    <div className="scoreDiv">
      <h3>You Score: {props.score}</h3>
      <h3>High Score: {props.highscore}</h3>
    </div>
  )
}

export default Score;  