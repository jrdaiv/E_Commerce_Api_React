import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createProduct } from '../services/api/';


const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createProduct({name, price});
            alert('Product created successfully');
        }catch(error){
            alert('Error creating product');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formProductPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" placeholder="Enter product price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );

}
export default ProductForm;




















