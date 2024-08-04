import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {deleteProduct} from '../Services/Api/'
import 'bootstrap/dist/css/bootstrap.min.css';



const ProductDelete = () => {
    const {id} = useParams();
    const [products, setProducts] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
  useEffect (() => {
      const fetchProducts = async () => {
            try {
              const response = await deleteProduct(id);
              setProducts(response);
            } catch (error) {
              setError(error.message);
            }finally {
              setLoading(false);
            }
      }

    fetchProducts();
  }, [id])


    const handleDelete = async () => {
        setLoading(true);
        try {
            await deleteProduct(id);
            setProducts(products.filter(product => product.id !== id));
            alert('Product deleted successfully');
        } catch (error) {
            setError(error.message);
        }finally{
            setLoading(false);
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

  return (
    <Button variant="danger" onClick={handleDelete} disabled={loading}>Delete</Button>
  )
}

export default ProductDelete