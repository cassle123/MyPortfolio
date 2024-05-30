import "./Home.css";
import MyInfo from "../../assets/avatar-1.png";
import HeaderSocials from "./HeaderSocials";
import { Link } from "react-router-dom";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

function Home() {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <img src={MyInfo} width={150} height={150} alt="" className="home-img" />
          <h1 className="home-name">
            Huynh Quoc Huy (Alesta)
          <HeaderSocials />
            </h1>
          <span className="home-education">I&apos;m a Web Developer</span>
          <Link to={"/about"} className="btn btn-w100 btn-animation">
            View Info 
          </Link>

          {/* <ScrollDown /> */}
        </div>
        <Shapes />
      </section>
    </>
  );
}

export default Home;
