import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Customers from './Customers/Customers';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Styles.css'

const App = () => {
  return (
    <Router>
      <Navbar bg="transparent" variant="dark" expand="sm">
      <Container>
          <Navbar.Brand href="/customers">E-Commerce API</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
