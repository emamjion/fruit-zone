import React from 'react';

const DealTimePart = () => {
    return (
        <div className='md:flex items-center justify-between text-center md:text-start px-6 md:px-0'>
            <div className='mb-6 md:mb-0'>
                <h1 className='text-3xl font-semibold'>Deal of the day</h1>
                <p className='mt-3 text-sm text-[#757575]'>
                    Contrary to popular belief, is not simply random text. It has roots in a piece of classical <br /> Latin literature from 45 BC, making it over 2000 years old.
                </p>
            </div>
            <div className='flex items-center gap-4 md:gap-10'>
                <div className='text-center'>
                    <h4>29</h4>
                    <p>Days</p>
                </div>
                <div>
                    <span>:</span>
                </div>
                <div className='text-center'>
                    <h4>15</h4>
                    <p>Hours</p>
                </div>
                <div>
                    <span>:</span>
                </div>
                <div className='text-center'>
                    <h4>25</h4>
                    <p>Minutes</p>
                </div>
                <div>
                    <span>:</span>
                </div>
                <div className='text-center'>
                    <h4>08</h4>
                    <p>Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default DealTimePart;