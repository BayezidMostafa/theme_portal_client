import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/Authentication/Authentication';
import { LoaderFull } from '../../../Styles/Index';
import { SyncLoader } from 'react-spinners';

export default function RequestCard({ request, refetch }) {
    const {loading, setLoading} = React.useContext(AuthContext)
    const { displayName, email, photoURL, project_link, resume_link, role } = request;
    const handleAccept = () => {
        setLoading(true)
        axios.put(`https://theme-portal-server.vercel.app/acceptingverification/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('theme-token')}`
            }
        })
            .then(res => {
                if (res.data) {
                    axios.delete(`https://theme-portal-server.vercel.app/deleterequest/${email}`, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('theme-token')}`
                        }
                    })
                        .then(res => {
                            setLoading(false)
                            toast.success('Verification Process Done')
                            refetch()
                            console.log(res.data);
                        })
                        .catch(err => {
                            setLoading(false)
                        })
                }
            })
            .catch(err => {
                setLoading(false)
            })
    }

    const handleReject = () => {
        setLoading(true)
        axios.delete(`https://theme-portal-server.vercel.app/reject/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('theme-token')}`
            }
        })
        .then(res => {
            setLoading(false)
            toast.error('Verification Rejected')
            refetch()
            console.log(res.data);
        })
        .catch(err => {
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


    console.log(email);

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={photoURL}
                    alt="green iguana"
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 0 }} >
                    <Typography variant="h6" component="div">
                        {displayName}
                    </Typography>
                    <Typography as="a" href={`mailto:${email}`} variant="h6" color="orange" component="div">
                        Email
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography>
                        Applied for: {role}
                    </Typography>
                </CardContent>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', paddingY: 0 }} >
                    <Button fullWidth sx={{ textAlign: 'center' }} color="inherit" variant="contained" as="a" href={resume_link} target="_blanc" >Resume</Button>
                    <Button fullWidth sx={{ textAlign: 'center', marginLeft: '5px' }} color="inherit" variant="contained" as="a" href={project_link} target="_blanc" >Project</Button>
                </CardContent>
                <CardContent sx={{ paddingTop: 1 }} >
                    <Button onClick={handleAccept} color='success' variant='contained' fullWidth >Accept Application</Button>
                    <Button onClick={handleReject} sx={{ margin: '5px 0 0 0' }} color='warning' variant='contained' fullWidth >Reject</Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}