
import React from "react";
import Slider from "react-slick";
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'

function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container overflow-hidden " style={{height:"500px"}}>
      <Slider {...settings}>
        <div className="">
          <img src={img1} className="w-100"/>
          
        </div>
        <div className="">
        <img src={img2} className="w-100"/>
        </div>
        {/* <div>
          <h3>3</h3>
        </div>
      */}
      </Slider>
    </div>
  );
}

export default MainSlider;
