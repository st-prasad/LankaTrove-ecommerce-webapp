import { Col, Row } from "react-bootstrap";
import products from "../products.js";

// Product component
const ProductCard = ({ name, description, price, image }) => (
  <Col sm={12} md={6} lg={4} xl={3}>
    <div>
      <h3>{name}</h3>
      {/* image */}
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>${price}</p>
    </div>
  </Col>
);

// Homescreen component
const Homescreen = () => {
  return (
    <>
      <h1>Products</h1>
      <Row>
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </Row>
    </>
  );
};

export default Homescreen;
