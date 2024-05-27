import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";

function Sidebar({ routes }) {
  return (
    <aside className="aside">
      <Link to="/" className="nav-logo">
        <img src={Logo} alt="Logo" />
      </Link>

      <nav className="nav">
        <div className="nav-menu">
          <ul className="nav-list">
            {routes.map((route, index) => (
              <li key={index} className="nav-item">
                <Link to={route.path} className="nav-link">
                  <i className={route.icon}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="nav-footer">
        <span className="copyright">&copy; 2023-2024.</span>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      element: PropTypes.element.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired
};


export default Sidebar;