import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {deleteProduct} from '../services/api/'


const ProductDelete = () => {
    const {id} = useParams();

    const handleDelete = async () => {
        try {
            await deleteProduct(id);
            alert('Product deleted successfully');
        } catch (error) {
            alert('Error deleting product:', error);
        }
    }

  return (
    <Button variant="danger" onClick={handleDelete}>Delete</Button>
  )
}

export default ProductDelete