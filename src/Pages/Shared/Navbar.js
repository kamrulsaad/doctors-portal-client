import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth) 

    const menuItems = <> 
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/appointment'>Appointment</NavLink></li>
    <li><NavLink to='/reviews'>Reviews</NavLink></li>
    <li><NavLink to='/contact'>Contact Us</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    <li>{user ? <button onClick={() => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }} className='btn btn-ghost'>Sign Out</button> :<NavLink to='/login'>Login</NavLink>}</li>
    </>

    return (
        <div className="navbar fixed top-0 z-50 bg-base-100 lg:px-10">
            <div className="navbar-start w-full lg:w-auto">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
                <label htmlFor="my-drawer-2" className="btn btn-primary ml-auto drawer-button text-base-100 lg:hidden">Open Dashboard</label>
            </div>
            <div className="navbar-end hidden lg:flex lg:flex-1">
                <ul className="menu menu-horizontal gap-x-2 p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;