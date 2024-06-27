// import img from "../assets/images/topViewBG.jpg";

import MainTitle from "../components/MainTitle";
import placeholder from "../assets/images/placeholder-image.jpg";

function Home() {
  return (
    <div>
      <MainTitle />

      <div className="textArea">
        <p>
          {/* <h2>Subtitel</h2> */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          amet quisquam nostrum, qui fugiat, neque ullam tempore natus omnis
          excepturi, cumque aliquam blanditiis. Id libero minus dolorum nihil,
          dolor magnam? Saepe deleniti eaque non molestias suscipit optio
          temporibus consequuntur aliquam iure, molestiae, magni ratione, earum
          <img className="left" src={placeholder} alt="" />
          sunt odio numquam incidunt autem cupiditate sit assumenda quam
          aspernatur ducimus dolore. Temporibus, a eveniet. Quidem harum error,
          sit nemo dolorem, doloremque sint quo officiis soluta illo architecto
          pariatur repudiandae omnis similique minima perferendis, blanditiis
          obcaecati deserunt nesciunt veritatis at officia. Officiis ea debitis
          <img className="right" src={placeholder} alt="" />
          labore. Eveniet repellat optio enim iure dolorum aliquam similique
          doloremque assumenda. <h3>Tussentitel</h3> Quis eaque nobis
          reprehenderit, nulla officia ipsa debitis vitae distinctio odio et.
          Quae dolorum illo repellendus, quidem totam distinctio, explicabo
          doloremque exercitationem ipsa iusto et! Soluta doloribus omnis rem
          eligendi, quaerat placeat reprehenderit. Sequi fugit qui dignissimos
          beatae neque fugiat cumque quidem!
        </p>

        <p>
          {/* <h2>Subtitel</h2> */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          amet quisquam nostrum, qui fugiat, neque ullam tempore natus omnis
          excepturi, cumque aliquam blanditiis. Id libero minus dolorum nihil,
          dolor magnam? Saepe deleniti eaque non molestias suscipit optio
          temporibus consequuntur aliquam iure, molestiae, magni ratione, earum
          <img className="left" src={placeholder} alt="" />
          sunt odio numquam <h3>Tussentitel</h3> incidunt autem cupiditate sit
          assumenda quam aspernatur ducimus dolore. Temporibus, a eveniet.
          Quidem harum error, sit nemo dolorem, doloremque sint quo officiis
          soluta illo architecto pariatur repudiandae omnis similique minima
          perferendis, blanditiis obcaecati deserunt nesciunt veritatis at
          officia. Officiis ea debitis
          <img className="right" src={placeholder} alt="" />
          labore. Eveniet repellat optio enim iure dolorum aliquam similique
          doloremque assumenda. Quis eaque nobis reprehenderit, nulla officia
          ipsa debitis vitae distinctio odio et. Quae dolorum illo repellendus,
          quidem totam distinctio, explicabo doloremque exercitationem ipsa
          iusto et! Soluta doloribus omnis rem eligendi, quaerat placeat
          reprehenderit. Sequi fugit qui dignissimos beatae neque fugiat cumque
          quidem!
        </p>
      </div>
      {/* <img src="../../public/images/placeholder.jpg" alt="" /> */}
    </div>
  );
}

export default Home;
