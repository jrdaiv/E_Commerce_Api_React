import React, { useState, useEffect} from 'react'
import { Container, Table, Button } from 'react-bootstrap';
import {getOrders, getCustomer, getCustomers} from '../Services/Api/'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Styles.css'


const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await getOrders();
                setOrders(response);
                console.log(response)
                const customerData = {};
                for (const order of response) {
                    const customerResponse = await getCustomer(order.customerId);
                    customerData[order.customerId] = customerResponse;
                }
                setCustomers(customerData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
        // setLoading(false);
    }, []);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await getCustomers();
                setCustomers(response);
                console.log(response)
            }catch(error){
                setError(error.message);

            }
        }
        fetchCustomers();
        setLoading(false);
    }, []);

    const handleDelete = async (id) => {
        if (id) {
            try {
                await deleteOrder(id);
                setOrders(orders.filter(order => order.id !== id));
            } catch (error) {
                setError(error.message);
            }
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
                    <th>Product</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody >
                {orders.map((order, index) => (
                    <tr key={order.customer_Id}>
                        <td>{order.order_id}</td>
                        <td> {customers[order.customerId]}</td>
                        <td>{order.product}</td>
                        {/* <td>{order.price}</td> */}
                        <td><Button variant="danger" onClick={() => handleDelete(order.id)} disabled={loading}>
                            Delete
                        </Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Container>
  )
}

export default OrderList