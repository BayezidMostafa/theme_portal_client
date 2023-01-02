import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function OrderCard({ order }) {
    const {
        userEmail,
        title,
        thumb,
        price,
        live_preview } = order;
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
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
                <Typography sx={{color: 'red'}} as='a' href={live_preview} target='_blank' >
                    Live Preview
                </Typography>
            </CardContent>
        </Card>
    );
}