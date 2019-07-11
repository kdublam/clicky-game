import React from "react";
import "./style.css"

const Score = props => {
  return (
    <nav class="navbar fixed-top navbar-light">
      <a class="navbar-brand" href="#"></a><p class="score">Your Score: {props.score}</p>
      <p class="score">High Score: {props.highscore}</p>
    </nav>
  )
}

export default Score;  