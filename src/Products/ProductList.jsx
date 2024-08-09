
import React, {useEffect, useState} from 'react';
import {Table, Button} from 'react-bootstrap'
import {getProducts} from '../Services/Api/'
import {deleteProduct} from '../Services/Api/'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Styles.css'


const ProductList = () => {
    const [id, setId] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await getProducts();
                console.log('API response:', response);
                setId(response.id);
                setProducts(response);
            } catch (error) {
                setError(error.message);
            }finally{
                setLoading(false);
            }
            }
            fetchProducts();
        }, []);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        const handleDelete = async (productId) => {
            console.log(productId)
            // setLoading(true);
            try {
                const response = await deleteProduct(productId);
                console.log(response)
                setProducts(products.filter(product => product.id !== productId));
                alert('Product deleted successfully');
            } catch (error) {
                setError(error.message);
            }
        }

    

        return(
            <Table striped bordered hover variant='dark' >
                <thead>
                    <h2 className='product-title'>Products</h2>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.product_id}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td><Button variant="danger" className='btn' onClick={() => handleDelete(product.product_id)} disabled={loading}>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )


        
}


export default ProductList















