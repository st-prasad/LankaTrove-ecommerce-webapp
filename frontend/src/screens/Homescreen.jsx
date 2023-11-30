import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import productsData from "../productsData";

// Homescreen component
const Homescreen = () => {
  return (
    <Container>
      <h1>Products</h1>
      <Row>
        {/* <Col sm={12} md={6} lg={4} xl={3}> */}
        {productsData.map((productData) => (
          <Col key={productData.id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard productData={productData} />
          </Col>
        ))}
        {/* </Col> */}
      </Row>
    </Container>
  );
};

export default Homescreen;
