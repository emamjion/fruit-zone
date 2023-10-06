import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Product from './Product';
import OrderSummary from './OrderSummary';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json').then(res => res.json()).then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        console.log(product);
    }
    
    return (
        <div className='md:my-24 grid gap-6 handleGrid'>
            {/* Product */}
            <div>
                <Product 
                    products={products}
                    handleAddToCart={handleAddToCart}
                />
            </div>

            {/* Order Summary */}
            <div>
                <OrderSummary/>
            </div>
        </div>
    );
};

export default Shop;