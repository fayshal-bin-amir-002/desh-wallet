import Banner from "../components/Banner";
import Navbar from "../components/Navbar";


const Home = () => {
    return (
        <div className="container mx-auto">
           <Navbar></Navbar>
           <Banner></Banner>
        </div>
    );
};

export default Home;