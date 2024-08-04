import React, { useState, useEffect} from 'react'
import { Container, Table, Button } from 'react-bootstrap';
import {getOrders, getCustomer, deleteOrder} from '../Services/Api/'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Styles.css'


const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try{
                const response = await getOrders();
                setOrders(response);

                const customerData = {};
                for (const order of response) {
                    const customerResponse = await getCustomer(order.customerId);
                    customerData[order.customerId] = customerResponse;
                }
                setCustomers(customerData);
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchOrders();
    }, [])
    
      const handleDelete = async (id) => {
        setLoading(true);
        try {
          await deleteOrder(id);
          setOrders(orders.filter((order) => order.id !== id));
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };



    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;
    




  return (
    <Container >
        <h2 className='text-white'>Order list</h2>
        <Table striped bordered hover>
            <thead>
                <tr >
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody >
                {orders.map((order) => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{customers(order.customerId)?.name || 'Unknown'}</td>
                        <td>{order.name}</td>
                        <td>{order.price}</td>
                        <Button variant="danger" onClick={() => handleDelete(order.id)} disabled={loading}>
                            Delete
                        </Button>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Container>
  )
}

export default OrderList