import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UserCashOut from "./UserCashOut";
import AgentCashOut from "./AgentCashOut";

const CashOut = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
        { user?.role === 'user' && <UserCashOut></UserCashOut> }
        { user?.role === 'agent' && <AgentCashOut></AgentCashOut> }
        </>
    );
};

export default CashOut;