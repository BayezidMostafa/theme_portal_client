import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Products = () => {

    const {data: themes = [], isLoading} = useQuery({
        queryKey: ['themes'],
        queryFn: async() => {
            const res = await fetch('https://theme-portal-server.vercel.app/themes')
            return res.data
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default Products;