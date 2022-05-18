import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UserRow = ({ user, index, refetch }) => {

    const [loggedInUser] = useAuthState(auth)

    const { email, role } = user

    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error(res.statusText + ' Access')
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success(`Successfully added ${email} as Admin`)
                refetch()
            }
        })
    }

    const handleDelete = () => {
        fetch(`http://localhost:5000/users?email=${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            toast.success(`Successfully deleted ${email}`)
            refetch()
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><button className={`btn btn-sm ${role ? 'btn-warning' : 'btn-secondary'}`}>{role || 'Member'}</button></td>
            <td>
                {role !== 'Admin' && <button onClick={handleMakeAdmin} className='btn btn-xs mr-4'>Make Admin</button>}
            </td>
            <td>{
                loggedInUser?.email !== email && <button onClick={handleDelete} className='btn btn-xs btn-error'>Remove User</button>
                }</td>
        </tr>
    );
};

export default UserRow;