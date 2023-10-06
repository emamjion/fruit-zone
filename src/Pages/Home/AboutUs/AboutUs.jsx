import React from 'react';
import aboutUs from '../../../assets/images/aboutUs/aboutUs.jpg'

const AboutUs = () => {
    return (
        <div className='md:my-24 md:flex items-center gap-6'>
            <div className='w-full md:w-1/2 px-4 md:px-0'>
                <img src={aboutUs} className='rounded-lg'  />   
            </div>
            <div className='w-full md:w-1/2 mt-6 md:mt-0'>
                <h4 className='font-semibold text-xl bg-[#F85559] w-28 text-center p-1 text-white rounded mx-4 md:mx-0'>About Us</h4>
                <h1 className='text-3xl font-medium mt-6 px-4 md:px-0'>Fruits of the Earth, From Us to You.</h1>
                <div className='mt-8 space-y-3 px-4 md:px-0'>
                    <p className='text-[#757575]'>
                        Welcome to Fruit Zone, your neighborhood haven for all things fruity and delicious. Nestled in the heart of Dhaka, Bangladesh, our fruit shop is a vibrant oasis where the natural flavors of the world come together.
                    </p>
                    <p className='text-[#757575]'>
                        Step inside and breathe in the refreshing aroma of ripe, sun-kissed fruits. Our mission is simple: to provide you with the freshest, highest quality fruits that nature has to offer. From the juiciest oranges to the crunchiest apples, we source our produce directly from local farms and around the globe to ensure you get nothing but the best.
                    </p>
                    <p className='text-[#757575]'>
                        Our fruit shop is a colorful symphony of tastes and textures. Whether you're looking for a quick snack, a nutritious addition to your meals, or ingredients for your next culinary masterpiece, you'll find it here. We take pride in offering a diverse selection of seasonal fruits, exotic delights, and the classics you know and love.
                    </p>
                    <p className='text-[#757575]'>
                        At Fruit Zone, we believe that every bite should be a delightful experience. That's why our dedicated team is here to help you make the perfect choice, whether you're picking out a gift basket, planning a healthy diet, or exploring new flavors. We're committed to delivering a personalized, friendly, and knowledgeable service that makes your visit a joy.
                    </p>
                    <p className='text-[#757575]'>
                        So, come on down to Fruit Zone and experience the joy of fresh, flavorful fruits. Whether you're a seasoned fruit lover or just starting to explore the world of fruits, we're here to make your visit memorable. Taste the difference, embrace the freshness, and savor the goodness of nature, one bite at a time. We look forward to serving you soon!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;