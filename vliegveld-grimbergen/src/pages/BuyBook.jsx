import { motion } from "framer-motion";
import MainTitle from "../components/MainTitle";
import bookCover from "../assets/images/book-cover.png";
import "../styles/home.css";
import BuyOption from "../components/BuyOption";

const pageVariants = {
  initial: { opacity: 0, x: "100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100vw" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

function BuyBook() {
  return (
    <>
      <div className="titleContainer"></div>
      <div className="home-container">
        <div className="book-container">
          <img src={bookCover} alt="Book Cover" />
          <div className="book-info">{/* Add book details here */}</div>
        </div>
        <motion.div
          className="home-info buy-info"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <MainTitle />
          <div className="home-intro buy-intro">
            <p style={{ margin: 10, textAlign: "center" }}>
              Welkom bij de voorintekening.{" "}
            </p>
            <p>
              Via deze weg kan u één of meerdere boeken bestellen. Deze kunnen
              verzonden of opgehaald worden tijdens de tentoonstelling in de
              raadzaal van het gemeentehuis van Grimbergen, Prinsenstraat 3,
              1850 Grimbergen (23-25 augustus 2024).
            </p>
            <h1>Tarieven</h1>
            <ul className="tarif">
              <li>In voorintekening, tot 22 augustus 2024: 34,00 euro</li>
              <li>Vanaf 23 augustus 2024: 39,00 euro</li>
              <li>Verzending naar een adres in België: +7,00 euro</li>
            </ul>
            <p style={{ margin: 10, textAlign: "center" }}>
              Maak hier uw keuze a.u.b
            </p>
            <BuyOption />
          </div>
        </motion.div>
      </div>
      <div className="homeMenuWrapper">{/* <HomeMenu /> */}</div>
    </>
  );
}

export default BuyBook;
