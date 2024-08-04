import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import { getOrder, updateOrder } from '../Services/Api';

const OrderUpdateForm = () => {
    const {id} = useParams();
    const [order, setOrder] = useState(null);
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = async () => {
            try{
                const response = await getOrder(id);
                const {product, price} = response
                setProduct(product);
                setPrice(price);

            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchOrder();
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await updateOrder(id, {product, price});
            alert('Order updated successfully');
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    }

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;
    // if(!order) return <p>Order not found</p>;





  return (
    <div>
        <h2>Update Order</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="product">
                <Form.Label>Product</Form.Label>
                <Form.Control type="text" value={product} 
                onChange={(e) => setProduct(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" value={price} 
                onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>
            <Button variant="warning" type="submit">Update Order</Button>
        </Form>
    </div>
  )
}

export default OrderUpdateForm