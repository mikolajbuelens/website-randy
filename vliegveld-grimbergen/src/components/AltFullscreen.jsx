import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data/imageData.json";

// TODO: Why does all text appear briefly when switching images?

function Fullscreen({ img, fullscreen, onClick }) {
  console.log(img.id);
  //   const [slideIndex, setSlideIndex] = useState(img.id);
  //   const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    // afterChange: () => setUpdateCount(updateCount + 1),
    // beforeChange: (current, next) => setSlideIndex(next),
  };
  console.log(fullscreen);
  useEffect(() => {
    if (fullscreen) {
      sliderRef.slickGoTo(img.id - 1, true);
    }
  }, [fullscreen]);

  return (
    <>
      {/* slickGoTo */}
      {/* <button
        onClick={() => sliderRef.slickGoTo(5, true)}
        style={{ position: "fixed", zIndex: 1000000 }}
      >
        Test GoTO
      </button> */}
      <div
        onClick={() => onClick(false)}
        className={`fullscreenBackdrop ${fullscreen ? "show" : "hide"}`}
      ></div>
      <div className="flexCenter">
        <div
          className={`slider-container fullscreenContainerAlt ${
            fullscreen ? "showAlt" : "hide"
          }`}
        >
          <button onClick={() => onClick(false)} className="closeBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#535e38"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {/* <div className="flex-slide">
            <img src="selectedFotos/1.jpg" alt="ALT_IMAGE" />
            <p>
              De ‘parachutist’s badge’ oftewel ‘jump wings’ is het officiële
              embleem van deze elitetroepen. Zij waren een gloednieuw concept
              binnen het Amerikaanse leger. Hun doel was om per parachute achter
              de vijandelijke linies te landen om chaos en verwarring te
              veroorzaken. Deze troepen werden onder andere ingezet tijdens de
              vroege uurtjes van D-Day om belangrijke wegen en bruggen in te
              nemen en de landingen van de infanterie op Utah Beach te dekken.
              (Metaaldetectievondst Randy Buelens)
            </p>
          </div> */}

            {data.map((img) => {
              return (
                <div className="flex-slide" key={img.id}>
                  <img src={img.path} alt={img.text} />
                  <p>{img.text}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {/* <div className={`fullscreenContainer ${fullscreen ? "show" : "hide"}`}>
        <img className="fullscreenImg" src={img.path} alt="" />
        <p>{img.text}</p>
      </div> */}
    </>
  );
}
export default Fullscreen;
