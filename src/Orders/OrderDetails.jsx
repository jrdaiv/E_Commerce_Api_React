import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getOrder} from '../Services/Api/'

const OrderDeatils = () => {
    const {id} = useParams();
    const [order , setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try{
                const response = await getOrder(id);
                setOrder(response.data);
            }catch(error){
                alert('Error fetching order:', error);
            }
        }
        fetchOrder();
    }, [id])

    return(
        <div>
            <h1>Order Details</h1>
            <p>Order Date: {order.orderDate}</p>
            <p>Customer: {order.customer.name}</p>
            <p>Product: {order.product.name}</p>
        </div>
    )


}

export default OrderDeatils;




















