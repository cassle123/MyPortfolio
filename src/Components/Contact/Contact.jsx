import "./Contact.css";
import MyCV from "../../assets/Huynh-Quoc-Huy.pdf";
const data = [
  {
    title: "My email",
    data: "hhuy31102000@gmail.com",
    icon: "fa-solid fa-envelope contact-card-icon",
  },
  {
    title: "My phone number",
    data: "0946091206",
    icon: "fa-solid fa-phone-volume contact-card-icon",
  },
  {
    title: "My LinkedIn",
    data: "https://www.linkedin.com/in/huy3110/",
    icon: "fa-brands fa-linkedin contact-card-icon",
  },
];

function Contact() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = MyCV;
    link.download = "Huynh-Quoc-Huy-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="contact container section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-container grid">
        <div className="contact-card contact-content">
          <h3 className="contact-title">Contact Information</h3>

          <div className="contact-info">
            {data.map((item, index) => (
              <div className="contact-card-info" key={index}>
                <span>
                  <i className={item.icon}></i>
                </span>
                <h3 className="contact-card-title">{item.title}</h3>
                <span className="contact-card-data">{item.data}</span>
              </div>
            ))}

            <button className="btn btn-flex" onClick={handleDownloadCV}>
              Download My CV
              <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </div>

        <div className="contact-card contact-content">
          <h3 className="contact-title">Send a Message</h3>
          <form className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Input your name"
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Input your email"
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Phone</label>
              <input
                type="number"
                name="phone"
                className="contact-form-input"
                placeholder="Input your phone"
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Description</label>
              <textarea
                name="description"
                cols={30}
                rows={10}
                className="contact-form-input"
                placeholder="Input your description"
              ></textarea>
            </div>

            <button className="btn btn-flex">
              Send message
              <i className="fa-solid fa-caret-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
  