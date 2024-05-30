import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Sidebar from "./Sidebar/Sidebar";
import Experience from "./Experience/Exp";
import Product from "./Product/Product";

const routes = [
  { path: `/`, element: <Home />, name: "Home", icon: "fa-solid fa-house" },
  {
    path: "/about",
    element: <About />,
    name: "About",
    icon: "fa-solid fa-circle-info",
  },
  {
    path: "/experience",
    element: <Experience />,
    name: "Experience",
    icon: "fa-solid fa-briefcase",
  },
  {
    path: "/product",
    element: <Product />,
    name: "Product",
    icon: "fa-solid fa-layer-group",
  },
  {
    path: "/contact",
    element: <Contact />,
    name: "Contact",
    icon: "fa-solid fa-address-card",
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
