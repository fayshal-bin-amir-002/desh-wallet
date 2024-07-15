import cashout from "../assets/icons8-cash-in-67.png";
import cashin from "../assets/icons8-cash-out-64.png";
import sendmoney from "../assets/icons8-send-money-100.png";
import cash from "../assets/icons8-cash-64.png";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className=" flex justify-center items-center gap-8 flex-wrap my-12 lg:my-24">
            <div className="p-4 rounded-lg shadow-md w-[220px] text-center bg-green-50/50 cursor-pointer hover:scale-105 duration-700">
                <img src={cash} alt="" className="size-[80px] inline mb-3" />
                <h3 className="text-3xl font-semibold">$</h3>
            </div>
            <Link to="/sendMoney">
                <div className="p-4 rounded-lg shadow-md w-[220px] text-center bg-red-50/40 cursor-pointer hover:scale-105 duration-700">
                    <img src={sendmoney} alt="" className="size-[80px] inline mb-3" />
                    <h3 className="text-3xl font-semibold">Send Money</h3>
                </div>
            </Link>
            <Link to="/cashIn">
                <div className="p-4 rounded-lg shadow-md w-[220px] text-center bg-yellow-50/40 cursor-pointer hover:scale-105 duration-700">
                    <img src={cashin} alt="" className="size-[80px] inline mb-3" />
                    <h3 className="text-3xl font-semibold">Cash In</h3>
                </div>
            </Link>
            <Link to="/cashOut">
                <div className="p-4 rounded-lg shadow-md w-[220px] text-center bg-sky-50/40 cursor-pointer hover:scale-105 duration-700">
                    <img src={cashout} alt="" className="size-[80px] inline mb-3" />
                    <h3 className="text-3xl font-semibold">Cash Out</h3>
                </div>
            </Link>
        </div>
    );
};

export default Services;