import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Header from '../../../Shared/Header/Header';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const Login = () => {
    const { signIn, auth, signInGoogle, signInGithub } = useContext(AuthContext);
   
    const navigate = useNavigate();
    const location = useLocation()
   
    const from = location.state?.from?.pathname || '/'
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');



    const handleGoogleSignIn = () => {

        signInGoogle()
        .then(result => {
            const loggedInUser = result.user;
            navigate(from, { replace: true })
            
            setUser(loggedInUser)
        })
        .catch(error => {
            setError( error.message)
        })

    }

    const handleGithubSignIn = () => {
        signInGithub()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, { replace: true })
         
            setUser(loggedUser);
        })
        .catch(error => {
            setError(error.message)
        })

    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
            
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError( "password dose n't match")
            })
          


    }



    return (
        <div className='bg-base-100 mx-8 mt-5'>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-purple-800  mt-8 text-center text-5xl font-bold'>Login Now</h2>
                    <Form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                         <p><small className='text-red-600 '>{error}</small></p>   
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Don't have an account? <Link to="/register"><span className='text-purple-800  underline'>Register</span></Link> </p>
                        <p className='text-lg'>Sign in with:</p>
                        <div className='flex mx-auto gap-3 text-center'>
                            <div className="form-control mt-6 ">
                                <button onClick={handleGoogleSignIn} className="btn btn-primary "> <span><FaGoogle></FaGoogle></span> </button>
                            </div>
                            <div className="form-control mt-6 ">
                                <button onClick={handleGithubSignIn} className="btn btn-primary "><span><FaGithub></FaGithub></span> </button>
                            </div>
                        </div>
                    </Form>

                </div>

            </div>

        </div>
    );
};

export default Login;