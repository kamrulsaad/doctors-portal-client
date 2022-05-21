import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {

    const { data: doctors, isLoading, refetch} = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )

    if (isLoading) return <Loading></Loading>

    return (
        <div className='w-full'>
            <p className="text-2xl font-medium text-center">All Doctors</p>
            <div class="overflow-x-auto w-full">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Favorite Color</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow key={index} index={index} doctor={doctor} refetch={refetch}></DoctorRow>)
                        }
                    </tbody>   
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;