import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
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



    const handleDelete = async () => {
        setLoading(true);
        try{
            const response = await deleteCustomer(id);
            console.log('API response:', response);
            alert('Customer deleted successfully');
            // history.push('/customers');
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);

        }
    };

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;


    return (
        <>
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
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td><Button variant="danger" onClick={() => handleDelete(customer.id)} disabled={loading}>Delete</Button></td>
                </tr>
            </tbody>
        </Table>
        </>
    );
};
export default CustomerDetails;







