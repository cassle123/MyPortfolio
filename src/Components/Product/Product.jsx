import "./Product.css";
import ProductList from "./ProductList";

function Product() {
  return (
    <section className="product container section" id="product">
      <h2 className="section-title">Product</h2>
      <ProductList />
    </section>
  );
}

export default Product;
