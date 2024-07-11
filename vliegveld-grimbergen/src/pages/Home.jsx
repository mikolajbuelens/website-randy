import { motion } from "framer-motion";
import MainTitle from "../components/MainTitle";
import randyfrans from "../assets/images/randy-frans.png";
import bookCover from "../assets/images/book-cover.png";
import "../styles/home.css";
import BuyButton from "../components/BuyButton";

const pageVariants = {
  initial: { opacity: 0, x: "100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100vw" }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function Home() {
  return (
    <>
      <div className="titleContainer"></div>
      <div className="home-container">
        <div className="book-container">
          <img src={bookCover} alt="Book Cover" />
          <div className="book-info">
            <ul>
              <li>280 bladzijden, harde kaft, kleur, A4, digitale print.</li>
              <li>500 afbeeldingen</li>
              <li>Enkel in het Nederlands</li>
              <li>
                Uitgeverij Bonte, <a href="https://www.stripdatabank.be/bonte/wo1.html">stripdatabank.be</a>
              </li>
              <li>ISBN 978-94-647-7715-4</li>
            </ul>
            <BuyButton />
          </div>
        </div>
        <motion.div
          className="home-info"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <MainTitle />
          <div className="home-intro">
            <p>
              Met dit boek slaan we de handen in elkaar om na jarenlang
              onderzoek een zo compleet mogelijk naslagwerk te maken over de
              geschiedenis van het vliegveld van Grimbergen tijdens de Tweede
              Wereldoorlog. Frans Van Humbeek is freelance luchtvaartjournalist,
              hoofdredacteur van Hangar Flying vzw (
              <a target="_blank" href="https://www.hangarflying.eu/">
                www.hangarflying.eu
              </a>
              ), auteur van verschillende luchtvaartboeken en medeoprichter van
              de databank van het Belgisch luchtvaartpatrimonium. Hij
              specialiseerde zich voornamelijk in de geschiedenis van de
              Belgische vliegvelden. Randy Buelens is student aan de Thomas-More
              Hogeschool in Mechelen en heeft een grote passie voor
              geschiedenis, voornamelijk voor de periode 1939-1945. Daarnaast
              specialiseert hij zich in metaaldetectie en onderzoek over de
              Tweede Wereldoorlog.
            </p>
            <hr />
            <p className="authors-intro">Randy Buelens & Frans Van Humbeek</p>
          </div>
          <img src={randyfrans} alt="Randy and Frans" />
        </motion.div>
      </div>
      <div className="homeMenuWrapper">{/* <HomeMenu /> */}</div>
    </>
  );
}

export default Home;
