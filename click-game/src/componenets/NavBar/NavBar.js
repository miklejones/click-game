import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <nav className="navbar navbar-expand-lg">
        {/* <a className="navbar-brand" href="">Click Game</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li><a href="/">Clicky Game</a></li>
                <li className="nav-item active">
                    Current Score: {props.score}
                </li>
                <li className="nav-item active">
                    High Score: {props.highScore}
                </li>

            </ul>

        </div>
    </nav>
);
export default NavBar;