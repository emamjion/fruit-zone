import React from 'react';
import { GrClose } from 'react-icons/gr';

const Modal = ({ isVisible, onClose, children }) => {
    if(!isVisible) return null;
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    
    return (
        <div 
            className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center'
            id='wrapper'
            onClick={handleClose}
        >
            <div 
                className='w-[600px] flex flex-col'
                
            >
                {/* <button 
                    className='text-white text-xl place-self-end mb-1'
                    onClick={() => onClose()}
                >
                    <span className=''> < GrClose /> </span>
                </button> */}
                <div className='bg-white p-3 rounded'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;