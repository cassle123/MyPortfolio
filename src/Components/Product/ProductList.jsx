import { Link } from "react-router-dom";
import Img1 from "../../assets/OA-Web-1.png";
import Img2 from "../../assets/OA-Web-2.png";
import Img3 from "../../assets/Portfolio-Web-1.png";
import { useState } from "react";

const data = [
  {
    id: 1,
    img: Img1,
    title: "Project Website OA ",
    category: "Web",
  },
  {
    id: 2,
    img: Img2,
    title: "Project app mobile OA",
    category: "App",
  },
  {
    id: 3,
    img: Img3,
    title: "My Portfolio",
    category: "Web",
  },
];

const types = [
  { name: "All", category: "" },
  { name: "Web", category: "Web" },
  { name: "App", category: "App" },
];

function ProductList() {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  const filteredData =
    active === 0
      ? data
      : data.filter((item) => item.category === types[active].category);

  return (
    <>
      <div className="product-filters">
        {types.map((item, index) => (
          <span
            key={index}
            className={
              active === index ? "product-item active" : "product-item"
            }
            onClick={() => handleClick(index)}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="product-container grid">
        {filteredData.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-thumnail">
              <img src={item.img} alt={item.title} className="product-img" />
              <div className="product-mask"></div>
            </div>

            <span className="product-category">{item.category}</span>
            <Link to="#" className="product-button">
              <i className="fa-solid fa-arrow-right product-button-icon"></i>
            </Link>
            <h3 className="product-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
