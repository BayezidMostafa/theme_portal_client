import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function OrderCard({ order, refetch }) {
    const {
        booking_id,
        userEmail,
        title,
        thumb,
        price,
        live_preview,
        paid
    } = order;

    const handleDeleteOrder = () => {
        axios.delete(`https://theme-portal-server.vercel.app/deleteorder/${booking_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('theme-token')}`
            }
        })
            .then(res => {
                if (res.data.acknowledged) {
                    refetch()
                    toast.success('Order Canceled')
                }
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
                {
                    !paid ? <Box as={Link} to={`/dashboard/payment/${booking_id}`} ><Button fullWidth variant='contained' >Payment</Button></Box>
                        :
                        <Button disabled fullWidth variant='contained' >Paid</Button>
                }

            </CardContent>
        </Card>
    );
}