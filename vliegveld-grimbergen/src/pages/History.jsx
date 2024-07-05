import MainTitle from "../components/MainTitle";
import { useParams } from "react-router-dom";
import img from "/src/assets/images/placeholder-image.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function History() {
  let iconStyle = {
    background: "#A5543E",
    color: "#333",
  };
  let contentStyle = {
    background: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    boxShadow: "none",
    // backgroundImage: "url('paperTexture.jpg')",
  };

  let contentArrowStyle = {
    borderRight: "7px solid rgba(0, 0, 0, 0.5)",
  };

  // get param
  // const topic = useParams().topic;
  // console.log(topic);

  return (
    <div>
      <div className="flexCenter">
        <h2 className="introTitle">Geschiedenis</h2>
      </div>
      {/* vertical timeline */}
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="1939"
          iconStyle={iconStyle}
        >
          <h3 className="vertical-timeline-element-title timelineTitle">
            Aanleg van reservevliegveld
          </h3>
          <p>
            Vanaf 4 september 1939 begonnen Belgische militairen met de aanleg
            van een reservevliegveld in Grimbergen. Achtenvijftig hectaren
            vruchtbare landbouwgrond, gelegen tussen de Oyenbrugstraat en de
            Lintkasteelstraat werden gedraineerd, genivelleerd en met gras
            bezaaid.
          </p>
          <img
            className="timelineImg"
            src="historyImages/Web1_H1_5a_img912.jpg"
            alt=""
          />
          <p className="source">Archief Frans van Humbeek</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="1940"
          iconStyle={iconStyle}
        >
          <h3 className="vertical-timeline-element-title timelineTitle">
            Duitse bezetting en uitbreiding
          </h3>
          <h3 className="timelineSubtitle">Mei</h3>
          <p>
            In de meidagen van 1940 maakten drie Belgische escadrilles gebruik
            van het vliegveld. Hun Fairey Fox, Fiat CR.42 en Renard R.31 bleken
            allerminst opgewassen tegen de Duitse Luftwaffe.
          </p>
          <h3 className="timelineSubtitle">18 mei</h3>
          <p>
            Op 18 mei was het vliegveld al in handen gevallen van de bezetter.
            Enkele maanden later begon de Duitse Bauleitung met de uitbreiding
            van het vliegveld. In zijn kantoor aan het tramstation van
            Grimbergen, tekende burgerlijk ingenieur Hunzinger de plannen voor
            de Fliegerhorst Grimbergen. Alsmaar meer terreinen werden in beslag
            genomen en landbouwers werden opgevorderd voor de grondwerken.
            Duitsers begonnen met de aanleg of de verbetering van de wegen
            (Oyenbrugstraat, Gasthuispachthofstraat, ...) In Flaktorens (onder
            meer bij de Sint-Niklaashoeve) en barakken zaten de soldaten van de
            vliegveldverdediging. De Luftwaffe moest ontvangen worden op een
            goed uitgerust vliegveld. Een Belgische aannemer werd verplicht om
            een modern waterleidingnet op het vliegveld te installeren.
          </p>
          <img
            className="timelineImg"
            src="historyImages/Web2_H4_2a_Knipsel21-SharpenAI-Standard_Tom.jpg"
            alt=""
          />
          <p className="source">Archief Willi Huck</p>

          <p>
            Het zouden vooral de Wekusta ‘Westa’ 26 en het Jagdgeschwader JG 26
            zijn die Grimbergen een tijdlang als thuisbasis gebruikten. De
            eerste eenheid maakte met Dornier Do 17 en Heinkel He 111 foto's en
            waarnemingen van de weersgesteldheid boven Groot-Brittannië. Deze
            gegevens werden doorgestuurd naar de Luftwaffe in het Brusselse
            Palace-hotel. De top-piloten van JG 26 waren uitgerust met
            performante jachtvliegtuigen van het type Focke-Wulf Fw 190.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="1941"
          iconStyle={iconStyle}
        >
          <h3 className="vertical-timeline-element-title timelineTitle">
            Kalibreerschijf
          </h3>
          <p>
            Een overblijfsel van de Duitse infrastructuur is de kalibreerschijf,
            gebouwd in 1941, die zich nabij de hoofdingang van het Lintbos
            bevindt. De unieke schijf die ook na de Tweede Wereldoorlog nog een
            tiental jaren dienst deed voor de burgerluchtvaart, werd gebruikt
            voor het ijken en bijstellen van vliegtuigkompassen. De Vlaamse
            overheid heeft de schijf erkend als beschermd monument.
          </p>
          <img
            className="timelineImg"
            src="historyImages/Web3_H3_15a_DSC_0477.jpg"
            alt=""
          />
          <p className="source">Foto Paul Van Caesbroeck</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="1944"
          iconStyle={iconStyle}
        >
          <h3 className="vertical-timeline-element-title timelineTitle">
            Geallieerde landing en terugtrekking van Duitsers
          </h3>
          <h3 className="timelineSubtitle">10 april</h3>
          <p>
            Op 10 april 1944 werden een aantal huizen in de buurt van het
            vliegveld beschadigd door brandbommen, er vielen verschillende
            doden.
          </p>
          <h3 className="timelineSubtitle">6 juni</h3>
          <p>
            Op 6 juni 1944 landden de geallieerden in Normandië, op 3 september
            1944 verliet de Duitse bezetter de gemeente Grimbergen. Die avond
            werd het Prinsenkasteel door de Duitsers in brand gestoken.
          </p>
          <h3 className="timelineSubtitle">6 september</h3>
          <p>
            Drie dagen later kwam een voorhoede van de 122 Wing op Grimbergen
            aan (RAF-vliegveldcode B-60). Drie squadrons van de 122 Wing (19,
            65, 122 Sqn) kregen de taak om met hun Mustangs de bevoorrading en
            de terugtocht van de Duitse troepen te bemoeilijken. Ook de
            operaties te Arnhem werden vanop Grimbergen gesteund, tientallen
            C-47's stonden hier gestationeerd.
          </p>

          <h3 className="timelineSubtitle">28 september</h3>
          <p>
            Op 28 september 1944 namen drie Tempest squadrons (3, 56, 486 Sqn)
            de plaats in van de Mustangs. Van 6 oktober tot 22 december stond de
            132 ‘Noorse’ Wing op Grimbergen, dit keer met Spitfires (331, 332,
            66, 127 Sqn.) Vele piloten werden opgevangen door Grimbergse
            gezinnen, na vijftig jaar spreken deze piloten nog vol eerbied over
            de gastvrijheid van de plaatselijke bewoners. Ze konden genieten van
            warme huiskamers, hun klamme tenten werden hier zelden gebruikt.
          </p>
          <img
            className="timelineImg"
            src="historyImages/Web4_H7_10b_pic2_p241_Cato.jpg"
            alt=""
          />
          <p className="source">Norwegian Defence Museum</p>

          {/* <img className="timelineImg" src={img} alt="" /> */}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="1945"
          iconStyle={iconStyle}
        >
          <h3 className="vertical-timeline-element-title timelineTitle">
            Aanval op vliegveld en Poolse Wing
          </h3>
          <h3 className="timelineSubtitle">1 januari</h3>
          <p>
            Op 1 januari 1945 werd het vliegveld aangevallen door Duitse
            jachtvliegtuigen. Meerdere jagers werden neergehaald door het
            luchtafweer, een Focke-Wulf Fw 190 kwam op een huis in de
            Schapenbaan terecht. Een andere Duitse jager viel nabij het
            Lintkasteel.
          </p>
          <h3 className="timelineSubtitle">Januari - april</h3>
          <p>
            Van januari 1945 tot april 1945 werd de 131 ‘Poolse’ Wing (302, 317,
            308 Sqn) op Grimbergen gebaseerd. Ook de Polen konden rekenen op de
            sympathie van de omwonenden.
          </p>
          <h3 className="timelineSubtitle">24 - 25 februari</h3>
          <p>
            In de nacht van 24 op 25 februari 1945 ‘landde’ een V1 op het
            vliegveld en kwam tot stilstand tegen een door de Polen als
            slaapplaats gebruikte woning in de Oyenbrugstraat. Gelukkig kwam het
            vreselijke tuig niet tot ontploffing.
          </p>
          <h3 className="timelineSubtitle">10 januari</h3>
          <p>
            Een spectaculaire noodlanding was deze van de B-17G (401 Bomber
            Group, 614 Bomber Squadron). Op 10 januari 1945 landde de door
            luchtafweer geraakte bommenwerper in het besneeuwde Paalveld. De
            bemanning overleefde de kraaklanding. Een boordschutter van de Hard
            Seventeen, Ed Dana (°1923, †2013) bracht op 16 mei 2007 een
            memorabel bezoek aan Grimbergen. Vilvoordenaar Louis Renotte
            overhandigde Ed een verwarmer van vliegkledij die hij in 1945 uit de
            neergekomen Hard Seventeen had verwijderd.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="1945-1946"
          iconStyle={iconStyle}
        >
          <h3 className="vertical-timeline-element-title timelineTitle">
            Camp White Tie
          </h3>
          <h3 className="timelineSubtitle">Mei 1945 - december 1946</h3>
          <p>
            Naast de piloten en hun vliegtuigen maakten natuurlijk verschillende
            steuneenheden gebruik van het vliegveld, van Airfield Construction
            Units (aanleg vliegvelden) tot Salvage Units (ophalen van
            neergestorte vliegtuigen.) Vanaf mei 1945 werd het vliegveld
            gebruikt door de Amerikanen. Ze stockeerden hier legermateriaal
            alvorens het verkocht of teruggestuurd werd naar de Verenigde
            Staten. Er ontstond een groot transitkamp genaamd ‘Camp White Tie’
            waarin duizenden Amerikanen werden opgevangen die via havens als
            Antwerpen werden teruggebracht naar de Verenigde Staten. Dankzij
            intensief bodemonderzoek konden heel wat overblijfselen uit de
            oorlogsperiode worden opgegraven. Ze geven ons een vrij goed beeld
            van de maanden na de bevrijding, van een periode waarvan vrijwel
            geen geschreven archieven bestaan.
          </p>

          <img
            className="timelineImg"
            src="historyImages/campWhiteTie.jpg"
            alt=""
          />
          <p className="source">National Archives and Records Administration</p>

          {/* <div className="timelineImageContainer">
            <img className="timelineImg" src="historyImages/Web5a.jpg" alt="" />
            <img className="timelineImg" src="historyImages/Web5b.jpg" alt="" />

            <img
              className="timelineImg"
              src="historyImages/Web5d_H17_Foto3_RichardMicklerDogtag.jpg"
              alt=""
            />
            <p className="source">Archief Randy Buelens</p>

            <img
              className="timelineImg rotate90"
              src="historyImages/Web5c_H17_Foto54_Stuurknuppel.jpg"
              alt=""
            />
            <p className="source">Archief Anton Blokken</p>
          </div> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="1946"
          iconStyle={iconStyle}
        >
          <h3 className="vertical-timeline-element-title timelineTitle">
            Teruggave en toerismevliegveld
          </h3>
          <h3 className="timelineSubtitle">Mei</h3>
          <p>
            Vanaf mei 1946 begonnen de militairen delen van het vliegveld terug
            te geven aan de burgerlijke autoriteiten. Die beslisten al vrij snel
            om van Grimbergen een belangrijk toerismevliegveld te maken,
            sportvliegtuigen moesten dan minder gebruik maken van de nieuwe
            nationale luchthaven van Melsbroek. Reeds in 1946 konden de eerste
            zweef- en sportvliegtuigen landen op Grimbergen. Vliegclubs en
            diverse luchtvaartfirma’s kwamen zich op het vliegveld vestigen. Het
            werd beheerd door de toenmalige Regie der Luchtwegen (RLW).
          </p>
          <img
            className="timelineImg"
            src="historyImages/Web6_H20_2_scannen0007.jpg"
            alt=""
          />
          <p className="source">
            Foto Leopold Van Seghbroeck, archief Frans Van Humbeek
          </p>
          <h3 className="timelineSubtitle">November</h3>
          <p>
            In november 1947 werden twee unieke, ronde loodsen officieel
            ingewijd door verkeersminister Achille Van Acker. Ook deze loodsen
            zijn officieel beschermd als monument en ondertussen ook
            gerestaureerd. Momenteel zorgt de vzw Recreatief Vliegveld
            Grimbergen (RVG) voor de exploitatie van het vliegveld.
          </p>

          <img className="timelineImg" src="historyImages/Web7.JPG" alt="" />
          <p className="source">Foto Frans Van Humbeek</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default History;
