import overFoto from "../assets/images/overFoto.jpg";
import MainTitle from "../components/MainTitle";

function About() {
  return (
    <>
      <MainTitle />
      <div className="flexCenter">
        <div className="contentContainer about flexRow">
          <img src={overFoto} alt="" />
          <p>
            Met dit boek slaan Randy Buelens (°1997) en Frans Van Humbeek
            (°1958) de handen in elkaar om na jarenlang onderzoek een zo
            compleet mogelijk naslagwerk te maken over de geschiedenis van het
            vliegveld van Grimbergen tijdens de Tweede Wereldoorlog. Frans Van
            Humbeek is freelance luchtvaartjournalist, hoofdredacteur van Hangar
            Flying vzw (www.hangarflying.eu), auteur van verschillende
            luchtvaartboeken en medeoprichter van de databank van het Belgisch
            luchtvaartpatrimonium. Hij specialiseerde zich voornamelijk in de
            geschiedenis van de Belgische vliegvelden. Randy Buelens is student
            aan de Thomas-More Hogeschool in Mechelen en heeft een grote passie
            voor geschiedenis, voornamelijk voor de periode 1939-1945. Daarnaast
            specialiseert hij zich in metaaldetectie en onderzoek over de Tweede
            Wereldoorlog.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
