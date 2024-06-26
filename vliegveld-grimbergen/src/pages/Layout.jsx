import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/layout.css";

function Layout() {
  return (
    <>
      <div className="backgroundImage"></div>

      <Navigation />
      <div className="outletWrapper">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
export default Layout;
