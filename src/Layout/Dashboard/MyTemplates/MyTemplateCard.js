import { Button } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { toast } from 'react-hot-toast';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../../Context/Authentication/Authentication';
import { ShowCaseCardSection } from '../../../Pages/Home/ThemeShowCase/ShowCaseCardStyle';
import { LoaderFull } from '../../../Styles/Index';

export default function MyTemplateCard({ template, refetch }) {
    const {loading, setLoading} = React.useContext(AuthContext)
    console.log(template);
    const { thumb, _id, live_preview } = template;
    console.log(_id);
    const handleDelete = () => {
        setLoading(true)
        const confirmation = window.confirm('Do you want to delete your theme?')
        if(confirmation){
            axios.delete(`https://theme-portal-server.vercel.app/deletemytheme/${_id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('theme-token')}`
                }
            })
            .then(res => {
                refetch();
                setLoading(false)
                console.log(res.data);
                toast.success('Deleted Successfully')
            })
            .catch(err => {
                setLoading(false)
                console.error(err.message);
            })
        }
    }

    if(loading){
        return(
            <LoaderFull>
                <SyncLoader color="#2e5248" />
            </LoaderFull>
        )
    }

    return (
        <ShowCaseCardSection>
            <img src={thumb} alt="" />
            <div>
                <Button as="a" href={live_preview} target="_blanc" sx={{marginRight: '10px' }} variant='contained' color='success'>Live</Button>
                <Button onClick={handleDelete} variant='contained' color='success'>Delete</Button>
            </div>
        </ShowCaseCardSection>
    );
}