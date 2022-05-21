import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {

    const [user] = useAuthState(auth)

    const [admin] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile mt-16">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center ">
                <h1 className='text-2xl mb-2 font-bold text-accent'>Welcome to Dashboard</h1>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Appintments</Link></li>
                    <li><Link to='/dashboard/myreview'>My Reviews</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/allusers'>All Users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                        <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;