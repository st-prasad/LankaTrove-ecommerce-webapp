import { useParams } from "react-router-dom";
//The useParams hook helps us to access the URL parameters from a current route. It returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
import { Button, Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import productsData from "../productsData";

import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const Productscreen = () => {
  const { id: productId } = useParams();
  const productData = productsData.find((element) => element._id === productId);

  return <Container>
       
       <Link className="btn product-backbtn" to={"/"}>
        Back </Link>
        <Image
        src={productData.image}
        alt={productData.name}
        className="product-image"
        fluid
      />
        <div className="product-name">{productData.name}</div>

        <div className="product-description">{productData.description}</div>
        <h3 className="product-price">${productData.price}</h3>
        <div>
          <Rating value={productData.rating} reviewsCount={productData.numReviews} />
        </div>
{/* add to cart section */}
        <section className="addToCartDiv">
        {productData.countInStock > 0 ? (
          <div>
            <Button className="btn btn-block" type="button">
            Add to Cart
          </Button>
          </div>
        ) : (
          <div className="outOfStock">Out of Stock</div>
        )}

        </section>
    </Container>
};
export default Productscreen;
