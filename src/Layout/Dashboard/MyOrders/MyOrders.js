import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Authentication/Authentication';
import { OrderSectionContainer } from './MyOrdersStyle';
import OrderCard from './OrderCard';

const MyOrders = () => {

    const { user } = useContext(AuthContext);
    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/orders/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('theme-token')}`
                }
            })
            return res.data;
        }
    })
    console.log(orders);
    return (
        <OrderSectionContainer>
            {
                orders?.map(order => <OrderCard key={order._id} order={order} refetch={refetch} />)
            }
        </OrderSectionContainer>
    );
};

export default MyOrders;