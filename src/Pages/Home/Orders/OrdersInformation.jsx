import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const OrdersInformation = ({product, hadleRemoveFromCart}) => {
    return (
        <div className='flex items-center justify-between border w-[570px] mx-auto p-4 mb-4'>
            <div className='flex items-center gap-5'>
                <img src={product.image} />
                <div>
                    <h1 className='text-[#F85559]'>{product.name}</h1>
                    <p className='my-1 text-[#757575]'>Price: $<span className='font-medium text-[#151515]'>{product.maxPrice}</span></p>
                    <p className='text-[#757575]'>Order Quantity: <span>{product.quantity}</span></p>
                </div>
            </div>
            <div>
                <span onClick={() => hadleRemoveFromCart(product.id)} className='w-12 h-12 flex items-center justify-center rounded-full text-xl cursor-pointer bg-red-200 text-[#f85559]'> < FaTrashAlt /> </span>
            </div>
        </div>
    );
};

export default OrdersInformation;