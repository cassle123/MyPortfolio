import "./Services.css";
import Image1 from "../../assets/fe.png";
import Image2 from "../../assets/be.png";
import Image3 from "../../assets/db.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Back-end",
    description:
      "With over 1 year of experience working with ASP.NET Webforms and WebAPI .NET 6.",
    styleClass: "cardBE",
  },
  {
    id: 2,
    image: Image2,
    title: "Front-end",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    styleClass: "cardFE",
  },
  {
    id: 3,
    image: Image3,
    title: "Database Storage",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    styleClass: "cardDB",
  },
];

function Services() {
  return (
    <section className="services container section">
      <h2 className="section-title">Knowledge</h2>
      <div className="services-container grid">
        {data.map((item) => (
          <div key={item.id} className={`services-card ${item.styleClass}`}>
            <img
              src={item.image}
              width={150}
              height={150}
              alt=""
              className="services-img"
            />

            <h3 className="services-title">{item.title}</h3>
            <p className="service-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
