import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export const axiosSecure = axios.create({
    baseURL: "https://desh-wallet-server.vercel.app"
})

const useAxiosSecure = () => {

    const { setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("access-token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
            setUser(null);
            localStorage.removeItem("user");
            localStorage.removeItem("access-token");
            navigate("/login");
        }
    })

    return axiosSecure;
};

export default useAxiosSecure;