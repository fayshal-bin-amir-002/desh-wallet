const LoadingSpinner = () => {
    return (
        <div className="flex h-screen w-full justify-center items-center">
            <div>
                <span className="loading loading-ring loading-xs text-blue-400"></span>
                <span className="loading loading-ring loading-sm text-blue-400"></span>
                <span className="loading loading-ring loading-md text-blue-400"></span>
                <span className="loading loading-ring loading-lg text-blue-400"></span>
            </div>
        </div>
    );
};

export default LoadingSpinner;