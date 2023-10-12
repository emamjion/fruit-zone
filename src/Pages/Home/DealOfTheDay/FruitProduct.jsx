import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';

const FruitProduct = ({product, showAll, visibleFruits, handleModal}) => {
    return (
        <div    
            key={product.id}
            className={`border p-6 text-center ${showAll && 'transition-all ease-in-out duration-300'}`}
        >
            <div>
                <img src={product.image} className='mx-auto my-10' />
                <div className='text-2xl font-medium mb-6'>
                    <span className='mr-2'>${product.minPrice}</span> - <span className='ml-2'>${product.maxPrice}</span>
                </div>
                <hr className='w-60 mx-auto' />
                <div className='mt-6'>
                    <h4 className='text-[#535353] mb-6'>{product.name}</h4>
                    <div className='mb-6'>
                        <Rating
                            style={{ maxWidth: 140 }}
                            value={product.rating}
                            readOnly
                            className='mx-auto'
                        />
                    </div>
                    <div>
                        <Link to={`product/${product.id}`}>
                            <button
                                className='text-[#F85559] font-medium cursor-pointer'
                                onClick={() => handleModal(true)}
                            >Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FruitProduct;