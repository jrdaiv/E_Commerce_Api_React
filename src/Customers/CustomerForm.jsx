import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {createCustomer} from '../Services/Api/';
// import '../Styles/Styles.css'


const CustomerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            await createCustomer({name, email, phone});
            alert('Customer created successfully');
            setName('');
            setEmail('');
            setPhone('');
        }catch (error){
            setError(error.message);
        }finally {
            setLoading(false);}
    }

    return(
        <>
        <div className="customer-form-container">
        {error && <p>{error.message}</p>}
        <h2 className='text-white'>Create Customer</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control id='text-input' type="text" placeholder="Enter name" 
                value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control id='text-input' type="email" placeholder="Enter email" 
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control id='text-input' type="text" placeholder="Enter phone" 
                value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
            <Button variant="warning" type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create Customer'}
            </Button>
        </Form>
        </div>
        </>
    );
    
}
export default CustomerForm;




