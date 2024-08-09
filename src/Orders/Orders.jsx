import React from 'react';
import OrderForm from './OrderForm';
import OrderUpdateForm from './OrderUpdateForm';
import OrderList from './OrderList';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Styles.css'


const Orders = () => {
  return (
    <Container>
      <Row>
        <Col className='cust'><OrderForm /></Col>
      </Row>
      <Row>
        <Col className='cust'><OrderUpdateForm /></Col>
      </Row>
      <Row>
        <Col className='cust'><OrderList /></Col>
      </Row>


    </Container>
  );
};

export default Orders;
