import React, { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';
import ReviewCard from './ReviewCard';


const Review = () => {
    const { chefAllData } = useContext(AuthContext)


    return (
        <div>
            <h2 className='text-6xl font-bold text-center mb-16'>Our Clients Review</h2>
            <div className='grid gap-8 mb-16 lg:grid-cols-3 sm:grid-cols-2'>
                {
                    chefAllData.map(chefData => <ReviewCard
                        key={chefData.id}
                        chefData={chefData}
                    ></ReviewCard>)

                }
            </div>





        </div>
    );
};

export default Review;