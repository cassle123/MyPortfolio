import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
import Pricing from "./Pricing/Pricing";
import Testimonials from "./Testimonials/Testimonials";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Sidebar from "./Sidebar/Sidebar";

const routes = [
  { path: "/", element: <Home />, name: "Home", icon: "icon-home" },
  {
    path: "/about",
    element: <About />,
    name: "About",
    icon: "icon-user-following",
  },
  {
    path: "/services",
    element: <Services />,
    name: "Services",
    icon: "icon-briefcase",
  },
  {
    path: "/resume",
    element: <Resume />,
    name: "Resume",
    icon: "icon-graduation",
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    name: "Portfolio",
    icon: "icon-layers",
  },
  { path: "/pricing", element: <Pricing />, name: "Pricing", icon: "icon-tag" },
  {
    path: "/testimonials",
    element: <Testimonials />,
    name: "Testimonials",
    icon: "icon-bubble",
  },
  { path: "/blog", element: <Blog />, name: "Blog", icon: "icon-note" },
  {
    path: "/contact",
    element: <Contact />,
    name: "Contact",
    icon: "icon-speech",
  },
];

const Main = () => {
  return (
    <>
      <Sidebar routes={routes} />
      <main className="main">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </>
  );
};

export default Main;
