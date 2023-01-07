import { NativeSelect, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { SyncLoader } from 'react-spinners';
import { RequestCover } from '../../../Assets';
import Button from '../../../Components/Button/Button';
import { AuthContext } from '../../../Context/Authentication/Authentication';
import { LoaderFull } from '../../../Styles/Index';
import { VerificationInformation, VerificationSection } from './RequestVerificationStyles';

const RequestVerification = () => {

    const { user, setLoading, loading } = useContext(AuthContext);

    const { data: issubmitted = [] } = useQuery({
        queryKey: ['incomingdata'],
        queryFn: async () => {
            const res = await axios.get(`https://theme-portal-server.vercel.app/issubmitted/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('theme-token')}`
                }
            })
            if(res.data){
                return res.data
            }
            return null
        }

    })

    console.log(issubmitted);

    const { email, displayName, photoURL } = user;

    const handleVerification = (event) => {
        setLoading(true)
        event.preventDefault()
        const form = event.target;
        const role = form.role.value;
        const project_link = form.project_link.value;
        const resume_link = form.resume_link.value;
        const devProfile = {
            email,
            displayName,
            photoURL,
            role,
            project_link,
            resume_link,
        }
        console.log(devProfile);
        axios.put('https://theme-portal-server.vercel.app/request', devProfile, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('theme-token')}`
            }
        })
            .then(res => {
                if (res.data.upsertedCount) {
                    setLoading(false)
                    toast.success('Information Submitted! Wait for the response')
                    console.log(res.data);
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err.message);
            })
    }

    if (loading) {
        return (
            <LoaderFull>
                <SyncLoader color="#2e5248" />
            </LoaderFull>
        )
    }

    return (
        <VerificationSection>
            <VerificationInformation>
                <img src={RequestCover} alt="" />
            </VerificationInformation>
            <VerificationInformation>
                <form onSubmit={handleVerification}>
                    <NativeSelect required sx={{ marginY: '10px' }} variant='contained' fullWidth color='success' name='role' >
                        <option value="Full Stack Developer">Full Stack Developer</option>
                        <option value="Front-end Developer">Front-end Developer</option>
                        <option value="MERN Stack Developer">MERN Stack Developer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                    </NativeSelect>
                    <TextField required size='small' name='project_link' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Project Link" variant="outlined" />
                    <TextField required size='small' name='resume_link' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Resume Drive Link" variant="outlined" />
                    {
                        issubmitted !== null ?
                            <>
                                <Button disabled type="submit">Wait for the response!</Button>
                            </>
                            :
                            <>
                                <Button type="submit">Request For Verification</Button>
                            </>
                    }
                </form>
            </VerificationInformation>
        </VerificationSection>
    );
};

export default RequestVerification;