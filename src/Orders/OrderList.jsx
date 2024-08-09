import React, { useState, useEffect} from 'react'
import { Container, Table, Button } from 'react-bootstrap';
import {getOrders, cancelOrder } from '../Services/Api/'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Styles.css'



const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try{
                const orderData = await getOrders();
                console.log(orderData);
                setOrders(orderData);

            }catch(error) {
                setError(error.message);
            }finally{
                setLoading(false);
            }
            
        };
        fetchOrders();
    }, []);

    const handleDelete = async (orderId) => {
        console.log(orderId)
        if (orderId) {
            try {
                const response = await cancelOrder(orderId);
                const orders = await getOrders();
                console.log(response);
                console.log(orders);
                setOrders(orders.filter(order => order.id !== orderId));
                alert('Order canceled successfully');
            } catch (error) {
                setError(error.message);
            }
        }
    };



    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;
    




  return (
    <div>
        <h2 className='text-white'>Order list</h2>
        <Table striped bordered hover variant='dark' className='cust-table'>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer ID</th>
                    <th>Order Date</th>
                    {/* <th># of Products</th> */}
                    <th>Order Details</th>
                    <th>Delete</th>

                </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                    <tr key={order.id}>
                        <td>{order.order_id}</td>
                        <td>{order.customer_id}</td>
                        <td>{order.date}</td>
                        {/* <td>{order.products.length}</td> */}
                        <td>{JSON.stringify(order.products)}</td>
                        <td>
                            <Button variant='danger' onClick={() => handleDelete(order.order_id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>


    </div>

  )
}

export default OrderList