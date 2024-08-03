import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { deleteCustomer } from '../Services/Api';


const CustomerDelete = () => {
    const {id} = useParams();

    const handleDelete = async () => {
        try {
            await deleteCustomer(id);
            alert('Customer deleted successfully');
        } catch (error) {
            alert('Error deleting customer:', error);
        }
    }

    return (
        <div>
            <h1>Delete Customer</h1>
            <p>Are you sure you want to delete this customer?</p>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
    )
}
export default CustomerDelete;














