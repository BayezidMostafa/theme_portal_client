import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Products = () => {

    const {data: themes = [], isLoading} = useQuery({
        queryKey: ['themes'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/themes')
            return res.data
        }
    })

    console.log(themes);

    return (
        <div>
            
        </div>
    );
};

export default Products;