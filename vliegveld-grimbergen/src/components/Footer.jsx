import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </footer>
  );
}
export default Footer;
