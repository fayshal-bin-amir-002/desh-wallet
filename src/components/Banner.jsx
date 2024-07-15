const Banner = () => {
    return (
        <div className="h-[400px] w-full flex justify-center items-center my-8 lg:my-16">
            <div className="w-full lg:w-2/3 mx-auto text-center">
                <h2 className="text-4xl lg:text-7xl font-semibold">Desh Wallet</h2>
                <p className="text-base lg:text-lg text-gray-600 mt-5 mb-7">Experience seamless, secure, and instant financial transactions at your fingertips with Desh Wallet. Whether you are transferring money, paying bills, or shopping online, Desh Wallet offers a user-friendly platform designed to simplify your financial life. Join our community and enjoy the convenience of managing your finances anytime, anywhere.</p>
                <button className="btn btn-outline btn-info">Download The App</button>
            </div>
        </div>
    );
};

export default Banner;