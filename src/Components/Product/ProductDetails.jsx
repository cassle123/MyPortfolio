import { Link, useLocation } from 'react-router-dom';
import images from './ImgProduct';

const data = [
    {
      id: 1,
      images: images[1],
      title: "Website OA",
    },
    {
      id: 2,
      images: images[2],
      title: "App OA",
    }
  ];

function ProductDetails() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const productId = parseInt(query.get('id'), 10);

  const product = data.find(item => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h2 className="section-title product-details-title">
      <Link to="/product" className="product-button-back"> <i className="fa-solid fa-arrow-left product-icon-back"></i></Link>
        Project: {product.title}
    </h2>
      {product.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Product ${index + 1}`}
          className="product-image"
        />
      ))}
    </div>
  );
}

export default ProductDetails;
