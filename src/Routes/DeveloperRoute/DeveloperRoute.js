import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../Context/Authentication/Authentication';
import useDeveloper from '../../Hooks/useDeveloper';

const DeveloperRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [developer, developerLoading] = useDeveloper(user?.email);
    const location = useLocation()

    if (loading || developerLoading) {
        return (
            <Box>
                <SyncLoader color="#36d7b7" />
            </Box>
        )
    }
    if (developer) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace />;
};

export default DeveloperRoute;