import "../styles/content.css";
import randy from "../assets/images/randy.png";
import frans from "../assets/images/frans.png";
// import general from "../assets/images/mail.svg";

export default function Contact() {
  return (
    <>
      {/* <MainTitle /> */}
      <div className="flexCenter">
        <h2 className="introTitle">Contact</h2>
      </div>
      <div className="flexCenter ">
        <div className="contentContainer contact-container">
          {/* <img src={overFoto} alt="" /> */}
          <div className="general">
          <h3>Indien u vragen heeft kan u contact opnemen via ons algemeen e-mailadres</h3>

            <a href="mailto:contact@grimbergen1939-1946.be" target="_blank" className="general">
              <div className="img-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="80px"
                  viewBox="0 -960 960 960"
                  width="80px"
                  fill="#e8eaed"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
              </div>

              {/* <p>Randy Buelens</p> */}
              <h4>Algemeen</h4>
              <p>contact@grimbergen1939-1946.be</p>
            </a>
          </div>
          <h3>Of rechtstreeks met één van de auteurs: </h3>

          <div className="authors">
            {/* <div className="author"></div> */}
            <a href="mailto:randy.buelens@gmail.be" target="_blank" className="randy">
              <div className="img-container">
                <img src={randy} alt="" />
              </div>

              <h4>Randy Buelens</h4>
              <p>randy.buelens@gmail.be</p>
            </a>

            <a href="mailto:frans@hangarflying.be" target="_blank" className="frans">
              <div className="img-container">
                <img src={frans} alt="" />
              </div>
              <h4>Frans Van Humbeek</h4>
              <p>frans@hangarflying.be</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
