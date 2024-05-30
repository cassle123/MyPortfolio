import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Sidebar from "./Sidebar/Sidebar";
import Experience from "./Experience/Experience";

const routes = [
  { path: "/", element: <Home />, name: "Home", icon: "icon-home" },
  {
    path: "/about",
    element: <About />,
    name: "About",
    icon: "icon-user-following",
  },
  {
    path: "/experience",
    element: <Experience />,
    name: "Experience",
    icon: "icon-briefcase",
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    name: "Portfolio",
    icon: "icon-layers",
  },
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
