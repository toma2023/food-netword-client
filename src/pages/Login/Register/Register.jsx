import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Header from '../../../Shared/Header/Header';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/'



    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const confirm = form.confirm.value;
        const password = form.password.value;
       

        setError('')
        if (password !== confirm) {
            setError('Your password did not match')
            return;
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return;
        }

        createUser(email, password)
            .then(res => {
                updateUser(name, photo)
                    .then(res => navigate(`${from}`), form.reset())
                    .catch(error => setError(error.message));
            })
            .catch(error => setError(error.message));

        
    }


    return (
        <div className='bg-base-100 mx-8 mt-5'>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-purple-800  mt-8 text-center text-5xl font-bold'>Register Now</h2>
                    <Form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" required />
                           
                            <p><small className='text-red-600'>{error}</small></p>  
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? <Link to="/login"><span className='text-purple-800  underline'>Login</span></Link> </p>
                        <p className='text-error'>{error}</p>
                    </Form>
                </div>

            </div>

        </div>
    );
};

export default Register;