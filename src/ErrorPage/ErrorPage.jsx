import React from 'react';
import { Link } from 'react-router-dom';
import {  FaArrowLeft  } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='grid justify-center items-center  '>
         <h2 className=' mt-20  mx-32 text-5xl font-bold'>Error!</h2> <br />
        
          <img className='w-96 h-96 text-center rounded-md mb-8' src="https://media.istockphoto.com/id/1153372686/photo/404-error-page-not-found.jpg?s=2048x2048&w=is&k=20&c=CB0Jc82QCilxmzAfKYJB2PYkancntYVj4Kk1-LdMctY=" alt="" />
          <div>
          <Link to="/">  <button className='text-center mb-20 mx-52 btn btn-outlined'><span className='text-white mr-2'> <FaArrowLeft></FaArrowLeft></span>   Go Back To Home</button></Link>
          </div>
        
        </div>
    );
};

export default ErrorPage;