import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
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
                if (res.status === 403) {
                    toast.error(res.statusText + ' Access')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully added ${email} as Admin`)
                    refetch()
                }
            })
    }

    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#F2CA73',
            cancelButtonColor: '#EE4B2B',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users?email=${email}`, {
                    method: 'DELETE',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(() => refetch())
                Swal.fire(
                    'Deleted!',
                    `User: ${email} has been deleted`,
                    'success'
                )
            }
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