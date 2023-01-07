import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import RequestCard from './RequestCard';
import { VerifySection } from './VerifyRequestStyles';

const VerifyRequest = () => {

    const {data: requested = [], refetch } = useQuery({
        queryKey: ['requested'],
        queryFn: async () => {
            const res = await axios.get('https://theme-portal-server.vercel.app/requested', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('theme-token')}`
                }
            })
            return res.data;
        }
    })

    console.log(requested);

    return (
        <VerifySection>
            {
                requested.map(request => <RequestCard key={request._id} request={request} refetch={refetch} />)
                
            }
        </VerifySection>
    );
};

export default VerifyRequest;