import { useState } from "react";
import DATA from "../data/imageData.json";
import GalleryImage from "../components/GalleryImage";
import MainTitle from "../components/MainTitle";
import Fullscreen from "../components/Fullscreen";
import AltFullscreen from "../components/AltFullscreen";

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
      <div className="flexCenter flexIntro">
        <h2 className="introTitle">Virtueel Museum</h2>

        <h1 className="galleryIntro">
          Met behulp van een metaaldetector, een spade en veel
          doorzettingsvermogen slaagden de auteurs erin een extra dimensie aan
          dit boek toe te voegen. Zes jaar lang werden het Grimbergse vliegveld,
          het Lintbos en de omliggende velden afgespeurd met een metaaldetector,
          in de hoop overblijfselen te vinden van wat ooit een militair
          vliegveld was tijdens één van de donkerste periodes van onze
          geschiedenis. <br></br> <br></br> Naast de gebruikelijke geschreven
          bronnen zal je in dit boek dus ook verschillende artefacten tegenkomen
          die we konden koppelen aan de Belgische, Duitse, Noorse, Britse,
          Nieuw-Zeelandse, Poolse en tot slot Amerikaanse soldaten die hier
          bijna tachtig jaar geleden gelegerd waren. <br></br> <br></br> Tot
          slot nog een belangrijke opmerking. Metaaldetectie in het Lintbos, op
          het vliegveld en op de omliggende velden is ten strengste verboden
          voor onbevoegden. Randy Buelens kreeg uitzonderlijk toestemming van
          Natuur & Bos en van de gemeente Grimbergen om dit te doen in het kader
          van het onderzoek. Daarnaast werden de regels in verband met
          vergunning en het aangeven van vondsten bij Onroerend Erfgoed
          gerespecteerd.
        </h1>
      </div>
      <AltFullscreen
        img={fullscreenImg}
        fullscreen={display}
        onClick={() => triggerFullScreen(false)}
      />

      {/* <MainTitle /> */}
      <div className="galleryContainer">
        {DATA.map((img) => {
          // console.log(id);
          return (
            <GalleryImage
              onClick={() => {
                triggerFullScreen(true);
                setFullscreenImg(img);
              }}
              key={img.id}
              image={img.path}
              text={img.text}
            />
          );
        })}
      </div>
    </>
  );
}
export default Gallery;
