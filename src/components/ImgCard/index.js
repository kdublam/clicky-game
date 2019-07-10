import React from "react";
import "./style.css";

const ImgCard = props => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={event => props.handleClick(event, props.name)}/>
      </div>
    </div>
  )
}

export default ImgCard;  