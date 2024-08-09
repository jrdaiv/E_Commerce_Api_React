import React, {useState, useEffect} from 'react';
import {Form, Button, FormControl} from 'react-bootstrap';
import {createOrder, getCustomers, getProducts} from '../Services/Api/'
import "../Styles/Styles.css"

const OrderForm = () => {
  const [customers, setCustomer] = useState([]);
  const [products, setProducts] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [selectedProducts, setSelectedProducts] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomersAndProducts = async () => {
      try {
        const customersData = await getCustomers();
        const productsData = await getProducts();
        setCustomer(customersData);
        setProducts(productsData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCustomersAndProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createOrder({customerId, orderDate, selectedProducts  });
      alert("Order created successfully");
      setCustomerId("");
      setSelectedProducts("");
      setOrderDate("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    console.log(customerId, selectedProducts, orderDate)
  };

  return(

    <Form onSubmit={handleSubmit}>
      <h2 className='text-white'>Create Order</h2>
      <Form.Label>Customers</Form.Label>
      <FormControl className='form-con' as="select" value={customerId} onChange={(e) => setCustomerId(e.target.value)}>
        
        <option value="">Select Customer</option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.name}
          </option>
        ))}
      </FormControl>
      <Form.Label>Customers</Form.Label>
      <FormControl className='form-con' as="select" value={selectedProducts} onChange={(e) => setSelectedProducts(e.target.value)}>
        <option value="">Select Products</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </FormControl>
      <Form.Label>Customers</Form.Label>
      <FormControl className='form-con' type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />

      <Button type="submit" variant="warning" disabled={loading}>
        {loading ? "Creating..." : "Create Order"}
      </Button>
      {error && <p>{error}</p>}
    </Form>
  )


};

export default OrderForm;


















