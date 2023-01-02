import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../Context/Authentication/Authentication';
import { LoaderFull } from '../../Styles/Index';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return (
            <LoaderFull>
                <SyncLoader color="#287a64" />
            </LoaderFull>
        )
    }
    if (user && user?.uid) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace />;
};

export default PrivateRoute;