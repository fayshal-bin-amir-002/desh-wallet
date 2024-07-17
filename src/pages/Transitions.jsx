import { useState, useRef, useEffect, useContext } from "react";
import SendMoneyHis from "../components/SendMoneyHis";
import CashInHis from "../components/CashInHis";
import CashOutHis from "../components/CashOutHis";
import { AuthContext } from "../Provider/AuthProvider";
import CashInHisAgent from "../components/CashInHisAgent";
import LoadingSpinner from "../components/LoadingSpinner";
import AdminSendMoneyHis from "../components/AdminSendMoneyHis";
import CashOutHisAgent from "../pages/CashOutHisAgent";
import AdminCashInHis from "../components/AdminCashInHis";


const Transitions = () => {

    const { user, loading, isLoading } = useContext(AuthContext);

    const [tabSelected, setTabSelected] = useState({
        currentTab: user?.role === 'agent' ? 2 : 1,
        noTabs: user?.role === 'agent' ? 2 : 3,
    })

    const wrapperRef = useRef(null)

    const handleKeyDown = e => {
        if (e.keyCode === 39) {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                if (
                    tabSelected.currentTab >= 1 &&
                    tabSelected.currentTab < tabSelected.noTabs
                ) {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.currentTab + 1,
                    })
                } else {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: 1,
                    })
                }
            }
        }

        if (e.keyCode === 37) {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                if (
                    tabSelected.currentTab > 1 &&
                    tabSelected.currentTab <= tabSelected.noTabs
                ) {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.currentTab - 1,
                    })
                } else {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.noTabs,
                    })
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    })

    if (loading || isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
            <section className="max-w-full" aria-multiselectable="false">
                <ul
                    className="flex items-center border-b border-slate-200"
                    role="tablist"
                    ref={wrapperRef}
                >
                    {
                        user?.role !== 'agent' &&
                        <li className="" role="presentation">
                            <button
                                className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 1
                                    ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                                    : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                                    }`}
                                id="tab-label-1a"
                                role="tab"
                                aria-setsize="3"
                                aria-posinset="1"
                                tabIndex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
                                aria-controls="tab-panel-1a"
                                aria-selected={`${tabSelected.currentTab === 1 ? "true" : "false"
                                    }`}
                                onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
                            >
                                <span>Send Money</span>
                            </button>
                        </li>
                    }
                    <li className="" role="presentation">
                        <button
                            className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 2
                                ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                                : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                                }`}
                            id="tab-label-2a"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="2"
                            tabIndex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
                            aria-controls="tab-panel-2a"
                            aria-selected={`${tabSelected.currentTab === 2 ? "true" : "false"
                                }`}
                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
                        >
                            <span>Cash In {user?.role === 'agent' ? 'Requests' : ''}</span>
                        </button>
                    </li>
                    <li className="" role="presentation">
                        <button
                            className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 3
                                ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                                : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                                }`}
                            id="tab-label-3a"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="2"
                            tabIndex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
                            aria-controls="tab-panel-2a"
                            aria-selected={`${tabSelected.currentTab === 3 ? "true" : "false"
                                }`}
                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
                        >
                            <span>Cash Out</span>
                        </button>
                    </li>
                </ul>
                <div className="">
                    {
                        user?.role !== 'agent' &&
                        <div
                            className={`px-6 py-4 ${tabSelected.currentTab === 1 ? "" : "hidden"
                                }`}
                            id="tab-panel-1a"
                            aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
                            role="tabpanel"
                            aria-labelledby="tab-label-1a"
                            tabIndex="-1"
                        >
                            {user?.role === 'user' && <SendMoneyHis></SendMoneyHis>}
                            {user?.role === 'admin' && <AdminSendMoneyHis></AdminSendMoneyHis>}

                        </div>
                    }
                    <div
                        className={`px-6 py-4 ${tabSelected.currentTab === 2 ? "" : "hidden"
                            }`}
                        id="tab-panel-2a"
                        aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
                        role="tabpanel"
                        aria-labelledby="tab-label-2a"
                        tabIndex="-1"
                    >
                        {user?.role === 'user' && <CashInHis></CashInHis>}
                        {user?.role === 'agent' && <CashInHisAgent></CashInHisAgent>}
                        {user?.role === 'admin' && <AdminCashInHis></AdminCashInHis>}
                    </div>
                    <div
                        className={`px-6 py-4 ${tabSelected.currentTab === 3 ? "" : "hidden"
                            }`}
                        id="tab-panel-3a"
                        aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
                        role="tabpanel"
                        aria-labelledby="tab-label-3a"
                        tabIndex="-1"
                    >
                        {user?.role === 'user' && <CashOutHis></CashOutHis>}
                        {user?.role === 'agent' && <CashOutHisAgent></CashOutHisAgent>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Transitions;