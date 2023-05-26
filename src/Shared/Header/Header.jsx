import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';




const Header = () => {
    const { user, logOut } = useContext(AuthContext);

   
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (


        <div className=" navbar md:max-w-full  my-6 text-lg text-black font-bold ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <NavLink
                        tabIndex={0}
                        className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li tabIndex={0}>
                            <Link to='/blog'>Blog </Link>
                        </li>
                       
                        
                    </NavLink>
                </div>
                <Link to='/'><span className='text-purple-800 btn btn-ghost normal-case md:text-2xl'> Food Network</span></Link>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <NavLink className="menu menu-horizontal px-1">
                    <li className='text-gray-900'>
                        <Link to="/">Home</Link>
                    </li>
                    <li tabIndex={0}>
                        <Link to="/blog">
                            <p className='text-gray-900'>Blog</p>
                        </Link>
                    </li>
                    
                    
                </NavLink>
            </div>
            <div className="navbar-end">
                    {
                         user ? <NavLink onClick={handleLogOut} className={"btn"} to="/">LogOut</NavLink> :
                            <NavLink className={"btn"} to="/login">Login</NavLink>
                    }


                    <label className="btn btn-ghost btn-circle avatar">
                        {user && (
                           <div className="w-24 rounded-full">
                                <img src={user.photoURL} title={user.displayName} />
                               <h2 className={`hover:${user.email}`}>
                                   {user.email}
                               </h2>
                            </div>
                        )}
                     </label>

                 </div>
    
                 </div>



        
    );
};

export default Header;
/**
 * 
i.ibb.co
 * 
 * 
 * 
 * 
 * 
*/