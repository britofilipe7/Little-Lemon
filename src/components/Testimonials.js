import React from "react";
import "./styles/Testimonials.css";
import Testimonial from "./Testimonial";

const Testimonials = ({ testimonials_array }) => {
    const testimonials = testimonials_array.map((element) => (
        <Testimonial
            key={element.name}
            rating={element.rating}
            name={element.name}
            review={element.review}
        />
    ));
    return(
        <div className="testimonials_container">
            <div className="Testimonials">
                <h1>Testimonials</h1>
                <div className="testimonials_grid">
                    {testimonials}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;