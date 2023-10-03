import React from 'react';
import DealTimePart from './DealTimePart';
import DealProduct from './DealProduct';

const DealOfTheDay = () => {
    return (
        <div className='mt-[140px]'>
            <div className=''>
                <DealTimePart/>
            </div>
            <div className='mt-12'>
                <DealProduct/>
            </div>
        </div>
    );
};

export default DealOfTheDay;