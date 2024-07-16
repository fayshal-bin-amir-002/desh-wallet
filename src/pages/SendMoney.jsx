import { useRef, useState } from "react";
import UserSendMoney from "../components/UserSendMoney";
import UserSendMoneyPin from "../components/UserSendMoneyPin";
import toast from "react-hot-toast";

const SendMoney = () => {

    const [next, setNext] = useState(false);

    const accRef = useRef();
    const amountRef = useRef();

    const handleNext = () => {
        if (accRef.current.value === '') return toast.error("Give receiver phone number!")
        if (amountRef.current.value === '') return toast.error("Give send money amount!")
        if (Number(amountRef.current.value) < 50) return toast.error("Sent amount should at least 50$");
        setNext(true);
    }

    return (
        <div className=" flex justify-center items-center h-full">
            {!next && <UserSendMoney setNext={setNext} next={next} handleNext={handleNext} accRef={accRef} amountRef={amountRef}></UserSendMoney>}
            {next && <UserSendMoneyPin number={accRef.current.value} amount={amountRef.current.value} ></UserSendMoneyPin>}
        </div>
    );
};

export default SendMoney;