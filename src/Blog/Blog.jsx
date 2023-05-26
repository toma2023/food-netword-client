import React from 'react';
import Header from '../Shared/Header/Header';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfGenerator from './pdfGenerator';
import Footer from '../Shared/Footer/Footer';
import {  FaArrowRight } from 'react-icons/fa';

const Blog = () => {
    return (
        <div className='bg-base-100 mx-36 mt-5'>
            <Header></Header>


            <h3 className='text-xl font-semibold mt-6'> 1. Tell us the differences between uncontrolled and controlled components.</h3>
            <p className='my-3 text-lg'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>

            <h3 className='text-xl font-semibold'> 2. How to validate React props using PropTypes </h3>
            <p className='my-3 text-lg'>Below are the validators for the basic data types: <br />
                <br /> <span>i. PropTypes.any: The prop can be of any data type</span>
                <br /> <span>ii. PropTypes.bool: The prop should be a Boolean</span>
                <br /> <span>iii.  PropTypes.number: The prop should be a number</span>
                <br /> <span>iv.  PropTypes.string: The prop should be a string</span>
                <br /> <span>v. PropTypes.func: The prop should be a function</span>
                <br /> <span>vi. PropTypes.array: The prop should be an array</span>
                <br /> <span>vii.   PropTypes.object: The prop should be an object</span>
                <br />  <span>viii.  PropTypes.symbol: The prop should be a symbol</span>
            </p>

            <h3 className='text-xl font-semibold'>3. Tell us the difference between nodejs and express js.</h3>
            <p className='my-3 text-lg'>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
            <h3 className='text-xl font-semibold'>4. What is a custom hook, and why will you create a custom hook?</h3>
            <p className='my-3 text-lg mb-10'>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
            <h3 className='text-xl font-semibold mb-3 flex items-center mr-2'><span className='text-purple-800'><FaArrowRight></FaArrowRight></span> When you click on that button, it will create a pdf and will be downloaded: </h3>
            <div className='text-center'>
                <PDFDownloadLink
                    document={<PdfGenerator></PdfGenerator>}
                    fileName='blog.pdf'
                    className='bg-blue-500  py-2 px-4 rounded-md text-white '
                >
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "PDF Generator"
                    }
                </PDFDownloadLink>
            </div>

            <Footer></Footer>
        </div>


    );
};

export default Blog;