import React from 'react';
import { useState } from 'react';

const Carousel = ({ images }) => {
    const [index, setIndex] = useState(0);
  
    const showPrev = () => {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    };
  
    const showNext = () => {
      setIndex((prev) => (prev + 1) % images.length);
    };
  
    return (
      <div className="carousel-container">
        <button className="prev" onClick={showPrev}>&#10094;</button>
  
        <div className="carousel">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Imagen ${i}`}
              className={i === index ? "active" : ""}
            />
          ))}
        </div>
  
        <button className="next" onClick={showNext}>&#10095;</button>
      </div>
    );
  };
  
  export default Carousel;