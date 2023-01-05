import { Button } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { toast } from 'react-hot-toast';
import { ShowCaseCardSection } from '../../../Pages/Home/ThemeShowCase/ShowCaseCardStyle';

export default function MyTemplateCard({ template, refetch }) {
    console.log(template);
    const { thumb, _id, live_preview } = template;
    console.log(_id);
    const handleDelete = () => {
        const confirmation = window.confirm('Do you want to delete your theme?')
        if(confirmation){
            axios.delete(`http://localhost:5000/deletemytheme/${_id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('theme-token')}`
                }
            })
            .then(res => {
                refetch();
                console.log(res.data);
                toast.success('Deleted Successfully')
            })
            .catch(err => {
                console.error(err.message);
            })
        }
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