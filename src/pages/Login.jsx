const Login = () => {
    return (
        <div className="bg-gradient-to-br from-violet-800/10 to-sky-400/10 min-h-screen p-4 flex justify-center items-center">
            <div>
                <h2 className="text-3xl lg:text-5xl text-center pb-6">Desh Wallet</h2>
                <div className="p-10 bg-white rounded-lg shadow max-w-[480px] w-full h-[400px]">
                    <div role="tablist" className="tabs tabs-bordered">
                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg font-semibold" aria-label="Login" defaultChecked />
                        <div role="tabpanel" className="tab-content mt-6">
                            <form className="space-y-8">
                                <div className="space-y-4">
                                    <input type="text" placeholder="Enter Your Phone/Email" className="input input-bordered w-full focus:outline-0" />
                                    <input type="password" placeholder="Enter Your Pin" className="input input-bordered w-full focus:outline-0" />
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
                            <form className="space-y-8">
                                <div className="space-y-4">
                                    <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full focus:outline-0" />
                                    <input type="text" placeholder="Enter Your Phone/Email" className="input input-bordered w-full focus:outline-0" />
                                    <input type="password" placeholder="Enter Your Pin" className="input input-bordered w-full focus:outline-0" />
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