import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Sidebar.css";
import Logo from "../../assets/logo.png";

function Sidebar({ routes }) {
  const checkActive = () => {
    const list = document.querySelectorAll(".nav-link.active");
    list.forEach((item) => {
      item.classList.remove("active");
      const navLogo = document.querySelector(".nav-logo");
      navLogo.classList.remove("active");
    });
    return "nav-link";
  };

  

  return (
    <aside className="aside">
      <NavLink to="/" className="nav-logo">
        <img src={Logo} className="nav-logo-img" alt="Logo" width={50} height={50} />
      </NavLink>

      <nav className="nav">
        <div className="nav-menu">
          <ul className="nav-list">
            {routes.map((route, index) => (
              <li key={index} className="nav-item">
                <NavLink to={route.path} className={checkActive()}>
                  <i className={`${route.icon} nav-link-icon`}></i>
                  <p className="nav-link-title">
                    {route.name}
                  </p>
                </NavLink>
              </li>
            ))}
          </ul>
          {/* <i className="fa-solid fa-x nav-close"></i> */}
        </div>
      </nav>

      <div className="nav-toggle">
        {/* <i className="fa-solid fa-bars-staggered"></i> */}
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
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sidebar;
