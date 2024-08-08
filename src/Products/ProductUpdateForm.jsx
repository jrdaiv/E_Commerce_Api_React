import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import {getProduct, updateProduct} from '../Services/Api';
import 'bootstrap/dist/css/bootstrap.min.css';



const ProductUpdateForm = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const response = await getProduct(id);
                setName(response);

            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchProduct();
    }, [])

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;
    // if(!name) return <p>Product not found</p>;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await updateProduct(id, {name, price});
            alert('Product updated successfully');
        }catch(error){
            setError(error.message);
        }
    }

  return (
    <Form onSubmit={handleSubmit}>
        <h2 className='text-white'>Update Products</h2>
        <Form.Group controlId="formProductName">
            <Form.Label>Product ID</Form.Label>
            <Form.Control id='text-input' type="text" placeholder="Enter product ID" value={id} onChange={(e) => setId(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control id='text-input' type="text" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formProductPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control id='text-input' type="number" placeholder="Enter product price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>

        <Button variant="warning" type="submit">
            Update Products
        </Button>
    </Form>
  )
}

export default ProductUpdateForm