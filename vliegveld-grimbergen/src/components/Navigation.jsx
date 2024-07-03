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
        <li>
          <Link to="/geschiedenis">Geschiedenis</Link>
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
