        import React, { useState, useEffect } from 'react';
        import { Form, Button } from 'react-bootstrap';
        import { getOrder, updateOrder } from '../Services/Api';

        const OrderUpdateForm = ({productId}) => {
            const [id, setId] = useState('');
            const [customerId, setCustomerId] = useState('');
            const [date, setDate] = useState('');
            const [selectedProducts, setSelectedProducts] = useState('');
            const [error, setError] = useState(null);
            const [loading, setLoading] = useState(true);

            useEffect(() => {
                if(id){}
                const fetchOrder = async () => {
                    setLoading(true);
                    try {
                        const response = await getOrder(id);
                        setCustomerId(response.customer_id);
                        setDate(response.date);
                        setSelectedProducts(response.products.map(product => product.id));
                    } catch (error) {
                        setError(error.message);
                    } finally {
                        setLoading(false);
                    }
                }
                fetchOrder();
            }, [id]);



            const handleSubmit = async (e) => {
                e.preventDefault();
                setLoading(true);
                try {
                    await updateOrder(id, {customer_id: customerId, date, products: selectedProducts });
                    alert('Customer updated successfully');
                } catch (error) {
                    alert(error.message);
                }finally{
                    setLoading(false);
                }
            };

            // if (loading) return <p>Loading...</p>;
            // if (error) return <p>Error: {error}</p>;

            return (
                <Form onSubmit={handleSubmit}>
                    <h2 className='text-white'>Update Orders</h2>
                    <Form.Group>
                        <Form.Label>Order Id</Form.Label>
                        <Form.Control className='form-con' type="text" placeholder="Enter order Id" value={id} onChange={(e) => setId(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Customer ID</Form.Label>
                        <Form.Control className='form-con' type="text" placeholder="Enter customer ID" value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control className='form-con' type="date" placeholder="Enter date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product ID</Form.Label>
                        <Form.Control className='form-con' type="text" placeholder="Enter product ID" value={productId} onChange={(e) => setSelectedProducts(Array.from(e.target.selectedOptions, option => option.value))} />
                        
                    </Form.Group>
                    <Button variant="warning" type="submit" disabled={loading}>
                        Update Order
                    </Button>
                    {error && <p>{error}</p>}
                </Form>
            );
        }

        export default OrderUpdateForm;
