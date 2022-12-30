import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../Context/Authentication/Authentication';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className='min-w-[60vh] flex justify-center items-center'><SyncLoader color="#36d7b7" /></div>
    }
    if (user && user?.uid) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace />;
};

export default PrivateRoute;