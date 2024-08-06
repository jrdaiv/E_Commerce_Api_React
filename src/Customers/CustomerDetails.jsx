import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {Table, Button} from 'react-bootstrap';
import {getCustomer, deleteCustomer} from '../Services/Api/'


const CustomerDetails = () => {
    const {id} = useParams();
    const [customer, setCustomer] = useState({});
    // const history = useHistory(); // to navigate away from after deleted *fingers crossed*
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCustomer = async () => {
            
            try{
                 const response = await getCustomer(id);
                 setCustomer(response);
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        };
        fetchCustomer();
    }, [id]);  



    // const handleDelete = async () => {
    //     setLoading(true);
    //     try{
    //         await deleteCustomer(id);
    //         alert('Customer deleted successfully');
            
    //     }catch(error){
    //         setError(error.message);
    //     }finally{
    //         setLoading(false);

    //     }
    // };

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>{customer.name}</h1>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
        </div>
    );
};


    
export default CustomerDetails;







