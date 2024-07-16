import { useRef } from "react";
import toast from "react-hot-toast";

const CashIn = () => {

    const amountRef = useRef();
    const agentRef = useRef();

    const handleMoneyReq = async (e) => {
        e.preventDefault();
        const amount = Number(amountRef.current.value);
        
        try {
            //
        } catch(error) {
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