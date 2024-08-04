import React, { useState, useEffect } from 'react';
import { Button, Form, Table} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { deleteCustomer, getCustomer } from '../Services/Api';


const CustomerDelete = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const customer = await getCustomer(id);
                const {name, email, phone} = customer;
                setName(name);
                setEmail(email);
                setPhone(phone);
            } catch (error) {
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchCustomer();
    }, [id])



    const handleDelete = async (e) => {
        // e.preventDefault();
        setLoading(true)
        try {
            await deleteCustomer(id);
            alert('Customer deleted successfully');
        } catch (error) {
            setError(error.message);
        }finally{
            setLoading(false);
        }
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;



    return (
        <div>
            <h1 className='text-white'>Customers Details</h1>
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
                    <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td><Button variant="danger" onClick={handleDelete} disabled={loading}>Delete</Button></td>
                    </tr>
                </tbody>
            </Table>
            
        </div>
    )
}
export default CustomerDelete;














