import { useContext, useEffect } from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Home = () => {

    const { user, loading,  setUser } = useContext(AuthContext);

    

    useEffect(() => {
        fetch(`http://localhost:3000/userData/${user?.email}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user?.email, setUser])

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;