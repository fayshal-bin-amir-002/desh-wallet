import { useContext, useRef } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CashIn = () => {

    const { user } = useContext(AuthContext);

    const amountRef = useRef();
    const agentRef = useRef();
    
    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();

    const handleMoneyReq = async (e) => {


        e.preventDefault();
        const amount = Number(amountRef.current.value);
        const number = agentRef.current.value;
        const d = new Date();
        const date = d.toLocaleDateString();
        const reqData = {
            amount,
            agentNumber: number,
            reqNumber: user?.phone,
            date
        }

        try {
            const { data } = await axiosSecure.post(`/cashin-request?email=${user?.email}&phone=${user?.phone}`, reqData);
            if (data?.insertedId) {
                Swal.fire({
                    title: "Send",
                    text: "Cash in request sent successfully!",
                    icon: "success"
                });
                navigate("/");
            } else {
                toast.error("Something went wrong!");
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className=" flex justify-center items-center h-full">
            <div className="max-w-[400px] w-full p-10 border-2 border-black rounded-lg shadow-md">
                <h3 className="text-3xl font-semibold text-center mb-5">Cash In</h3>
                <form onSubmit={handleMoneyReq} className="space-y-8">
                    <div className="space-y-4">
                        <input ref={agentRef} name="number" type="text" placeholder="Enter Agent Number" className="input input-bordered w-full focus:outline-0" required />
                        <input ref={amountRef} name="amount" type="number" placeholder="Enter Amount" className="input input-bordered w-full focus:outline-0" required />
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn btn-outline btn-info text-lg">Send Request</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CashIn;