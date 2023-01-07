import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../../Context/Authentication/Authentication';
import { LoaderFull } from '../../../Styles/Index';
import { OrderSectionContainer } from '../MyOrders/MyOrdersStyle';
import WishlistCard from './WishlistCard';

const WishList = () => {
    const { user } = useContext(AuthContext);
    const { data: wishlist = [], refetch, isLoading } = useQuery({
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

    if(isLoading){
        return(
            <LoaderFull>
                <SyncLoader color="#2e5248" />
            </LoaderFull>
        )
    }

    return (
        <OrderSectionContainer>
            {
                wishlist?.map(wish => <WishlistCard key={wish._id} wish={wish} refetch={refetch} />)
            }
        </OrderSectionContainer>
    );
};

export default WishList;