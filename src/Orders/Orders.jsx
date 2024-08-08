import React from 'react';
import OrderForm from './OrderForm';
import OrderDetails from './OrderDetails';
import OrderUpdateForm from './OrderUpdateForm';
import OrderList from './OrderList';
import OrderStatus from './OrderStatus';
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
        {/* <Col className='cust'><OrderDetails /></Col> */}
      </Row>
      <Row>
        <Col className='cust'><OrderList /></Col>
      </Row>


    </Container>
  );
};

export default Orders;
