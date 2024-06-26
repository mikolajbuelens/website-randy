import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <h1 className="navTitle">
        <Link to="/">
          <img src="/logo.svg" alt="" />
        </Link>
      </h1>
      <ul>
        <li className="dropdown">
          <span className="dropdownToggle">
            Geschiedenis
            <span className="material-symbols-outlined">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </span>
          </span>
          <ul className="dropdownMenu">
            <li>
              <Link to="/history">Reserve vliegveld 1939</Link>
            </li>
            <li>
              <Link to="/history">Duitse bezetting</Link>
            </li>

            <li>
              <li>
                <Link to="history">RAF B-60</Link>
              </li>
            </li>

            <li>
              <Link to="/history">Camp White Tie</Link>
            </li>

            <li>
              <Link to="/history">Post-WO2</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/history">Virtueel museum</Link>
        </li>

        <li>
          <Link to="/">Nieuws</Link>
        </li>
        <li>
          <Link to="about">Over</Link>
        </li>
        <li>
          <Link to="about">Contact</Link>
        </li>
        <li>
          <Link className="active" to="/">
            Boek bestellen
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
