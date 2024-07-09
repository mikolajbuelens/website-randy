import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/layout.css";
import "../styles/content.css";
import logo from "../assets/images/logo.svg";
import HamburgerMenu from "../components/HamburgerMenu";
import Fullscreen from "../components/Fullscreen";

function Layout() {
  return (
    <>
      <div className="backgroundImage"></div>
      <img className="spitfire" src="topdown-spitfire-grey.png" alt="" />
      {/* <img className="spitfire2" src="topdown-spitfire-grey.png" alt="" />
      <img className="spitfire3" src="topdown-spitfire-grey.png" alt="" /> */}

      <Navigation />
      <HamburgerMenu />
      {/* <Fullscreen /> */}
      <div className="outletWrapper">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
export default Layout;
