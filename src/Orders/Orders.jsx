import React from 'react';
import OrderForm from './OrderForm.jsx';
import OrderDetails from './OrderDetails.jsx';
import OrderStatus from './OrderStatus.jsx';
import { Container, Row, Col } from 'react-bootstrap';

const Orders = () => {
  return (
    <Container>
      <Row>
        <Col><OrderForm /></Col>
      </Row>
      <Row>
        <Col><OrderDetails /></Col>
      </Row>
      <Row>
        <Col><OrderStatus /></Col>
      </Row>
    </Container>
  );
};

export default Orders;
