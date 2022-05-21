import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor, index, refetch}) => {

    const {img, name, email, specialty, location} = doctor

    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) toast.success(`Successfully deleted ${name}`)
            refetch()
        })
    }

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name}</div>
                        <div class="text-sm opacity-50">{location ? location : 'United States'}</div>
                    </div>
                </div>
            </td>
            <td>
                <span class="badge badge-accent badge-md">{specialty}</span>
            </td>
            <td>{email}</td>
            <th>
                <button onClick={handleDelete} class="btn btn-error btn-xs">Remove</button>
            </th>
        </tr>
    );
};

export default DoctorRow;