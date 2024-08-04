import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getOrderStatus} from '../Services/Api/'


const OrderStatus = () => {
    const {id} = useParams();
    const [orderStatus, setOrderStatus] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrderStatus = async () => {
            try{
                const response = await getOrderStatus(id);
                setOrderStatus(response);
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchOrderStatus();
    }, [id])

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;
    
    return(
        <div>
            {orderStatus && (
                <div>
                    <h2>Order Status</h2>
                    <p>Order ID: {OrderStatus.id}</p>
                    <p>Status: {OrderStatus.status}</p>
                </div>
            )}
        </div>
    )
}
export default OrderStatus;











