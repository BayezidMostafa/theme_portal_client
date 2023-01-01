import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const AllDevelopers = () => {

    const {data: developers = []} = useQuery({
        queryKey: ['developers'],
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('theme-token')}`
                }
            })
            return res.data;
        }
    })

    return (
        <div>
            this is all developer section
        </div>
    );
};

export default AllDevelopers;