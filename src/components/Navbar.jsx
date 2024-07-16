import { useContext } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Navbar = () => {

    const { user } = useContext(AuthContext); console.log(user);

    return (
        <nav className="flex justify-between items-center">
            <div>
                <h4 className="text-lg font-medium">{user?.name}</h4>
                <div className="flex items-center gap-1">
                    {
                        user?.status === 'pending' ?
                            <><div className="badge badge-warning badge-xs"></div> <p className="font-medium capitalize">{user?.status}</p></> :
                            <><RiVerifiedBadgeFill className="text-green-500" />
                                <p className="font-medium capitalize">{user?.status}</p></>
                    }
                </div>
            </div>
            <div><p className="px-5 py-2 border-2 hover:bg-blue-300 hover:text-white border-blue-300 rounded-full cursor-pointer font-medium">Balance</p></div>
            <div>
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-4" className="text-3xl cursor-pointer"><HiBars3BottomRight /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-100 text-base-content bg-opacity-100 min-h-full w-80 p-4 space-y-2 text-base">
                            <li className="bg-base-200 rounded-lg"><Link to="">Overviews</Link></li>
                            <li className="bg-base-200 rounded-lg"><Link to="">Transitions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;