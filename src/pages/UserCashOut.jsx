import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UserCashOut = () => {

    const { user, refetch } = useContext(AuthContext);

    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();

    const handleCashOut = async (e) => {
        e.preventDefault();
        const form = e.target;
        const amount = Number(form.amount.value);
        const total = ((amount * 1.5) / 100) + amount;
        const agentNumber = form.number.value;
        const userNumber = user?.phone;
        const pin = form.pin.value;
        const d = new Date();
        const date = d.toLocaleDateString();
        const status = 'success';
        const cashOutData = { amount, total, agentNumber, userNumber, pin, date, status };

        if(user?.balance < total) return toast.error("Insufficient balance! Total: " + total);

        try {
            const { data } = await axiosSecure.post(`/cashOut?email=${user?.email}&phone=${user?.phone}`, cashOutData);

            if (data.insertedId) {
                refetch();
                Swal.fire({
                    title: "Cash Out",
                    text: `Cash out request successfully. ${amount}$ + fee ${(amount * 1.5) / 100}$`,
                    icon: "success"
                });
                navigate("/");
            } else {
                toast.error(data?.message || "Something went wrong!");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className=" flex justify-center items-center h-full">
            <div className="max-w-[400px] w-full p-10 border-2 border-black rounded-lg shadow-md">
                <h3 className="text-3xl font-semibold text-center mb-5">Cash Out</h3>
                <form onSubmit={handleCashOut} className="space-y-8">
                    <div className="space-y-4">
                        <input name="amount" type="number" placeholder="Enter Amount" className="input input-bordered w-full focus:outline-0" required />
                        <input name="number" type="text" placeholder="Enter Agent Number" className="input input-bordered w-full focus:outline-0" required />
                        <input name="pin" type="password" placeholder="Enter pin" className="input input-bordered w-full focus:outline-0" required />
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn btn-outline btn-info text-lg">Cash Out</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserCashOut;