import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Services from "../components/Services";


const Home = () => {
    return (
        <div className="container mx-auto">
           <Navbar></Navbar>
           <Banner></Banner>
           <Services></Services>
        </div>
    );
};

export default Home;