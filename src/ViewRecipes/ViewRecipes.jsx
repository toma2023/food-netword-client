import React, { useContext, useState } from 'react';
import Header from '../Shared/Header/Header';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Footer from '../Shared/Footer/Footer';

const ViewRecipes = () => {
    const recipeDetails = useLoaderData()
    const { chefPicture, chefName, description, likes, numberOfRecipes, yearsOfExperience, recipe_1, recipe_2, recipe_3, image_1, image_2, image_3, ingredients_1, ingredients_2, ingredients_3, cookingMethod_1, cookingMethod_2, cookingMethod_3, rating_1, rating_2, rating_3 } = recipeDetails;

    const notify = (e) => {
        toast("Added to favorite!");
        e.target.disabled = true;
    }


    return (
        <div className='bg-base-100 mx-32 mt-10 my-28'>
            <Header></Header>
            <h2 className='text-5xl font-bold text-center'>Chef Recipes</h2>
            <div className='my-10'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <LazyLoadImage
                            alt={''}
                            effect="blur" className="max-w-sm rounded-lg shadow-2xl"
                            src={chefPicture} />

                        <div>
                            <h1 className="text-5xl font-bold">{chefName}</h1>

                            <p className="py-6 text-black">{description}</p>
                            <p className='mb-3 flex align-items-center'>{likes}k <span className='ms-2'><FaThumbsUp></FaThumbsUp></span> </p>
                            <p className='text-xl mb-3'>Number of Recipes: {numberOfRecipes}</p>
                            <p className='text-xl mb-3'>Year of Experience: {yearsOfExperience}</p>
                            <button className="btn btn-outlined">Hire Me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-12 grid md:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image_1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {recipe_1}

                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold'>Ingredients:</p>
                        {
                            ingredients_1?.map(int => <li>{int}</li>)
                        }
                        <p>{cookingMethod_1}</p>
                        <div className='flex-grow-1 flex align-items-center'>
                            <Rating
                                style={{ maxWidth: 140 }}
                                value={Math.round(rating_1 || 0)}
                                readOnly />
                            <span className='ms-2'> {rating_1}</span>
                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={notify} className='btn btn-success'>Favorite</button>

                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image_2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {recipe_2}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold'>Ingredients:</p>
                        {
                            ingredients_2.map(int => <li>{int}</li>)
                        }
                        <p>{cookingMethod_2}</p>
                        <div className='flex-grow-1 flex align-items-center'>
                            <Rating
                                style={{ maxWidth: 140 }}
                                value={Math.round(rating_2 || 0)}
                                readOnly />
                            <span className='ms-2'> {rating_2}</span>
                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={notify} className='btn btn-success'>Favorite</button>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image_3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {recipe_3}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold'>Ingredients:</p>
                        {
                            ingredients_3.map(int => <li>{int}</li>)
                        }
                        <p>{cookingMethod_3}</p>
                        <div className='flex-grow-1 flex align-items-center'>
                            <Rating
                                style={{ maxWidth: 140 }}
                                value={Math.round(rating_3 || 0)}
                                readOnly />
                            <span className='ms-2'> {rating_3}</span>
                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={notify} className='btn btn-success'>Favorite</button>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewRecipes;