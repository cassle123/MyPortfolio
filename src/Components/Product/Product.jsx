import { useEffect, useState } from "react";
import "./Product.css";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import { useLocation } from "react-router-dom";


function Product() {
  const [viewList, setViewList] = useState(true);
  const [product, setProduct] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const url = window.location.search;
    if (url.includes("?id=")) {
      const id = parseInt(new URLSearchParams(window.location.search).get("id"), 10);
      setViewList(false);
      setProduct(id);
    }
    else{
      setViewList(true);
      setProduct(null);
    }
  }, [location.search]);

  return (
    <section className="product container section" id="product">
      {viewList && (
        <>
          <h2 className="section-title">Product</h2>
          <ProductList />
        </>
      )}
      {!viewList && product && <ProductDetails productId={product} />}
    </section>
  );
}

export default Product;
