import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;