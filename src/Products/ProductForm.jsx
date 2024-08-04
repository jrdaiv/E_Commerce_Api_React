import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createProduct } from '../Services/Api/';
import 'bootstrap/dist/css/bootstrap.min.css';



const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    console.log('ProductForm component rendered');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

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
            <h2 className='text-white'>Create Products</h2>
            <Form.Group controlId="formProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control id='text-input' type="text" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formProductPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control id='text-input' type="number" placeholder="Enter product price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>

            <Button variant="warning" type="submit">
                Create Product
            </Button>
        </Form>
    );

}
export default ProductForm;




















