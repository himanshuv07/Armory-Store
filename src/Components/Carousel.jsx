import React, { useState } from "react";
import "../Style/Carousel.css";

import Image1 from "../assets/Image6.jpg";
import Image2 from "../assets/image1.jpeg";
import Image3 from "../assets/image2.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [Image1, Image2, Image3];

  const changeSlide = (direction) => {
    const newIndex = (currentIndex + direction + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="image-slider">
      <div className="slider">
        <div className="slide">
          <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="prev" onClick={() => changeSlide(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => changeSlide(1)}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
