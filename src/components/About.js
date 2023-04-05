import React from "react";
import "./styles/About.css";
import Photo from "./assets/Mario and Adrian b.jpg"

const About = () => {
    return(
        <div className="About" id="About">
            <div className="info">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </div>
            <div className="picture">
                <img id="ChefsPhoto" src={Photo} alt="Restaurants Chefs"/>
            </div>
        </div>
    );
}

export default About;