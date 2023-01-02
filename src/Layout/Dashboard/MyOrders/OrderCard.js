import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import axios from 'axios';

export default function OrderCard({ order, refetch }) {
    const {
        booking_id,
        userEmail,
        title,
        thumb,
        price,
        live_preview
    } = order;

    const handleDeleteOrder = () => {
        axios.delete(`http://localhost:5000/deleteorder/${booking_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('theme-token')}`
            }
        })
        .then(res => {
            refetch()
            console.log(res.data);
        })
    }

    return (
        <Card sx={{ maxWidth: 345, maxHeight: 420 }}>
            <CardMedia
                component="img"
                alt={title}
                height="250"
                image={thumb}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ color: 'red' }} as='a' href={live_preview} target='_blank' >
                    Live Preview
                </Typography>
                <Button sx={{ marginBottom: '7px' }} fullWidth variant='contained' onClick={handleDeleteOrder} >Cancel</Button>
                <Button fullWidth variant='contained' >Payment</Button>
            </CardContent>
        </Card>
    );
}