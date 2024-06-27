import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      {/* <h1 className="navTitle">
        <Link to="/">
          <img src="/logo.svg" alt="" />
        </Link>
      </h1> */}
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
                fill="#fff"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </span>
          </span>
          <ul className="dropdownMenu">
            <li>
              <Link to="/geschiedenis/Reserve vliegveld 1939">
                Reserve vliegveld 1939
              </Link>
            </li>
            <li>
              <Link to="/geschiedenis/Duitse bezetting">Duitse bezetting</Link>
            </li>

            <li>
              <li>
                <Link to="geschiedenis/RAF B-60">RAF B-60</Link>
              </li>
            </li>

            <li>
              <Link to="/geschiedenis/Camp-White-Tie">Camp White Tie</Link>
            </li>

            <li>
              <Link to="/geschiedenis/Post-WO2">Post-WO2</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/virtueel-museum">Virtueel museum</Link>
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
          <Link className="buyBook" to="/">
            Boek bestellen
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
