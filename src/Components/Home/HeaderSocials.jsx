const social = [
  {
    link: "http://www.instagram.com/hhuy31102000/",
    icon: "fa-brands fa-square-instagram",
  },
  {
    link: "https://www.facebook.com/huynhhuy31102000/",
    icon: "fa-brands fa-facebook",
  },
  {
    link: "https://github.com/cassle123/",
    icon: "fa-brands fa-github",
  },
  {
    link: "https://www.linkedin.com/in/huy3110/",
    icon: "fa-brands fa-linkedin",
  },
];

function HeaderSocials() {
  return (
    <div className="home-socials">
      {social.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="home-socials-link"
          target="_blank"
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
}

export default HeaderSocials;
