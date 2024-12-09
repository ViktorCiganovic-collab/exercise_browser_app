
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <Card style={{ width: '18rem' }} className='card'>
    <Link to={`/${props.slug}`}>
      <Card.Img variant="top" src={props.image} className='w-100 productImg' />
    </Link>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>
        <Button variant="primary">Get more information...</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;