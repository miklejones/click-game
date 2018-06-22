import React from "react";
import "./PlayingCard.css";

const PlayingCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>

)

export default PlayingCard;