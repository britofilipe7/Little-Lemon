import React from "react";
import "./styles/Testimonial.css";
import Star_Solid from "./assets/star-solid.svg";
import Star_Regular from "./assets/star-regular.svg";


const Testimonial = ({rating, name, review}) => {
    //if rating is less than 0 and more than 5
    const solidStars = Array(rating).fill(<img className="star_solid" src={Star_Solid} alt="solid review star" />);
    const regularStars = Array(5 - rating).fill(<img className="star_regular" src={Star_Regular} alt="regular review star" />);
    const stars = [...solidStars, ...regularStars];
    return(
        <div className="Testimonial">
            <div className="stars">{stars}</div>
            <div className="name">{name}</div>
            <div className="review">{review}</div>
        </div>
    );
}


export default Testimonial;