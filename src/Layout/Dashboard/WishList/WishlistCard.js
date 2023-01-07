import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/Authentication/Authentication';
import { LoaderFull } from '../../../Styles/Index';
import { SyncLoader } from 'react-spinners';

export default function WishlistCard({ wish, refetch }) {
    const {loading, setLoading} = React.useContext(AuthContext)
    const {
        booking_id,
        userEmail,
        title,
        thumb,
        price,
        live_preview
    } = wish;
    const handleDeleteWish = () => {
        setLoading(true)
        axios.delete(`https://theme-portal-server.vercel.app/deletewish/${booking_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('theme-token')}`
            }
        })
            .then(res => {
                if (res.data.acknowledged) {
                    setLoading(false)
                    refetch()
                    toast.success('Wish Canceled')
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err.message)
            })
    }

    const handleBookTheme = () => {
        setLoading(true);
        const order = {
            booking_id,
            userEmail,
            title,
            thumb,
            price,
            live_preview
        }

        axios.put('https://theme-portal-server.vercel.app/order', order)
            .then(res => {
                if (res.data.upsertedCount !== 1) {
                    return toast.error('Already Added')
                }
                refetch()
                toast.success('Successfully Ordered')
                axios.delete(`https://theme-portal-server.vercel.app/deletewish/${booking_id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('theme-token')}`
                    }
                })
                    .then(res => {
                        if (res.data.acknowledged) {
                            refetch()
                            setLoading(false)
                        }
                    })
                    .catch(err => {
                        setLoading(false)
                        console.error(err.message)
                    })
            })
            .catch(err => {
                console.error(err.message);
                setLoading(false)
            })
    }

    if(loading){
        return(
            <LoaderFull>
                <SyncLoader color="#2e5248" />
            </LoaderFull>
        )
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
                <Button sx={{ marginBottom: '7px' }} fullWidth variant='contained' onClick={handleDeleteWish} >Cancel</Button>
                <Button fullWidth variant='contained' onClick={handleBookTheme} >Book</Button>
            </CardContent>
        </Card>
    );
}