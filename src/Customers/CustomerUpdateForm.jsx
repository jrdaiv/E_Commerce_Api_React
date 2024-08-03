import React, {useState, useEffect} from 'react';
import { form, Button } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {getCustomer, updateCustomer} from '../Services/Api/'


const CustomerUpdateForm = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const fetchCustomer = async () => {
            try{
                const response = await getCustomer(id);
                const {name, email, phone} = response.data;
                setName(name);
                setEmail(email);
                setPhone(phone);
            }catch(error){
                alert('Error fetching customer:', error);
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

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Phone:
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <Button variant="primary" type="submit">Update Customer</Button>
        </form>
    );

}


export default CustomerUpdateForm;

























