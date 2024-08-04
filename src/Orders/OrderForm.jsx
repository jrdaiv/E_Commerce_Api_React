import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import {createOrder, getCustomers, getProducts} from '../Services/Api/'

const OrderForm = () => {
    const [customers, setCustomer] = useState([]);
    const [products, setProducts] = useState([]);
    const [customerId, setCustomerId] = useState('');
    const [productId, setProductId] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCustomersAndProducts = async () => {
            try{
                const customersData = await getCustomers();
                const productsData = await getProducts();
                setCustomer(customersData);
                setProducts(productsData);
            } catch (error) {
                setError(error.message);
            }
            
        }
        fetchCustomersAndProducts();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            await createOrder({customerId, productId, orderDate});
            alert('Order created successfully');
            setCustomerId('');
            setProductId('');
            setOrderDate('');
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    };

    return (
      <>
        {error && <p>{error}</p>}
        <h2 className='text-white'>Create Order</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="customerId">
            <Form.Label>Customer</Form.Label>
            <Form.Control
              as="select"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              id='text-input'
            >
              <option value="">Select a customer</option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="productId">
            <Form.Label>Product</Form.Label>
            <Form.Control
              as="select"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              id='text-input'
            >
              <option  value="">Select a product</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="orderDate">
            <Form.Label>Order Date</Form.Label>
            <Form.Control
              type="date"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
              id='text-input'
            />
          </Form.Group>

          <Button variant="warning" type="submit" disabled={loading}>
            {loading ? 'Creating Order...' : 'Create Order'}
          </Button>
        </Form>
      </>
    );
    





}

export default OrderForm;



















