import "./Home.css";
import MyInfo from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import { Link } from "react-router-dom";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import About from "../About/About";
import Services from "../Services/Services";

function Home() {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <img src={MyInfo} alt="" className="home-img" />
          <h1 className="home-name">
            Huynh Quoc Huy (Alesta)
          <HeaderSocials />
            </h1>
          <span className="home-education">I&apos;m a Web Developer</span>
          <Link to={"/contact"} className="btn btn-w100 btn-animation">
            Hire Me
          </Link>

          <ScrollDown />
        </div>
        <Shapes />
      </section>
      <About />
      <Services />
    </>
  );
}

export default Home;
