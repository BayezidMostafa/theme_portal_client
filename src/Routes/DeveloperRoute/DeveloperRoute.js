import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../Context/Authentication/Authentication';
import useDeveloper from '../../Hooks/useDeveloper';
import { LoaderFull } from '../../Styles/Index';

const DeveloperRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [developer, developerLoading] = useDeveloper(user?.email);
    const location = useLocation()

    if (loading || developerLoading) {
        return (
            <LoaderFull>
                <SyncLoader color="#2e5248" />
            </LoaderFull>
        )
    }
    if (developer) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace />;
};

export default DeveloperRoute;