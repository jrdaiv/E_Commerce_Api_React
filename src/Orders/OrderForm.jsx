import React, {useState, useEffect} from 'react';
import {form, Button} from 'react-bootstrap';
import {createOrder, getCustomers, getProducts} from '../Services/Api/'

const OrderForm = () => {
    const [customers, setCustomer] = useState([]);
    const [products, setProducts] = useState([]);
    const [customerId, setCustomerId] = useState('');
    const [productId, setProductId] = useState('');
    const [orderDate, setOrderDate] = useState('');

    useEffect(() => {
        const fetchCustomersAndProducts = async () => {
            try{
                const customersData = await getCustomers();
                const productsData = await getProducts();
                setCustomer(customersData);
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching customers and products:', error);
            }
            
        }
        fetchCustomersAndProducts();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createOrder({customerId, productId, orderDate});
            alert('Order created successfully');
        }catch(error){
            alert('Error creating order:', error);
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <form.Group controlId="customerId">
                <form.Label>Customer</form.Label>
                <form.Control as="select" value={customerId} onChange={(e) => setCustomerId(e.target.value)}>
                    <option value="">Select a customer</option>
                    {customers.map((customer) => (
                        <option key={customer.id} value={customer.id}>{customer.name}</option>
                    ))}
                </form.Control>
            </form.Group>

            <form.Group controlId="productId">
                <form.Label>Product</form.Label>
                <form.Control as="select" value={productId} onChange={(e) => setProductId(e.target.value)}>
                    <option value="">Select a product</option>
                    {products.map((product) => (
                        <option key={product.id} value={product.id}>{product.name}</option>
                    ))}
                </form.Control>
            </form.Group>

            <form.Group controlId="orderDate">
                <form.Label>Order Date</form.Label>
                <form.Control type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />
            </form.Group>

            <Button variant="primary" type="submit">
                Create Order
            </Button>
        </form>
    )
    





}

export default OrderForm;



















