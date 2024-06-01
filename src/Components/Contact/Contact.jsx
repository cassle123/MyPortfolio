import { Link } from "react-router-dom";
import "./Contact.css";

const data = [
  {
    title: "Email",
    data: "hhuy31102000@gmail.com",
    path: "mailto:hhuy31102000@gmail.com",
  },
  {
    title: "Phone",
    data: "0946091206",
    path: "",
  },
];

function Contact() {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section-title">Contact me</h2>

      <div className="contact-container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3>

          <div className="contact-info">
            {data.map((item, index) => (
              <div className="contact-card" key={index}>
                <h3 className="contact-card-title">{item.title}</h3>
                <span className="contact-card-data">{item.data}</span>
                <Link to={item.path} className="contact-button">
                  Write me
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="contact-info">
          <h3 className="contact-title">123</h3>
          <p className="contact-details">456</p>
        </div>

        <div className="contact-form">
          <div className="contact-form-group">
            <div className="contact-form-div">
              <input
                type="text"
                className="contact-form-input"
                placeholder="Insert you name"
              />
            </div>

            <div className="contact-form-div">
              <input
                type="email"
                className="contact-form-input"
                placeholder="Insert you email"
              />
            </div>

            <div className="contact-form-div">
              <input
                type="text"
                className="contact-form-input"
                placeholder="Insert you subject"
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className="contact-form-input"
                placeholder="Insert you message"
              ></textarea>  
            </div>
            <button className="btn">Send Message</button>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Contact;
