import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="bg-gradient-to-br from-violet-800/10 to-sky-400/10 min-h-screen p-4">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;