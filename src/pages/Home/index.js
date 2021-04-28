import React, { useEffect, useState } from "react";
import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import axios from "axios";
import homeImages from "../../data/homeImages.json";

//Components
import Navbar from "../../components/Navbar";

function Home() {
  const [slide, setSlide] = useState(0);
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getPictures();
  // }, []);

  // async function getPictures() {
  //   const data = await axios.get(
  //     "https://picsum.photos/v2/list?page=3&limit=5"
  //   );
  //   setImages(data.data);
  // }

  const selected = {
    backgroundColor: "#D7D7D7",
    border: "2px solid #D7D7D7",
  };

  const unselected = {
    border: `2px solid #D7D7D7`,
  };

  const settings = {
    draggable: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    initialSlide: 0,
    cssEase: "ease",
    lazyLoad: "ondemand",
    autoplay: "true",
    fade: "true",

    beforeChange: (prev, next) => {
      setSlide(next);
    },
    afterChange: (prev) => setSlide(prev),

    appendDots: (dots) => <ul className="dotsContainer">{dots}</ul>,
    customPaging: (i) => (
      <div className="dots" style={i == slide ? selected : unselected}></div>
    ),
  };

  return (
    <div className="wrapper">
      <Navbar />
      <div className="home-container">
        <Slider {...settings}>
          {homeImages.map((image, i) => {
            return (
              <div className="imgContainer" key={image.id}>
                <img className="img" key={image.id} src={image.imgURL} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Home;
