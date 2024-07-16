import PropTypes from 'prop-types';
import { useContext, useRef } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const UserSendMoneyPin = ({number, amount}) => {

    const { user } = useContext(AuthContext);

    const pinRef = useRef();

    const handleSendMoney = async (e) => {
        e.preventDefault();

        const senderNumber = user?.phone;
        const receiverNumber = number;
        const sentAmount = Number(amount);
        let totalAmout = sentAmount;
        if(sentAmount > 100) totalAmout = sentAmount + 5;
        const d = new Date();
        const date = d.toLocaleDateString();
        const pin = pinRef.current.value;

        if(senderNumber === receiverNumber) return toast.error("You can not sent to own!");
        
        const sendMoneyData =  {senderNumber, receiverNumber, sentAmount, totalAmout, date, pin, type};
        
        try {
            //
        } catch(error) {
            toast.error(error.message);
        }
    }

    return (
        <div className="max-w-[400px] w-full p-10 border-2 border-black rounded-lg shadow-md">
            <h3 className="text-3xl font-semibold text-center mb-5">Send Money</h3>
            <form onSubmit={handleSendMoney} className="space-y-8">
                <div className="space-y-4">
                    <input name="account" type="text" defaultValue={number} className="input input-bordered w-full focus:outline-0" readOnly />
                    <input name="amount" type="text" defaultValue={amount + " $"} className="input input-bordered w-full focus:outline-0" readOnly />
                    <input name="total" type="text" defaultValue={`Total = ${amount}$ + ${amount > 100 ? "5$" : "0$" }`} className="input input-bordered w-full focus:outline-0" readOnly />
                    <input ref={pinRef} name="pin" type="number" placeholder="Enter Pin" className="input input-bordered w-full focus:outline-0" required />
                </div>
                <div className="text-right">
                    
                    <button type='submit' className="btn btn-outline btn-info text-lg">Send</button>
                </div>
            </form>
        </div>
    );
};

UserSendMoneyPin.propTypes = {
    number: PropTypes.string,
    amount: PropTypes.string,
};

export default UserSendMoneyPin;