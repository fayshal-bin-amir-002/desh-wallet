import { useContext, useEffect } from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { AuthContext } from "../Provider/AuthProvider";


const Home = () => {

    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://desh-wallet-server.vercel.app/userData/${user?.email}`)
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