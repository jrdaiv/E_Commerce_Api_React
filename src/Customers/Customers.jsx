import React from 'react';
import CustomerForm from './CustomerForm.jsx';
import CustomerDetails from './CustomerDetails.jsx';
import CustomerUpdateForm from './CustomerUpdateForm.jsx';
import CustomerDelete from './CustomerDelete.jsx';
import { Container, Row, Col } from 'react-bootstrap';

const Customers = () => {
  return (
    <Container>
      <Row>
        <Col><CustomerForm /></Col>
      </Row>
      <Row>
        <Col><CustomerDetails /></Col>
      </Row>
      <Row>
        <Col><CustomerUpdateForm /></Col>
      </Row>
      <Row>
        <Col><CustomerDelete /></Col>
      </Row>
    </Container>
  );
};

export default Customers;
