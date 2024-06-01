import "./Experience.css";
import Image1 from "../../assets/fe.png";
import Image2 from "../../assets/be.png";
import Image3 from "../../assets/db.png";
import Timeline from "../Timeline";
import Education from "../Education/Edu";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Back-end",
    description:
      "With more than a year of hands-on experience in ASP.NET WebForms and WebAPI, utilizing the latest .NET 6 framework.",
    styleClass: "cardBE",
  },
  {
    id: 2,
    image: Image2,
    title: "Front-end",
    description:
      "I am proficient in utilizing JavaScript along with the ReactJS library to develop front-end solutions. Furthermore, I possess the capability to craft interfaces based on templates.",
    styleClass: "cardFE",
  },
  {
    id: 3,
    image: Image3,
    title: "Database Storage",
    description:
      "For databases, I am skilled in writing stored procedures and queries, as well as proficient in debugging using the 'EXPLAIN' command.",
    styleClass: "cardDB",
  },
];

const workexp = [
  {
    id: 1,
    icon: "icon-briefcase",
    company: "INFOASIA SOFTWARE",
    year: "02/2023 - 04/2024",
    title: "Fullstack .Net Developer",
    desc: "My experience at the company has not only allowed me to improve my Front-end skills but has also equipped me with additional knowledge and expertise, including Back-End and SQL. Furthermore, I have gained valuable insights into website deployment and customer task management through SAP B1. Additionally, learning from my colleagues has been invaluable. Despite my primary role as a Front-end Developer, I am adept at effectively handling additional requests related to Back-End or SQL and successfully completing all assigned tasks.",
  },
  {
    id: 2,
    icon: "icon-briefcase",
    company: "SNA VIETNAM COMPANY",
    year: "11/2022 - 01/2023",
    title: "SYSTEM ENGINEER (PROBATION) ",
    desc: "I explored operating systems, networking, RAID, and virtualization technologies, deepening my understanding of Windows Server and Linux. Onsite visits to customers broadened my project exposure, fostering growth in technical and interpersonal skills, particularly in client-facing troubleshooting.",
  },
  {
    id: 3,
    icon: "icon-briefcase",
    company: "FPT INFORMATION SYSTEM JOINT STOCK COMPANY ",
    year: "05/2022 - 10/2022",
    title: "SAP ABAP DEVLOPER",
    desc: "During my time at the unit, I've gained insights into work processes, improved time management, and deepened my expertise in SAP ABAP technology. Contributing to projects for esteemed companies like Coteccons Construction, KIM TIN GROUP, and Dat Xanh Group has broadened my knowledge and enhanced my project management skills in diverse team settings.",
  },
];

function Experience() {
  return (
    <section className="experience container section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container grid">
        {data.map((item) => (
          <div key={item.id} className={`experience-card ${item.styleClass}`}>
            <img
              src={item.image}
              width={150}
              height={150}
              alt=""
              className="experience-img"
            />

            <h3 className="experience-title">{item.title}</h3>
            <p className="service-description">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="experience-experience">
        <div className="experience-product">
          <Link to={"/product"} className="btn btn-experience">
            View my Product
          </Link>
        </div>
        <div className="timeline grid">
          {workexp.map((item) => (
            <Timeline
              key={item.id}
              icon={item.icon}
              company={item.company}
              title={item.title}
              year={item.year}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      <Education />
    </section>
  );
}

export default Experience;
