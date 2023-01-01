import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../Context/Authentication/Authentication';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return (
            <Box sx={{ minHeight: '100vh', minWidth: '100vw', justifyContent: 'center', alignItems: 'center' }}>
                <SyncLoader color="#36d7b7" />
            </Box>
        )
    }
    if (user && user?.uid) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace />;
};

export default PrivateRoute;