import React from 'react';
import ProductForm from './ProductForm.jsx';
import ProductDetails from './productDetails.jsx';
import ProductUpdateForm from './ProductUpdateForm.jsx';
import ProductDelete from './ProductDelete.jsx';
import ProductList from './ProductList.jsx';
import { Container, Row, Col } from 'react-bootstrap';

const Products = () => {
  return (
    <Container>
      <Row>
        <Col><ProductForm /></Col>
        <Col><ProductDetails /></Col>
        <Col><ProductUpdateForm /></Col>
        <Col><ProductDelete /></Col>
      </Row>
      <Row>
        <Col><ProductList /></Col>
      </Row>
    </Container>
  );
};

export default Products;
