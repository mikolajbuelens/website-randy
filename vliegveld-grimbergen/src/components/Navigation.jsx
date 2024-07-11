import { Link, NavLink } from "react-router-dom";
import MainTitle from "./MainTitle";
import BuyButton from "./BuyButton";

function Navigation() {
  return (
    <nav className="desktopNav">
      <MainTitle />

      {/* <h1 className="navTitle">
        <Link to="/">
          <img src="/logo.svg" alt="" />
        </Link>
      </h1> */}
      <ul>
        <li>
          <NavLink
            to="/geschiedenis"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Geschiedenis
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/virtueel-museum"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Virtueel museum
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/nieuws"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Nieuws
          </NavLink>
        </li>
        <li>
          <NavLink
            to="over"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Over
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <BuyButton />
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
