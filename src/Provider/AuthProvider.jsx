import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (userData) => {
        try {
            setLoading(true);
            const { data } = await axios.post("http://localhost:3000/add-user", userData);
            console.log(data);
            if (!data?.result?.insertedId) return toast.error("User already exists!");
            localStorage.setItem("user", JSON.stringify(data?.regUser));
            setUser(JSON.parse(localStorage.getItem("user")));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong");
        }
    }

    useEffect(() => {
        setLoading(true);
        const user = localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user));
            setLoading(false);
        } else {
            setUser(null);
            setLoading(false);
        }
    }, [])

    const contextData = { user, createUser, loading };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;