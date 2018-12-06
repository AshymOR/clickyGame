import React from "react";
import "./Images.css";

const Image = props => (
    <div className="card" onClick={() => props.touch(props.id)}>
        <div className="img-container">
            <img alt={props.id} src={props.image} />
        </div>
    </div>
)

export default Image;