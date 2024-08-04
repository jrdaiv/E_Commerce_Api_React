import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { getOrder, updateOrder } from '../Services/Api';

const OrderUpdateForm = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await getOrder(id);
        setOrder(response);
        setProduct(response.product);
        setPrice(response.price);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateOrder(id, { product, price });
      alert('Order updated successfully');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className='text-white'>Update Order</h2>
      {order && (
        <div>
          <p>ID: {order.id}</p>
          <p>Date: {order.date}</p>
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="product">
          <Form.Label>Product</Form.Label>
          <Form.Control
            id='text-input'
            type="text"
            value={product}
            placeholder='Type Product'
            onChange={(e) => setProduct(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            id='text-input'
            type="number"
            value={price}
            placeholder='Enter price'
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Button variant="warning" type="submit">Update Order</Button>
      </Form>
    </div>
  );
};

export default OrderUpdateForm;
