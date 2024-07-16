import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {

    return (
        <div className="bg-gradient-to-br from-violet-800/10 to-sky-400/10 min-h-screen p-4">
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="my-8 lg:my-16">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;