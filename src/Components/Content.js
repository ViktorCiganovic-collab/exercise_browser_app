import { useState } from 'react';
import Exercises from './products';
import ProductCard from './ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Content = () => {

const [searchItem, setSearchItem] = useState();
const [filteredItems, setFilteredItems] = useState(Exercises);


const handleInput = (e) => {

    var searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredProducts = Exercises.filter((exercise) => (
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));

    setFilteredItems(filteredProducts)

}

  return (
    <Container className="w-100">

        <input type="text" value={searchItem} onChange={handleInput} placeholder="Type to search" />

        <Row className='productRow justify-content-center ms-auto me-auto mx-auto my-5 mx-5 g-5'>

        {filteredItems.map((exercise) => (       

        <Col xs={12} sm={6} lg={4} d-flex justify-content-center >
            <ProductCard name={exercise.name} description={exercise.description} image={exercise.image} slug={exercise.slug} />        
        </Col>

        ))}


        </Row>


    </Container>
  )
}

export default Content