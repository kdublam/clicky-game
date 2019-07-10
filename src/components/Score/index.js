import React from "react";

const Score = props => {
  return (
    <div>
      <p>You Score: {props.score}</p>
      <p>High Score: {props.highscore}</p>
    </div>
  )
}

export default Score;  