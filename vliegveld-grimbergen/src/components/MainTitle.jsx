import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

function MainTitle() {
  return (
    <div className="mainTitle">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}
export default MainTitle;
