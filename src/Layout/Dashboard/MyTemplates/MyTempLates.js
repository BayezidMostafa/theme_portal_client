import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../../Context/Authentication/Authentication';
import { LoaderFull } from '../../../Styles/Index';
import MyTemplateCard from './MyTemplateCard';
import { MyThemeSection } from './MyTempLatesStyles';

const MyTempLates = () => {

    const { user } = useContext(AuthContext);

    const { data: mytemplate = [], isLoading, refetch } = useQuery({
        queryKey: ['mytemplate'],
        queryFn: async () => {
            const res = await axios.get(`https://theme-portal-server.vercel.app/devtheme/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('theme-token')}`
                }
            })
            return res.data;
        }
    })

    if (isLoading) {
        return (
            <LoaderFull>
                <SyncLoader color="#2e5248" />
            </LoaderFull>
        )
    }

    return (
        <MyThemeSection>
            {
                mytemplate?.map(template => <MyTemplateCard key={template._id} template={template} refetch={refetch} />)
            }
        </MyThemeSection>
    );
};

export default MyTempLates;