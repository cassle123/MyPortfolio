import "./About.css";
import AboutMe from "../../assets/avatar-2.png";
import AboutBox from "./AboutBox";
import { Link } from "react-router-dom";
const skills = [
  { title: "Front-end Skill", percent: "85%", valcolor: "rgb(255, 209, 92)" },
  { title: "Back-end Skill", percent: "50%", valcolor: "rgb(255, 76, 96)" },
  { title: "Database Skill", percent: "45%", valcolor: "rgb(108, 108, 299)" },
];

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container grid">
        <img src={AboutMe} alt="" className="about-img" />

        <div className="about-data grid">
          <div className="about-info">
            <p className="about-description">
              I&apos;m Huy, I am a Web developer. Currently, I live in District
              7, Ho Chi Minh City. My strength lies in Front-end & JavaScript
              language, and I also have knowledge of ReactJS. In particular,
              this portfolio is written using ReactJS. Additionally, I have
              experience working with ASP.net / C#.
            </p>
            <Link to={"/experience"} className="btn btn-about">
              View my experience
            </Link>
          </div>

          <div className="about-skills grid">
            {skills.map((skill, index) => (
              <div key={index} className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">{skill.title}</h3>
                  <span className="skills-number">{skill.percent}</span>
                </div>
                <div className="skills-bar">
                  <span
                    className="skills-percentage bar"
                    style={{
                      width: skill.percent,
                      backgroundColor: skill.valcolor,
                    }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
}

export default About;
