import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Tooltip } from '@mui/material';

const VerificationStatus = ({ email, refetch }) => {
    const [isVerified, setIsVerified] = useState(null)
    useEffect(() => {
        axios.get(`https://theme-portal-server.vercel.app/users/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('theme-token')}`
            }
        })
            .then(res => {
                refetch()
                setIsVerified(res.data);
            })
    }, [email, refetch])

    return (
        <>
            {
                isVerified?.verified ?
                    <>
                        <Tooltip title="Verified Developer">
                            <VerifiedIcon color='success' />
                        </Tooltip>
                    </>
                    :
                    <></>
            }
        </>
    );
};

export default VerificationStatus;