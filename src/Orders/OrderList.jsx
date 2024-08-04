import React, { useState, useEffect} from 'react'
import { Container, Table } from 'react-bootstrap';
import {getOrders} from '../Services/Api/'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Styles.css'


const OrderList = () => {
    const [orders, setOrders] = useState([]);
    console.log('OrderList component rendered');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try{
                const response = await getOrders();
                console.log('API response:', response);
                setOrders(response);
            } catch (error) {
                setError(error.message);
            }finally{
                setLoading(false);
            }
            }
            fetchOrders();        
    }, [])

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;




  return (
    <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((orders) => (
                    <tr key={orders.id}>
                        <td>{orders.id}</td>
                        <td>{orders.name}</td>
                        <td>{orders.price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Container>
  )
}

export default OrderList