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
    const [spinLoading, setSpinLoading] = useState(false);

    const createUser = async (userData) => {
        try {
            setLoading(true);
            const { data } = await axios.post("https://desh-wallet-server.vercel.app/add-user", userData);
            const { data: tokenData } = await axios.post("https://desh-wallet-server.vercel.app/jwt", userData);
            localStorage.setItem("access-token", tokenData?.token);
            if (!data?.result?.insertedId) {
                setSpinLoading(false);
                return toast.error("User already exists!");
            }
            localStorage.setItem("user", JSON.stringify(data?.regUser));
            setUser(JSON.parse(localStorage.getItem("user")));
            setLoading(false);
            setSpinLoading(false);
        } catch (error) {
            setLoading(false);
            setSpinLoading(false);
            toast.error("Something went wrong");
        }
    }

    const userLogin = async (userData) => {
        try {
            setLoading(true);
            const { data } = await axios.post("https://desh-wallet-server.vercel.app/user", userData);
            const { data: tokenData } = await axios.post("https://desh-wallet-server.vercel.app/jwt", userData);
            localStorage.setItem("access-token", tokenData?.token);
            if (data?.message) {
                setSpinLoading(false);
                return toast.error(data?.message);
            }
            localStorage.setItem("user", JSON.stringify(data));
            setUser(JSON.parse(localStorage.getItem("user")));
            setLoading(false);
            setSpinLoading(false);
        } catch (error) {
            setLoading(false);
            setSpinLoading(false);
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
            const { data } = await axios.get(`https://desh-wallet-server.vercel.app/userData/${user?.email}`);
            setUser(data);
            return data;
        }
    })

    const contextData = { user, setUser, createUser, userLogin, handleLogout, loading, refetch, isLoading, spinLoading, setSpinLoading };

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