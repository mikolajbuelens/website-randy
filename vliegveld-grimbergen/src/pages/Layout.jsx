import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/layout.css";
import "../styles/content.css";
import logo from "../assets/images/logo.svg";
import HamburgerMenu from "../components/HamburgerMenu";
import Fullscreen from "../components/Fullscreen";
import ScrollToTop from "../components/ScrollToTop";
import spitfire from "../assets/images/topdown-spitfire-grey.png";

function Layout() {
  return (
    <>
      <div className="backgroundImage"></div>
      <img className="spitfire" src={spitfire} alt="Spitfire" />
      <Navigation />
      <HamburgerMenu />
      <ScrollToTop />
      <div className="outletWrapper">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default Layout;
