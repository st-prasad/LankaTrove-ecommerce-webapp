import { Card } from 'react-bootstrap';
import './productCard.css'; // Import your additional CSS file

const ProductCard = ({productData}) => {
  return (
    <Card className="product-card my-3 p-3">
      <a href="#" className="product-link">
      <Card.Img
        variant="top"
        src={productData.image}
        alt={productData.name}
        className="product-image"
      />
      </a>
      
      <Card.Body>
        <Card.Title as='div' className="product-name">{productData.name}</Card.Title>
        {/* The as prop in React Bootstrap allows you to customize the type of HTML element used by a specific Bootstrap component. */}
        <Card.Text as='div' className="product-description">{productData.description}</Card.Text>
        <Card.Text as='h3' className="product-price">${productData.price}</Card.Text>
      </Card.Body>
    </Card>
  //fix props-validation errors using prop-types' library
  );
};

export default ProductCard;


