import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if(loading) return <LoadingSpinner></LoadingSpinner>

    if(!user) return <Navigate to={"/login"}></Navigate>

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;