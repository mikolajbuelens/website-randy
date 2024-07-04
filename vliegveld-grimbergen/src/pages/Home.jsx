// import img from "../assets/images/topViewBG.jpg";

import MainTitle from "../components/MainTitle";
import placeholder from "../assets/images/placeholder-image.jpg";
import HomeMenu from "../components/HomeMenu";

function Home() {
  return (
    // <div>
    <>
      <div className="titleContainer">
        {/* <div className="mainTitleWrapper"> */}
        {/* <MainTitle /> */}
        {/* </div> */}
      </div>
      {/* <h1 className="titleHeading">
        Ontdek de verborgen geschiedenis van het Grimbergse vliegveld ten tijden
        van Wereldoorlog 2
      </h1> */}
      <div className="homeMenuWrapper">
        <HomeMenu />
      </div>
    </>
  );
}

export default Home;
