import { Link } from "react-router-dom";

function ScrollDown() {
  return (
    <div className="scroll-down">
      <Link to={"/contact"} className="mouse-wrapper">
        <span className="home-scroll-name">Scroll Down</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </Link>
    </div>
  );
}

export default ScrollDown;
