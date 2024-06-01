import "./Home.css";
import MyInfo from "../../assets/avatar-1.png";
import HeaderSocials from "./HeaderSocials";
import { Link } from "react-router-dom";
import Shapes from "./Shapes";

function Home() {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <h1 className="home-name">
            Huynh Quoc Huy (Alesta)
            <HeaderSocials />
          </h1>
          <img src={MyInfo} className="home-img skeleton" />
          <Link to={"/about"} className="btn btn-w100 btn-animation">
            View Info
          </Link>
          <span className="home-education">I&apos;m a Web Developer</span>
        </div>
        <Shapes />
      </section>
    </>
  );
}

export default Home;
