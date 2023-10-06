import React, { useState } from 'react';
import OrderSummary from '../Shop/OrderSummary';
import OrdersInformation from './OrdersInformation';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const hadleRemoveFromCart = (id) => {
        console.log(id);
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    
    return (
        <div className='md:my-24 grid gap-6 handleGrid'>
            <div>
                {
                    cart.map(product => <OrdersInformation 
                        key={product.id}
                        product={product}
                        hadleRemoveFromCart={hadleRemoveFromCart}
                        
                    />)
                }
            </div>
            <div>
                <OrderSummary 
                    cart={savedCart}
                    handleClearCart={handleClearCart}
                />
            </div>
        </div>
    );
};

export default Orders;