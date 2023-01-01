import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../Context/Authentication/Authentication';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [admin, adminLoading] = useAdmin(user?.email);
    const location = useLocation()

    if (loading || adminLoading) {
        return (
            <Box sx={{ minHeight: '100vh', minWidth: '100vw', justifyContent: 'center', alignItems: 'center' }}>
                <SyncLoader color="#36d7b7" />
            </Box>
        )
    }
    if (admin) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace />;
};

export default AdminRoute;