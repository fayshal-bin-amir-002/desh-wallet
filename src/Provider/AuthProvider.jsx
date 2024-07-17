import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (userData) => {
        try {
            setLoading(true);
            const { data } = await axios.post("http://localhost:3000/add-user", userData);
            const { data: tokenData } = await axios.post("http://localhost:3000/jwt", userData);
            localStorage.setItem("access-token", tokenData?.token);
            if (!data?.result?.insertedId) return toast.error("User already exists!");
            localStorage.setItem("user", JSON.stringify(data?.regUser));
            setUser(JSON.parse(localStorage.getItem("user")));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong");
        }
    }

    const userLogin = async (userData) => {
        try {
            setLoading(true);
            const { data } = await axios.post("http://localhost:3000/user", userData);
            const { data: tokenData } = await axios.post("http://localhost:3000/jwt", userData);
            localStorage.setItem("access-token", tokenData?.token);
            if (data?.message) return toast.error(data?.message);
            localStorage.setItem("user", JSON.stringify(data));
            setUser(JSON.parse(localStorage.getItem("user")));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong");
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("access-token");
        setUser(null);
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

    const { data: loggedUser = {}, refetch, isLoading } = useQuery({
        queryKey: ["user"],
        enabled: !loading && !!user,
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/userData/${user?.email}`);
            setUser(data);
            return data;
        }
    })

    const contextData = { user, setUser, createUser, userLogin, handleLogout, loading, refetch, isLoading };

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