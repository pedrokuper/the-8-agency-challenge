import React, { useEffect, useState } from "react";
import style from "./Home.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

//Components
import Navbar from "../../components/Navbar";

function Home() {
  const [slide, setSlide] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getPictures();
  }, []);

  async function getPictures() {
    const data = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=5"
    );
    setImages(data.data);
  }

  const selected = {
    backgroundColor: "#D7D7D7",
    border: "1px solid #D7D7D7",
  };

  const unselected = {
    border: `1px solid #D7D7D7`,
  };

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    initialSlide: 0,
    cssEase: "ease",

    beforeChange: (prev, next) => {
      setSlide(next);
    },
    afterChange: (prev) => setSlide(prev),

    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div
        className={style.dots}
        style={i == slide ? selected : unselected}
      ></div>
    ),
  };

  console.log(images);

  return (
    <div>
      <Navbar />

      <Slider className={style.gallery} {...settings}>
        {images.map((image, i) => {
          return (
            <div key={image.id}>
              <img
                className={style.img}
                key={image.id}
                src={image.download_url}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Home;
