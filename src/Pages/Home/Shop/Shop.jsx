import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Product from './Product';
import OrderSummary from './OrderSummary';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('product.json').then(res => res.json()).then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        
        // const newCart = [...cart, product];
        setCart(newCart);

        // save data to localstorage
        addToDb(product.id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    
    return (
        <div className='md:my-24 grid md:gap-6 handleGrid'>
            {/* Product */}
            <div>
                <Product 
                    products={products}
                    handleAddToCart={handleAddToCart}
                />
            </div>

            {/* Order Summary */}
            <div>
                <OrderSummary 
                    cart={cart}
                    handleClearCart={handleClearCart}
                />
            </div>
        </div>
    );
};

export default Shop;