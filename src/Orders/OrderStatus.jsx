import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getOrderStatus} from '../Services/Api/'


const OrderStatus = () => {
    const {id} = useParams();
    const [status, setStatus] = useState('');

    useEffect(() => {
        const fetchOrderStatus = async () => {
            try{
                const response = await getOrderStatus(id);
                setOrderStatus(response.data);
            }catch(error){
                alert('Error fetching order status:', error);
            }
        }
        fetchOrderStatus();
    }, [id])
    
    return(
        <div>
            {orderStatus && (
                <div>
                    <h2>Order Status</h2>
                    <p>Order ID: {orderStatus.id}</p>
                    <p>Status: {orderStatus.status}</p>
                </div>
            )}
        </div>
    )
}
export default OrderStatus;











