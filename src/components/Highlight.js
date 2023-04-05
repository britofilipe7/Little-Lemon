import React from "react";
import "./styles/Highlight.css";

import truck from "./assets/truck-fast-solid.svg";

const Highlight = ({image, title, price, description}) => {
    return(
        <div className="Highlight">
            <img className="image" src={image} alt={title}/>
            <div className="highlight_content">
                <div className="name-price">
                    <p id="title">{title}</p>
                    <p id="price">{price}</p>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="order">
                    <a href="//google.pt">Order a delivery<img id="truck" src={truck} alt="truck"/></a>
                </div>
            </div>
        </div>
    )
}

export default Highlight;