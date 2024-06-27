import { useState } from "react";
import DATA from "../data/imageData.json";
import GalleryImage from "../components/GalleryImage";
import MainTitle from "../components/MainTitle";
import Fullscreen from "../components/Fullscreen";

// console.log(DATA);

function Gallery() {
  const [display, setDisplay] = useState(false);
  const [fullscreenImg, setFullscreenImg] = useState("selectedFotos/1.jpg");
  console.log(fullscreenImg);
  function triggerFullScreen(bool) {
    setDisplay(bool);
  }

  return (
    <>
      <Fullscreen
        img={fullscreenImg}
        fullscreen={display}
        onClick={() => triggerFullScreen(false)}
      />

      <MainTitle />
      <div className="galleryContainer">
        {DATA.map((img) => {
          // console.log(id);
          return (
            <GalleryImage
              onClick={() => {
                triggerFullScreen(true);
                setFullscreenImg(img.path);
              }}
              key={img.id}
              image={img.path}
            />
          );
        })}
      </div>
    </>
  );
}
export default Gallery;
