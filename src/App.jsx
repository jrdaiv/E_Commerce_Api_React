import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Customers from './Customers/Customers';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import CustomerUpdateForm from './Customers/CustomerUpdateForm';
import CustomerDetails from './Customers/CustomerDetails';
import CustomerDelete from './Customers/CustomerDelete';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Styles.css'

const App = () => {
  return (
    <Router>
      <Navbar bg="transparent" variant="dark" expand="sm">
      <Container>
          <Navbar.Brand href="/customer">E-Commerce API</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/customer">Customers</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/customer" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customer/update/:id" element={CustomerUpdateForm} />
          <Route path="/customer/details/:id" element={CustomerDetails} />
          <Route path="/customer/delete/:id" element={CustomerDelete} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
