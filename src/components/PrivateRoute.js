import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';

const PrivateRoute = ({children}) => {
    const {loading, userProfile} = useContext(authContext);
    if (loading) return;
    if(userProfile && userProfile.uid) return children;
    return <Navigate to='/login'/>
};

export default PrivateRoute;