import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ReviewCard = ({ chefData }) => {
    const { clientName, clientImg, review,  rating } =  chefData 
    console.log(chefData)
    console.log(clientName, rating)

    return (
        <div>
            <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                <img
                    src={clientImg}
                    alt='book cover'
                    className='object-cover w-full h-56 md:h-64 xl:h-80'
                />

                <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                    <p className='text center md:text-5xl font-bold'>{clientName}</p>
                    <br />
                    <p className=''> {review}</p>
                    <div className='flex-grow-1 flex align-items-center'>
                            <Rating
                                style={{ maxWidth: 140 }}
                                value={Math.round(rating || 0)}
                                readOnly />
                            <span className='ms-2 mt-3'> {rating}</span>
                        </div>
                </div>
            </div>



        </div>
    );
};

export default ReviewCard;