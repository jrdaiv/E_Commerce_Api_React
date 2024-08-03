
import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap'
import {getProducts} from '../Services/Api/'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await getProducts();
                setProducts(response.data);
            } catch(error) {
                alert('Error fetching products:', error);
            }
            }
            fetchProducts();
        }, []);

        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )


        
}


export default ProductList















