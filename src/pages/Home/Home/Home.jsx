import React, { useContext } from 'react';
import ChefCard from '../../../chefCard/ChefCard';
import Banner from '../../../banner/Banner';
import { AuthContext } from '../../../providers/AuthProvider';
import Items from '../../../Items/Items';


const Home = () => {
    const { chefAllData } = useContext(AuthContext);
   

    return (

        <div>
            <Banner></Banner>
            <div className='bg-base-100 mx-32 my-20'>
                <h1 className='text-6xl font-bold text-center mb-16'>Popular Menu</h1>
                <Items></Items>
                <h1 className='text-6xl font-bold text-center'>Our's Qualified chefs</h1>
                <div className='grid mx-auto md:grid-cols-3 space-x-0 mt-8 space-y-16'>
                    {
                        chefAllData.map(chefData => <ChefCard
                            key={chefData.id}
                            chefData={chefData}
                        >

                        </ChefCard>

                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;