import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Exercises from './products';
import ProductCard from './ProductCard';

const Detail = () => {
const { slug } = useParams();  // Get the slug from the URL

var currProduct = Exercises.find((product) => product.slug === slug);

  return (
    <Container className="w-100">
         <Row className='productRow me-auto ms-auto mx-auto my-5 g-5 justify-content-center' sm={12}>

              <ProductCard name={currProduct.name} description={currProduct.description} image={currProduct.image} slug={currProduct.slug} />



         </Row>
</Container>
  )
}

export default Detail;