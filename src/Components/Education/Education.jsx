import Timeline from "../Timeline";
import "./Education.css";

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
];

function Education() {
  return (
    <section className="education container section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container grid">
        {/* education */}
        <div className="timeline grid">
          {data.map(
            (item) =>
              item.category === "education" && (
                <Timeline
                  key={item.id}
                  icon={item.icon}
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

export default Education;
