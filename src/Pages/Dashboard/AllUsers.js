import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('allUsers', () => fetch(`https://doctors-portal-server-by-saad.herokuapp.com/users`, {
        method: "GET",
        headers: {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )

    if (isLoading) return <Loading></Loading>

    return (
        <div className="overflow-x-auto w-full">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Make Admin</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) =>
                            <UserRow key={user._id} user={user} index={index} refetch={refetch}></UserRow>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;