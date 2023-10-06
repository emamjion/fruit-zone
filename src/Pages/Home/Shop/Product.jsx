import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Product = ({products, handleAddToCart}) => {
    return (
        <div className=''>
            <div className='md:text-center'>
                <h4 className='font-semibold text-xl bg-[#F85559] w-28 text-center p-1 text-white rounded mx-4 md:mx-auto'>Our Shop</h4>
                <h1 className='mt-4 font-medium text-3xl mx-4 md:mx-0'>We provide Fresh Fruits</h1>
                <p className='mt-4 text-[#757575] mx-4 md:mx-0'>
                    Our fruit shop is a colorful symphony of tastes and textures. Whether you're looking for a quick  snack, a nutritious addition to your <br /> meals, or ingredients for your next culinary masterpiece, you'll find it here. We take pride in offering a diverse <br /> selection of seasonal fruits, exotic delights, and the classics you know and love.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mx-4 md:mx-0'>
                {
                    products.map(product => (
                        <div 
                            className='border p-6 text-center relative'
                            key={product.id}
                        >
                            <img src={product.image} className='mx-auto my-4' />      
                            <div className='text-lg font-medium mb-6'>
                                <span className='ml-2'>${product.maxPrice}</span>
                            </div>
                            <hr className='md:w-60 mx-auto' />
                            <div className='mt-6'>
                                <h4 className='text-[#535353] mb-6'>{product.name}</h4>
                                <div className='mb-12'>
                                    <Rating
                                        style={{ maxWidth: 140 }}
                                        value={product.rating}
                                        readOnly
                                        className='mx-auto'
                                    />
                                </div>
                                <div className='absolute bottom-2 left-0 right-0'>
                                    <button onClick={() => handleAddToCart(product)} className='font-medium px-3 py-2 md:px-6 md:py-3 text-white bg-[#F85559] rounded-md hover:bg-transparent hover:text-[#f85559] hover:border duration-500 flex items-center gap-3 mx-auto'> <span>< FaShoppingCart /></span>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;