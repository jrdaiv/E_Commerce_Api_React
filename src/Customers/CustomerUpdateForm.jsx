import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {getCustomer, updateCustomer} from '../Services/Api/'
import '../Styles/Styles.css'


const CustomerUpdateForm = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCustomer = async () => {
            try{
                const response = await getCustomer(id);
                const {name, email, phone} = response;
                setName(name);
                setEmail(email);
                setPhone(phone);
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchCustomer();
    }, [id]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await updateCustomer(id, {name, email, phone});
            alert('Customer updated successfully');
        }catch(error){
            alert('Error updating customer:', error);
        };
    };

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCustomerName">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control type="text" placeholder="Enter customer name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formCustomerEmail">
          <Form.Label>Customer Email</Form.Label>
          <Form.Control type="email" placeholder="Enter customer email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formCustomerPhone">
          <Form.Label>Customer Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter customer phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Customer
        </Button>
      </Form>
    );

}


export default CustomerUpdateForm;

























