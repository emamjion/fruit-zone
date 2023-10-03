import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const DealProduct = () => {
    const [products, setProducts] = useState([]);
    const [visibleFruits, setVisibleFruits] = useState(4);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    return (
        <div className='px-6 md:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    products.slice(0,showAll ? products.length : visibleFruits).map(product => <div    
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
                            <p className='mb-6'>
                                <Rating
                                    style={{ maxWidth: 140 }}
                                    value={product.rating}
                                    readOnly
                                    className='mx-auto'
                                />
                            </p>
                            <div>
                                <Link
                                    className='text-[#F85559] font-medium cursor-pointer'
                                >Details</Link>
                            </div>
                        </div>
                    </div>
                    </div>)
                }
            </div>
            {
                showAll ? (<div className='mt-12 text-center'>
                <button onClick={() => setShowAll(!showAll)} className='px-3 py-2 md:px-6 md:py-3 text-white bg-[#F85559] rounded-md '>Shop Less</button>
            </div>) : (
                <div className='mt-12 text-center'>
                <button onClick={() => setShowAll(!showAll)} className='px-3 py-2 md:px-6 md:py-3 text-white bg-[#F85559] rounded-md '>Shop All</button>
            </div>
            )
            }
        </div>
    );
};

export default DealProduct;