import { Link } from "react-router-dom";
// import placeHolder from "../assets/images/placeholder-image.jpg";
// import placeHolder from "../assets/images/overFoto.jpg";

function HomeMenu() {
  return (
    <>
      <div className="homeMenu">
        <div className="homeMenuItem">
          <Link to="/geschiedenis">
            Geschiedenis
            {/* <img src={placeHolder} alt="" /> */}
          </Link>
        </div>
        <div className="homeMenuItem">
          <Link to="/virtueel-museum">
            Virtueel museum
            {/* <img src={placeHolder} alt="" /> */}
          </Link>
        </div>{" "}
        <div className="homeMenuItem">
          <Link to="/">
            Nieuws
            {/* <img src={placeHolder} alt="" /> */}
          </Link>
        </div>{" "}
        <div className="homeMenuItem">
          <Link to="/over">
            Over
            {/* <img src={placeHolder} alt="" /> */}
          </Link>
        </div>
        <div className="homeMenuItem">
          <Link to="/contact">
            Contact
            {/* <img src={placeHolder} alt="" /> */}
          </Link>
        </div>{" "}
        <div className="homeMenuItem">
          <Link to="/boek">
            Boek Bestellen
            {/* <img src={placeHolder} alt="" /> */}
          </Link>
        </div>
      </div>
    </>
  );
}
export default HomeMenu;
