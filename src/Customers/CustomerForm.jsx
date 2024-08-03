import React, {useState} from 'react';
import {form, Button} from 'react-bootstrap';
import {createCustomer} from '../Services/Api/';


const CustomerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createCustomer({name, email, phone});
            alert('Customer created successfully');
        }catch (error){
            alert(error.message);

        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <form.Group controlId="formName">
                <form.Label>Name</form.Label>
                <form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </form.Group>
            <form.Group controlId="formEmail">
                <form.Label>Email</form.Label>
                <form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </form.Group>
            <form.Group controlId="formPhone">
                <form.Label>Phone</form.Label>
                <form.Control type="text" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </form>
    );
    
}
export default CustomerForm;




