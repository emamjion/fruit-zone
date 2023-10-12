import React, { useEffect, useState } from 'react';
import FruitProduct from './FruitProduct';
import Modal from '../../../components/Modal/Modal';
import { Link } from 'react-scroll';

const DealProduct = () => {
    const [products, setProducts] = useState([]);
    const [visibleFruits, setVisibleFruits] = useState(4);
    const [showAll, setShowAll] = useState(false);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const handleModal = () => {
        setShowModal(true);
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
                        Hello
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