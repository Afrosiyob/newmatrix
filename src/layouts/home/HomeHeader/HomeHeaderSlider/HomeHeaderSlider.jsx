import React from "react";
import Slider from "react-slick";
import "./HomeHeaderSlider.scss";

function HomeHeaderSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="wrap-slick-slider  overflow-hidden  shadow-lg">
      <Slider {...settings}>
        <div className="slider-item">
          <img
            src={
              "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg"
            }
            alt="headerSrc"
          />
        </div>
        <div className="slider-item">
          <img
            src={
              "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg"
            }
            alt="headerSrc"
          />
        </div>
        <div className="slider-item">
          <img
            src={
              "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg"
            }
            alt="headerSrc"
          />
        </div>
        <div className="slider-item">
          <img
            src={
              "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
            }
            alt="headerSrc"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HomeHeaderSlider;
