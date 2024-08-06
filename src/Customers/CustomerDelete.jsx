import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { deleteCustomer, getCustomers, getCustomer } from '../Services/Api';

const CustomerDelete = () => {
    const { id } = useParams(); // Make sure 'id' is retrieved correctly
    const [customer, setCustomer] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomer = async () => {

            if (id) {
                try {
                    const customerData = await getCustomer(id);
                    setCustomer(customerData);
                } catch (error) {
                    setError(error.message);
                // } finally {
                //     setLoading(false);
                }
            // } else {
            //     setError('Customer ID is missing');
            //     setLoading(false);
            }
        }
        fetchCustomer();
        setLoading(false)
    }, [id]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const customers = await getCustomers();
                console.log(customers)
                setCustomers(customers);
            }catch (error) {
                setError(error.message);
            }
        }
        fetchCustomers();
    }, [])

    const handleDelete = async () => {
        if (id) {
            setLoading(true);
            try {
                await deleteCustomer(id);
                alert('Customer deleted successfully');
                setCustomer(null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        } else {
            setError('Customer ID is missing');
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!customer) return <p>Customer not found</p>;

    return (
        <div>
            <h1 className='text-white'>Customer Details</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                    <tr key={customer.customer_id}>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td><Button variant="danger" onClick={handleDelete} disabled={loading}>Delete</Button></td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default CustomerDelete;
