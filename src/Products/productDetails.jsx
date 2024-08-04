import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../Services/Api/';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProduct(id);
                setProduct(data);
            } catch (error) {
                setError(error.message);
            }finally{
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Product not found</p>;

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};
export default ProductDetails;
























