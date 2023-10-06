import React from 'react';

const OrderSummary = ({cart}) => {
    let subTotal = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        subTotal =( parseFloat(subTotal) + parseFloat(product.maxPrice * product.quantity) ).toFixed(2);
        totalShipping = parseFloat(totalShipping)+ parseFloat(product.shipping * product.quantity);
        quantity = quantity + product.quantity;
    }
    const tax = parseFloat((subTotal*7)/100).toFixed(2);
    const discount = parseFloat((subTotal*12)/100).toFixed(2);
    const beforeTotal = parseFloat(subTotal) + parseFloat(tax) + parseFloat(totalShipping);
    const total = (parseFloat(beforeTotal) - parseFloat(discount)).toFixed(2);
    
    return (
        <div className='border p-4 sticky top-0 right-0'>
            <h1 className='text-xl font-semibold'>Order Summary</h1>
            <div>
                <div className='flex items-center justify-between mt-6'>
                    <h1 className='text-[#757575]'>Selected Product:</h1>
                    <p>{quantity}</p>
                </div>
                <hr className='my-2' />
                <div className='flex items-center justify-between mt-4'>
                    <h1 className='text-[#757575]'>Sub Total:</h1>
                    <p>$ <span>{subTotal}</span></p>
                </div>
                <hr className='my-2' />
                <div className='flex items-center justify-between mt-4'>
                    <h1 className='text-[#757575]'>Discount:</h1>
                    <p>$ <span>{discount}</span></p>
                </div>
                <hr className='my-2' />
                <div className='flex items-center justify-between mt-4'>
                    <h1 className='text-[#757575]'>Shipping Charge:</h1>
                    <p>$ <span>{totalShipping}</span></p>
                </div>
                <hr className='my-2' />
                <div className='flex items-center justify-between mt-4'>
                    <h1 className='text-[#757575]'>Estimated Tax:</h1>
                    <p>$ <span>{tax}</span></p>
                </div>
                <hr className='my-2' />
                <div className='flex items-center justify-between bg-[#f3f3f3] p-3'>
                    <h1 className=' text-[#F85559] font-medium'>Total:</h1>
                    <p>$ <span>{total}</span></p>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;