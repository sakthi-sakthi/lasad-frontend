import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';

const Slider = ({ sliderdata }) => {

  return (
    <div className="carousel-container">
        <Carousel
          showThumbs={false}
          showStatus={true}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={false}
          interval={8000}
          stopOnHover={true}
          transitionTime={2000}
          swipeable={true}
          showArrows={true}
          useKeyboardArrows={true}
          className="carousel"
        >
          {sliderdata?.map((item) => (
            <div key={item?.id} className="slide">
              <img src={item?.image} alt='noslider' />
            </div>
          ))}
        </Carousel>
    </div>
  );
};

export default Slider;
