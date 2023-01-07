import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Authentication/Authentication';
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

    console.log(mytemplate);

    return (
        <MyThemeSection>
            {
                mytemplate?.map(template => <MyTemplateCard key={template._id} template={template} refetch={refetch} />)
            }
        </MyThemeSection>
    );
};

export default MyTempLates;