import { useState } from "react";

function Fullscreen({ img, fullscreen, onClick }) {
  // const [display, setDisplay] = useState(false);
  // setDisplay(fullscreen);

  console.log(img);
  // console.log(fullscreen);

  return (
    <>
      <div
        onClick={() => onClick(false)}
        className={`fullscreenBackdrop ${fullscreen ? "show" : "hide"}`}
      ></div>
      <div className={`centerImg ${fullscreen ? "show" : "hide"}`}>
        {/* TODO: CloseBtn */}
        {/* <button className="closeBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="black"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button> */}
        <div className="fullscreenContainer">
          <img className="fullscreenImg" src={img.path} alt="" />
          {/* <div className="info"> */}
          {/* <h1>Titel</h1> */}
          <p>{img.text}</p>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
export default Fullscreen;
