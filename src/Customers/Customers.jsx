import React from 'react';
import CustomerForm from './CustomerForm';
import CustomerUpdateForm from './CustomerUpdateForm';
import CustomerDelete from './CustomerDelete';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/Styles.css'


const Customers = () => {
  return (
    <Container className='cust-form'>
      <Row>
        <Col className='cust'><CustomerForm /></Col>
      </Row>
      <Row>
        <Col className='cust'><CustomerUpdateForm /></Col>
      </Row>
      <Row>
        <Col className='cust'><CustomerDelete /></Col>
      </Row>
    </Container>
  );
};

export default Customers;
