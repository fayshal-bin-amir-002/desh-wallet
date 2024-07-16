import PropTypes from 'prop-types';


const UserSendMoney = ({handleNext, accRef, amountRef}) => {


    return (
        <div className="max-w-[400px] w-full p-10 border-2 border-black rounded-lg shadow-md">
            <h3 className="text-3xl font-semibold text-center mb-5">Send Money</h3>
            <div className="space-y-8">
                <div className="space-y-4">
                    <input ref={accRef} name="account" type="text" placeholder="Enter Phone Number" className="input input-bordered w-full focus:outline-0" required />
                    <input ref={amountRef} name="amount" type="number" placeholder="Enter Amount" className="input input-bordered w-full focus:outline-0" required />
                </div>
                <div className="text-right">
                    <button onClick={handleNext} className="btn btn-outline btn-info text-lg">Next</button>
                </div>
            </div>
        </div>
    );
};

UserSendMoney.propTypes = {
    handleNext: PropTypes.func,
    accRef: PropTypes.object,
    amountRef: PropTypes.object
};

export default UserSendMoney;