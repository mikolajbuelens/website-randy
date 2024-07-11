// export default function BuyBook() {
//   return (
//     <div>
//       <div className="contentContainer bookContainer">
//         <p>
//           Welkom bij de voorintekening. Via deze weg kan u één of meerdere
//           boeken bestellen. Deze kunnen verzonden of opgehaald worden tijdens de
//           tentoonstelling in de raadzaal van het gemeentehuis van Grimbergen
//           (23-25 augustus 2024).
//         </p>

//         <ul>
//           <h5>Tarieven</h5>
//           <li>
//             In voorintekening, tot 22 augustus 2024: 34,00 euro (exclusief
//             verzending)
//           </li>
//           <li>Vanaf 23 augustus 2024: 39,00 euro (exclusief verzending) </li>
//           <li>Verzending naar een adres in België: 7,00 euro</li>
//         </ul>

//         <p>
//           Gelieve het verschuldigde bedrag te storten op het rekeningnummer:
//           BE10 9734 9158 3304 op naam van Randy & Frans. Gelieve in de
//           mededeling volgende zaken te vermelden: boek Grimbergen + naam +
//           aantal + afhalen of opsturen.
//         </p>
//       </div>
//     </div>
//   );
// }
// import img from "../assets/images/topViewBG.jpg";

import { useParams, useSearchParams } from "react-router-dom";
import bookCover from "../assets/images/book-cover.png";
import "../styles/home.css";
import { Link } from "react-router-dom";

function Order() {
  // get param
  let amount;
  const orderType = useParams().type;
  if (orderType === "Afhalen") {
    amount = 34;
  } else {
    amount = 39;
  }
  return (
    <>
      <div className="titleContainer"></div>
      <div className="home-container">
        <div className="book-container">
          <img src={bookCover} alt="" />
          <div className="book-info">
            {/* <ul>
              <li>280 bladzijden, harde kaft, kleur, A4, digitale print.</li>
              <li>500 afbeeldingen</li>
              <li>Enkel in het Nederlands</li>
              <li>
                Uitgeverij Bonte, https://www.stripdatabank.be/bonte/wo1.html
              </li>
              <li>ISBN 978-94-647-7715-4</li>
            </ul> */}
          </div>
        </div>
        <div className="home-info buy-info order-container">
          {/* <MainTitle /> */}
          <div className="home-intro buy-intro">
            <Link className="back-btn" to="/boek">
              Terug
            </Link>

            <h2>{orderType}</h2>
            {/* <p style={{ margin: 10, textAlign: "center" }}>
              Welkom bij de voorintekening.
            </p> */}

            {/* conidional render p */}
            {orderType === "Afhalen" && (
              <p>
                Afhalen kan tijdens de tentoonstelling in de raadzaal van het
                gemeentehuis van Grimbergen, Prinsenstraat 3, 1850 Grimbergen
                (23-25 augustus 2024).
              </p>
            )}

            <p>
              Om uw aankoop te bevestigen gelieve het bedrag van {amount},00
              euro te storten op het rekeningnummer:
              <strong> BE10 9734 9158 3304</strong> op naam van Randy & Frans.
            </p>
            <p>Gelieve in de mededeling volgende zaken te vermelden:</p>

            <ul className="order-list">
              <li>Boek Grimbergen</li>
              <li>Naam</li>
              <li>Aantal</li>
              {orderType === "Bezorging" && <li>Adres</li>}
              {orderType === "Afhalen" && <li>Afhalen</li>}
              {orderType === "Bezorging" && <li>Bezorgen</li>}
              {/* <li>Afhalen</li> */}
            </ul>

            {/* <p style={{ margin: 10, textAlign: "center" }}>
              Maak hier uw keuze a.u.b
            </p> */}

            {/* <BuyOption /> */}
            {/* <ul>
              <h5>Tarieven</h5>
              <li>
                In voorintekening, tot 22 augustus 2024: 34,00 euro (exclusief
                verzending)
              </li>
              <li>
                Vanaf 23 augustus 2024: 39,00 euro (exclusief verzending){" "}
              </li>
              <li>Verzending naar een adres in België: 7,00 euro</li>
            </ul> */}

            {/* <p>
              Gelieve het verschuldigde bedrag te storten op het rekeningnummer:
              BE10 9734 9158 3304 op naam van Randy & Frans. Gelieve in de
              mededeling volgende zaken te vermelden: boek Grimbergen + naam +
              aantal + afhalen of opsturen.
            </p> */}
          </div>
          {/* <img src={randyfrans} alt="" /> */}
        </div>
      </div>
      <div className="homeMenuWrapper">{/* <HomeMenu /> */}</div>
    </>
  );
}

export default Order;

// 280 bladzijden, harde kaft, kleur, A4, digitale print.

// 500 afbeeldingen.

// Enkel in het Nederlands.

// Uitgeverij Bonte, https://www.stripdatabank.be/bonte/wo1.html

// ISBN 978-94-647-7715-4
