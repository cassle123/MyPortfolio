import { Link } from "react-router-dom";

function ScrollDown() {
  return (
    <div className="scroll-down">
      <a href="#about" className="mouse-wrapper">
        <span className="home-scroll-name">Scroll Down</span>
        <span className="mouse">
          <i className="fa-solid fa-arrow-down wheel"></i>
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  );
}

export default ScrollDown;
