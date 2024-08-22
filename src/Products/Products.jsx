import React from 'react';
import ProductForm from './ProductForm';
import ProductDetails from './ProductDetails';
import ProductUpdateForm from './ProductUpdateForm';
import ProductDelete from './ProductDelete';
import ProductList from './ProductList';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Styles.css'


const Products = () => {
  console.log('Products component rendered');
  return (
    <Container>
      <Row>
        <Col className='cust'><ProductForm /></Col>
      </Row>
      <Row>
        <Col className='cust'><ProductUpdateForm /></Col>
      </Row>
      <Row>
        <Col className='cust'><ProductList /></Col>
      </Row>
      <Row>
        <Col className='cust'><ProductDetails /></Col>
      </Row>
      <Row>
        <Col className='cust'><ProductDelete /></Col>
      </Row>
    </Container>
  );
};

export default Products;
