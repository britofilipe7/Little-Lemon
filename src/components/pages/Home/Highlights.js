import React from 'react';
import Highlight from "./Highlight";
import "../../styles/Highlights.css";

const Highlights = ({ highlights_array }) => {
    const highlights = highlights_array.map((highlight) => (
          <Highlight
            key={highlight.title}
            image={highlight.image}
            title={highlight.title}
            price={highlight.price}
            description={highlight.description}
          />
        ));
    return (
        <div className='highlights'>
            <div className='heading'>
                <h3>This weeks specials!</h3>
                <button>Online Menu</button>
            </div>
            <div className="highlights_items">{highlights}</div>
        </div>
    );
  };

export default Highlights;




