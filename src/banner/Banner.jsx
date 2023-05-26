import React from 'react';
import Review from '../Review';

const Banner = () => {
    return (
        <div className='bg-base-100 mx-32 mt-5'>
            <div className='grid md:grid-cols-4 gap-8'>
                <div className='col-span-2'>
                    <h1 className='text-6xl font-bold'> Find Your Perfect Recipe on <span className='text-purple-800'>Food Network!</span></h1>
                    <p className=' text-base  mt-8 font-semibold'>Welcome to our chef recipe web page, where you can explore a vast collection of culinary creations from top chefs around the world. Our recipes are carefully curated and crafted to ensure that each dish is not only delicious, but also easy to make at home. From classic comfort food to exotic international cuisine, our diverse recipe collection has something to offer every palate. Whether you're a seasoned home cook or a beginner in the kitchen, our chef recipes will inspire you to create impressive and flavorful dishes that will delight your family and friends.</p>
                </div>
                <div className='col-span-2 '>
                    <img className='rounded' src="https://i.ibb.co/5G2s6SH/general-tso-chicken.webp" alt="general-tso-chicken" border="0" />

                </div>
            </div>

        </div>
    );
};

export default Banner;