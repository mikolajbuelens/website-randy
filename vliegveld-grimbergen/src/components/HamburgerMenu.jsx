import { useState } from "react";
import { Link } from "react-router-dom";
import hamburgerCSS from "../styles/HamburgerMenu.module.css";
import "../styles/HamburgerMenu.module.css";
// import styles from "./css/Navigation.module.css";
// import { useVoteContext } from "../features/components/router/VoteContext";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`${hamburgerCSS.hamburgerMenu} ${
        isOpen ? hamburgerCSS.open : ""
      }`}
    >
      <div className={hamburgerCSS.hamburgerIcon} onClick={toggleMenu}>
        <div className={hamburgerCSS.line}></div>
        <div className={hamburgerCSS.halfLine}></div>
      </div>
      <div className={hamburgerCSS.menuItems}>
        {/* <img className={hamburgerCSS.HamburgerImg} src={LogoB} alt="Logo" /> */}
        <Link className="buyBook" to="/" onClick={closeMenu}>
          Boek bestellen
        </Link>
        <Link to="/" onClick={closeMenu}>
          Geschiedenis
        </Link>
        <Link to="/virtueel-museum" onClick={closeMenu}>
          Virtueel museum
        </Link>

        <Link to="/" onClick={closeMenu}>
          Nieuws
        </Link>
        <Link to="/over" onClick={closeMenu}>
          Over
        </Link>

        <Link to="/" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
