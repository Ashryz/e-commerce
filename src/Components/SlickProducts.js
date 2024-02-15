import React from "react";
import Slider from "react-slick";
import img1 from '../img/6.jpg'
import img2 from '../img/4.jpeg'
import img3 from '../img/5.jpg'
import img4 from '../img/7.jpg'
import img5 from '../img/8.jpg'

function SlickProducts() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container overflow-hidden" style={{height:"300px"}}>
      <Slider {...settings}>
        <div className="rounded-5   p-5 shadow">
          <img src={img1} className="w-100"/>
        </div >
        <div className="rounded-5  p-5  shadow">
        <img src={img2} className="w-100"/>
        </div>
        <div className="rounded-5 p-5  shadow">
        <img src={img3} className="w-100"/>
        </div>
        <div className="rounded-5  p-5  shadow">
        <img src={img4} className="w-100"/>
        </div>
        <div className="rounded-5  p-5 shadow">
        <img src={img5} className="w-100"/>
        </div>
        {/* <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    </div>
  );
}

export default SlickProducts;