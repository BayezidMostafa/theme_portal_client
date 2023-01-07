import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Authentication/Authentication';
import { OrderSectionContainer } from '../MyOrders/MyOrdersStyle';
import WishlistCard from './WishlistCard';

const WishList = () => {
    const { user } = useContext(AuthContext);
    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await axios.get(`https://theme-portal-server.vercel.app/wishlists/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('theme-token')}`
                }
            })
            return res.data;
        }
    })

    return (
        <OrderSectionContainer>
            {
                wishlist?.map(wish => <WishlistCard key={wish._id} wish={wish} refetch={refetch} />)
            }
        </OrderSectionContainer>
    );
};

export default WishList;