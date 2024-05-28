const aboutbox = [
  {
    number: 6,
    subtile: "6 Projects working.",
    icon: "about-icon icon-briefcase",
  },
  {
    number: 7,
    subtile: "7 Self-study projects.",
    icon: "about-icon icon-puzzle",
  },
  {
    number: 5,
    subtile: "5 School projects.",
    icon: "about-icon icon-graduation",
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
