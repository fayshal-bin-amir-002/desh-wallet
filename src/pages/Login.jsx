import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const Login = () => {

    const { createUser, user } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const acc = form.account.value;
        const pin = form.pin.value;
        if(acc.trim() === '' || pin.trim() === '') return toast.error("Please fill the form properly!");
        if (isNaN(Number(pin)) || pin.length !== 5) return toast.error("Pin must be only 5 digits!");
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const pin = form.pin.value;
        if(email.trim() === '' || pin.trim() === '' || name.trim() === '' || phone.trim() === '') return toast.error("Please fill the form properly!");
        if (isNaN(Number(pin)) || pin.length !== 5) return toast.error("Pin must be only 5 digits!");
        const newuser = {name, email, phone, pin};
        createUser(newuser);
    }

    if(user) return <Navigate to={"/"}></Navigate>

    return (
        <div className="bg-gradient-to-br from-violet-800/10 to-sky-400/10 min-h-screen p-4 flex justify-center items-center">
            <div>
                <h2 className="text-3xl lg:text-5xl text-center pb-6">Desh Wallet</h2>
                <div className="p-10 bg-white rounded-lg shadow max-w-[480px] w-full h-[440px]">
                    <div role="tablist" className="tabs tabs-bordered">
                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg font-semibold" aria-label="Login" defaultChecked />
                        <div role="tabpanel" className="tab-content mt-6">
                            {/* login form */}
                            <form onSubmit={handleLogin} className="space-y-8">
                                <div className="space-y-4">
                                    <input name="account" type="text" placeholder="Enter Your Email" className="input input-bordered w-full focus:outline-0" required />
                                    <input name="pin" type="password" placeholder="Enter Your Pin (5 digit)" className="input input-bordered w-full focus:outline-0" required />
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btn-outline btn-info text-lg">Login</button>
                                </div>
                            </form>
                        </div>

                        <input
                            type="radio"
                            name="my_tabs_1"
                            role="tab"
                            className="tab text-lg font-semibold"
                            aria-label="Register"
                        />
                        <div role="tabpanel" className="tab-content mt-6">
                            {/* register form */}
                            <form onSubmit={handleRegister} className="space-y-8">
                                <div className="space-y-4">
                                    <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered w-full focus:outline-0" required />
                                    <input name="email" type="text" placeholder="Enter Your Email" className="input input-bordered w-full focus:outline-0" required />
                                    <input name="phone" type="text" placeholder="Enter Your Phone" className="input input-bordered w-full focus:outline-0" required />
                                    <input name="pin" type="password" placeholder="Enter Your Pin (5 digit)" className="input input-bordered w-full focus:outline-0" required />
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btn-outline btn-info text-lg">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;