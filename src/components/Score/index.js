import React from "react";
import "./style.css"

const Score = props => {
  return (
    <nav class="navbar fixed-top navbar-light">
  <a class="navbar-brand" href="#"></a><h4>Your Score: {props.score}</h4>
      <h4>High Score: {props.highscore}</h4>
</nav>
    // <div className="scoreDiv">
      
    // </div>
  )
}

export default Score;  