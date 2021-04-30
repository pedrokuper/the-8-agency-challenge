import React, { useState } from "react";

import "./style.scss";

//Libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcNext } from "react-icons/fc";

//Assets
// import images from "../../data/projectImages.json";

//Components
import Navbar from "../../components/Navbar";

function SampleNextArrow(props) {
  const { className, style, onClick, FcNext } = props;
  return (
    <>
      <div
        className="slick-arrow slick-next fa fa-angle-left"
        onClick={onClick}
      />
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev fa fa-angle-left"
      onClick={onClick}
    />
  );
}

function Works() {
  const [card, setShowCard] = useState(false);
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function handleShowCard() {
    setShowCard((prevState) => !prevState);
  }
  function handleHideCard() {
    setShowCard((prevState) => !prevState);
  }

  const showCard = card ? "showCard" : "";

  return (
    <div className="wrapper">
      <Navbar />
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {images.map((img, i) => {
            return (
              <div
                onMouseLeave={() => img.includes("mid") && handleHideCard()}
                onMouseEnter={() => img.includes("mid") && handleShowCard()}
                className="carousel-container"
                key={i}
              >
                <img className="img" src={img} alt="" />
                {img.includes("mid") && (
                  <div className={`card ${showCard}`}>
                    <h4>Project name</h4>
                    <p>Vivamus imperdiet hendrerit leo quis fringilla.</p>
                  </div>
                )}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Works;
