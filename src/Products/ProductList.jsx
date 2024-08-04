
import React, {useEffect, useState} from 'react';
import {Table, Button} from 'react-bootstrap'
import {getProducts} from '../Services/Api/'
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    console.log('ProductList component rendered');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await getProducts();
                console.log('API response:', response);
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

        const handleDelete = async () => {
            try{
                const response = await deleteProduct();
                console.log('API response:', response);
                setProducts(response);
            } catch (error) {
                setError(error.message);
            }finally{
                setLoading(false);
            }

        }

        return(
            <Table striped bordered hover>
                <thead>
                    <h2>Products</h2>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <Button variant="danger" onClick={() => handleDelete(product.id)} disabled={loading}>Delete</Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )


        
}


export default ProductList















