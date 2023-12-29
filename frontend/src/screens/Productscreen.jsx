import { useParams } from "react-router-dom";
//The useParams hook helps us to access the URL parameters from a current route. It returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
import productsData from "../productsData";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Productscreen = () => {
  const { id: productId } = useParams();
  const productData = productsData.find((element) => element._id === productId);

  return <Card>
       
      {/* <Card.Img
        variant="top"
        src={productData.image}
        alt={productData.name}
        className="product-image"
      /> */}
      
      <Card.Body>
        <Card.Title as='div' className="product-name"><h1>{productData.name}</h1></Card.Title>

        <Card.Text as='div' className="product-description">{productData.description}</Card.Text>
        <Card.Text as='h3' className="product-price">${productData.price}</Card.Text>
      </Card.Body>
    </Card>
};
export default Productscreen;
