const aboutbox = [
  {
    number: 6,
    subtile: "Participated in 4 projects while working.",
    icon: "about-icon icon-fire",
  },
  {},
  {
    number: 12,
    subtile: "Self-study projects or school projects.",
    icon: "about-icon icon-cup",
  },
];

function AboutBox() {
  return (
    <div className="about-boxes grid">
      {aboutbox.map((about, index) => (
        <div key={index} className="about-box">
          <i className={about.icon}></i>
          <div>
            <h3 className="about-title">{about.number}</h3>
            <span className="about-subtitle">{about.subtile}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutBox;
