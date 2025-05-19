import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image27 from '../assets/image27.png'
import image28 from '../assets/image28.png'

const Shopother = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
       <Slider {...settings}>
        <img src={image27} loading="lazy"/>
        <img src={image28} loading="lazy"/>
       </Slider>
    </div>
  )
}

export default Shopother
