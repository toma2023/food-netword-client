import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const ChefCard = ({ chefData }) => {

    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chefData;

    return (
        <div>
                <section>
                    <div className="card card-compact w-96 bg-base-100  shadow-xl">
                        <figure><LazyLoadImage
                            alt={''}
                            effect="blur" className="max-w-sm rounded-lg shadow-2xl"
                            src={chefPicture} /></figure>

                        <div className="card-body">
                            <h2 className="card-title text-2xl font-semibold">{chefName}</h2>
                            <p className='text-lg mb-0'>Year of Experience : {yearsOfExperience}</p>
                            <p className='text-lg mt-0'>Number of Recipes : {numberOfRecipes}</p>
                            <p className='flex'>{likes} <span className='ms-2'><FaThumbsUp></FaThumbsUp></span> </p>
                            <div className="card-actions justify-end">
                                <Link to={`showRecipe/${id}`}><button className="btn btn-primary">View Recipes</button></Link>

                            </div>
                        </div>
                    </div>
                </section>
        </div>
        
    );
};

export default ChefCard;