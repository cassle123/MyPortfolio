import CardResume from "./CardResume";
import "./Resume.css";

const data = [
  {
    id: 1,
    category: "education",
    icon: "icon-graduation",
    year: "2018 - 2022",
    title: "Bachelor's degree of Information Technology",
    desc: "Since 2018, I have been studying at Ho Chi Minh City University of Technology (HUTECH) and graduated with a Bachelor's degree in Information Technology in 2022.",
  },
  {
    id: 2,
    category: "education",
    icon: "icon-graduation",
    year: "2015 - 2018",
    title: "High School",
    desc: "Tuy Phong High School - Liên Hương, Tuy Phong, Bình Thuận.",
  },

  {
    id: 3,
    category: "experience",
    icon: "icon-briefcase",
    company: "INFOASIA SOFTWARE",
    year: "02/2023 - 04/2024",
    title: "Fullstack .Net Developer",
    desc: "My experience at the company has not only allowed me to improve my Front-end skills but has also equipped me with additional knowledge and expertise, including Back-End and SQL. Furthermore, I have gained valuable insights into website deployment and customer task management through SAP B1. Additionally, learning from my colleagues has been invaluable. Despite my primary role as a Front-end Developer, I am adept at effectively handling additional requests related to Back-End or SQL and successfully completing all assigned tasks.",
  },
  {
    id: 4,
    category: "experience",
    icon: "icon-briefcase",
    year: "11/2022 - 01/2023",
    title: "SYSTEM ENGINEER (PROBATION) ",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 5,
    category: "experience",
    icon: "icon-briefcase",
    year: "2009 - 2013",
    title: "Back-End Developer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
];

function Resume() {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section-title">Experience</h2>
      <div className="resume-container grid">
        {/* education */}
        <div className="timeline grid">
          {data.map(
            (item) =>
              item.category === "education" && (
                <CardResume
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  year={item.year}
                  desc={item.desc}
                />
              )
          )}
        </div>
        {/* experience */}
        <div className="timeline grid">
          {data.map(
            (item) =>
              item.category === "experience" && (
                <CardResume
                  key={item.id}
                  icon={item.icon}
                  company={item.company}
                  title={item.title}
                  year={item.year}
                  desc={item.desc}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}

export default Resume;
