import React from "react";
import Wrapper from "../Wrapper"
//import "./StatusBar.css";

const StatusBar = props => (
    <div>
        <nav className="navbar">
            <h1>{props.message}</h1>
            <h1>Score: {props.score}</h1>
        </nav>
    </div>  
)

export default StatusBar;