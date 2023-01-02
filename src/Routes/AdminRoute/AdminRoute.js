import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../Context/Authentication/Authentication';
import useAdmin from '../../Hooks/useAdmin';
import { LoaderFull } from '../../Styles/Index';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [admin, adminLoading] = useAdmin(user?.email);
    const location = useLocation()

    if (loading || adminLoading) {
        return (
            <LoaderFull>
                <SyncLoader color="#2e5248" />
            </LoaderFull>
        )
    }
    if (admin) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace />;
};

export default AdminRoute;