import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {getCustomer} from '../Services/Api/'

const CustomerDetails = () => {
    const {id} = useParams();
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        const fetchCustomer = async () => {
            const data = await getCustomer(id);
            setCustomer(data);
        }
        fetchCustomer();
    }, [id])

    return (
        <div>
            <h1>Customer Details</h1>
            <p>Name: {customer.name}</p>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
        </div>
    );
};
export default CustomerDetails;







