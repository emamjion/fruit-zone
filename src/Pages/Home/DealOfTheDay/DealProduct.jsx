import React, { useEffect, useState } from 'react';
import FruitProduct from './FruitProduct';
import Modal from '../../../components/Modal/Modal';
import { Rating } from '@smastrom/react-rating';

const DealProduct = () => {
    const [products, setProducts] = useState([]);
    const [visibleFruits, setVisibleFruits] = useState(4);
    const [singleProduct, setSingleProduct] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const handleModal = (id) => {
        setShowModal(true);
        const specficProduct = products.find(pd => pd.id === id);
        setSingleProduct(specficProduct);
    }
    
    return (
        <div className='px-6 md:px-0'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        products.slice(0,showAll ? products.length : visibleFruits).map(product => <FruitProduct
                            key={product.id}
                            product={product}
                            showAll={showAll}
                            visibleFruits={visibleFruits}
                            handleModal={handleModal}
                        />)
                    }
                </div>
                <div>
                    {/* TODO:  */}
                    <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                        <div className='text-center p-6 md:p-12'>
                            <img src={singleProduct.image} className='mx-auto' />
                            <div className='mt-6'>
                                <h1 className='text-3xl font-semibold mb-5'>{singleProduct.name}</h1>
                                <p className='text-sm text-[#757575]'>{singleProduct.productDes}</p>
                                <div className='mt-5'>
                                    <Rating
                                        style={{ maxWidth: 140 }}
                                        value={singleProduct.rating}
                                        readOnly
                                        className='mx-auto'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <button className='px-3 py-2 md:px-5 md:py-2.5 text-[#F85559] font-medium border border-[#F85559] rounded-md ' onClick={() => setShowModal(!showModal)}>Close</button>
                                    <button className='ml-3 px-3 py-2 md:px-5 md:py-2.5 text-white bg-[#F85559] rounded-md '>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
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