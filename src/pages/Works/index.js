import React from "react";

import "./style.scss";

//Libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Assets
// import images from "../../data/projectImages.json";

//Components
import Navbar from "../../components/Navbar";

function Works() {
  const images = [
    "https://i.postimg.cc/9QnRN7L8/proj-left.png",
    "https://i.postimg.cc/ncnDsZsk/proj-mid.png",
    "https://i.postimg.cc/jdvJP9Pr/proj-right.png",
    "https://i.postimg.cc/CMG8LdK5/proj-left-2.png",
    "https://i.postimg.cc/QtLBjrGc/proj-mid-2.png",
    "https://i.postimg.cc/SxsYrrfY/proj-right-2.png",
    "https://i.postimg.cc/bJQZJFpW/proj-left-3.png",
    "https://i.postimg.cc/FKkdtHq9/proj-mid-3.png",
    "https://i.postimg.cc/MHqvjbGT/proj-right-3.png",
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <Navbar />
      <Slider {...settings}>
        {images.map((img, i) => {
          return (
            <div className="carousel-container" key={i}>
              <img className="img" src={img} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Works;
