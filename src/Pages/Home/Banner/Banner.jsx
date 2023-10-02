import React from 'react';
import banner1 from '../../../assets/images/banner/banner1.png';
import banner2 from '../../../assets/images/banner/banner2.png';
import banner3 from '../../../assets/images/banner/banner3.png';
import banner4 from '../../../assets/images/banner/banner4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import fruit1 from '../../../assets/images/fruits/fruit1.png';
import fruit2 from '../../../assets/images/fruits/fruit2.png';
import fruit3 from '../../../assets/images/fruits/fruit3.png';
import fruit4 from '../../../assets/images/fruits/fruit4.png';
import fruit5 from '../../../assets/images/fruits/fruit5.png';

const Banner = () => {
    return (
        <div className='my-8'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full relative">
                <SwiperSlide className='relative'>
                    <img src={banner1} className='w-full' />
                    <div className='flex items-center justify-center flex-col absolute top-0 left-0 bottom-0 right-0 z-10 bg-[rgba(0,0,0,0.35)] overflow-hidden rounded-md text-center'>
                        <h1 className='font-medium text-xl md:text-6xl text-white mt-5 md:mt-0'>Exotic tastes at your <br /> doorstep</h1>
                        <p className='md:mt-4 mb-3 md:mb-8 text-white text-xs md:text-lg'>We supply highly quality organic products</p>
                        <div className='pb-8 md:pb-0'>
                            <button className='px-3 py-2 md:px-6 md:py-3 text-white bg-[#F85559] rounded-md '>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} className='w-full' />
                    <div className='flex items-center justify-center flex-col absolute top-0 left-0 bottom-0 right-0 z-10 bg-[rgba(0,0,0,0.35)] overflow-hidden rounded-md text-center '>
                        <h1 className='font-medium text-xl md:text-6xl text-white mt-5 md:mt-0'>Exotic tastes at your <br /> doorstep</h1>
                        <p className='md:mt-4 mb-3 md:mb-8 text-white text-xs md:text-lg'>We supply highly quality organic products</p>
                        <div className='pb-8 md:pb-0'>
                            <button className='px-3 py-2 md:px-6 md:py-3 text-white bg-[#F85559] rounded-md '>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} className='w-full' />
                    <div className='flex items-center justify-center flex-col absolute top-0 left-0 bottom-0 right-0 z-10 bg-[rgba(0,0,0,0.35)] overflow-hidden rounded-md text-center'>
                        <h1 className='font-medium text-xl md:text-6xl text-white mt-5 md:mt-0'>Exotic tastes at your <br /> doorstep</h1>
                        <p className='md:mt-4 mb-3 md:mb-8 text-white text-xs md:text-lg'>We supply highly quality organic products</p>
                        <div className='pb-8 md:pb-0'>
                            <button className='px-3 py-2 md:px-6 md:py-3 text-white bg-[#F85559] rounded-md '>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner4} className='w-full' />
                    <div className='flex items-center justify-center flex-col absolute top-0 left-0 bottom-0 right-0 z-10 bg-[rgba(0,0,0,0.35)] overflow-hidden rounded-md text-center'>
                        <h1 className='font-medium text-xl md:text-6xl text-white mt-5 md:mt-0'>Exotic tastes at your <br /> doorstep</h1>
                        <p className='md:mt-4 mb-3 md:mb-8 text-white text-xs md:text-lg'>We supply highly quality organic products</p>
                        <div className='pb-8 md:pb-0'>
                            <button className='px-3 py-2 md:px-6 md:py-3 text-white bg-[#F85559] rounded-md '>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='md:absolute md:bottom-20 md:z-10 md:flex items-center justify-center gap-24 bg-white shadow-md rounded-lg md:w-[1196px] p-8 md:left-[18%] space-y-6 md:space-y-0'>
                <div className='text-center'>
                    <img src={fruit1} className='mx-auto md:mx-0' />
                    <h1 className='mt-2'>Grape</h1>
                </div>
                <div className='text-center'>
                    <img src={fruit2} className='mx-auto md:mx-0' />
                    <h1 className='mt-2'>Orange</h1>
                </div>
                <div className='text-center'>
                    <img src={fruit3}  className='mx-auto md:mx-0' />
                    <h1 className='mt-2'>Mango</h1>
                </div>
                <div className='text-center'>
                    <img src={fruit4} className='mx-auto md:mx-0' />
                    <h1 className='mt-2'>Strawberry</h1>
                </div>
                <div className='text-center'>
                    <img src={fruit5} className='mx-auto md:mx-0' />
                    <h1 className='mt-2'>Pomegranate</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;