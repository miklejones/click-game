import React from "react";
import "./Title.css";

const Title = props => (
    <div className="directionContainer">
            <div className="directionContent">
                <h1>Click a Picture to Play the game.</h1>
                <h3>You lose if you click the same image twice!</h3>
                <h3>{props.message}</h3>
            </div>
        </div>
);

export default Title;