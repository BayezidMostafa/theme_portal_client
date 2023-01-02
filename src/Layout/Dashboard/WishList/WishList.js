import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Authentication/Authentication';
import { OrderSectionContainer } from '../MyOrders/MyOrdersStyle';
import WishlistCard from './WishlistCard';

const WishList = () => {
    const { user } = useContext(AuthContext);
    const { data: wishlist = [] } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/wishlists/${user?.email}`, {
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


                wishlist?.map(wish => <WishlistCard key={wish._id} wish={wish} />)


            }
        </OrderSectionContainer>
    );
};

export default WishList;