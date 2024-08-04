import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getOrder} from '../Services/Api/'
import {Table} from 'react-bootstrap'

const OrderDetails = () => {
    const {id} = useParams();
    const [order , setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try{
                const response = await getOrder(id);
                console.log(response);
                setOrder(response);
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchOrder();
    }, [id])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!order) return <p>Order not found</p>;

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {order.map((product) => (
                        <tr key={order.id}>
                            <td>{order.name}</td>
                            <td>${order.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )


}

export default OrderDetails;




















