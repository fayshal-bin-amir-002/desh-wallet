const CashOut = () => {
    return (
        <div className=" flex justify-center items-center h-full">
            <div className="max-w-[400px] w-full p-10 border-2 border-black rounded-lg shadow-md">
                <h3 className="text-3xl font-semibold text-center mb-5">Cash Out</h3>
                <form className="space-y-8">
                    <div className="space-y-4">
                        <input name="amount" type="number" placeholder="Enter Amount" className="input input-bordered w-full focus:outline-0" required />
                        <input name="agent" type="text" placeholder="Enter Agent Number" className="input input-bordered w-full focus:outline-0" required />
                        <input name="pin" type="number" placeholder="Enter pin" className="input input-bordered w-full focus:outline-0" required />
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn btn-outline btn-info text-lg">Send Request</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CashOut;