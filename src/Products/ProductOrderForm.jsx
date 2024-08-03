import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {getProduct, updateProduct} from '../services/api/'


const ProductUpdateForm = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProduct(id);
                const {name, price} = response.data;
                setName(name);
                setPrice(price);
            } catch (error) {
                alert('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(id, {name, price});
            alert('Product updated successfully');
        } catch (error) {
            alert('Error updating product:', error);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <Form.Group controlId="formProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" 
                value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formProductPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" placeholder="Enter product price" 
                value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Update Product
            </Button>
        </form>
    )



}

export default ProductUpdateForm;



















