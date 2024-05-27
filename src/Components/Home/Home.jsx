import "./Home.css";
import MyInfo from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import { Link } from "react-router-dom";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import About from "../About/About";

function Home() {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <img src={MyInfo} alt="" className="home-img" />
          <h1 className="home-name">Huynh Quoc Huy (Alesta)</h1>
          <span className="home-education">I&apos;m a Web Developer</span>
          <HeaderSocials />
          <Link to={"/contact"} className="btn">
            Hire Me
          </Link>

          <ScrollDown />
        </div>
        <Shapes />
      </section>
      <About />
    </>
  );
}

export default Home;
