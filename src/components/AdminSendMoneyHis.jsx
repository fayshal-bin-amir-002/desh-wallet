import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";

const AdminSendMoneyHis = () => {

    const { user, loading } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

    const { data: items = [], isLoading } = useQuery({
        queryKey: ["sendMoneyHistoryAdmin"],
        enabled: !loading && !!user,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/AdminSendMoneyHis?email=${user?.email}&phone=${user?.phone}`);
            return data;
        }
    })

    if (isLoading || loading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
            <table className="w-full text-left border border-separate rounded bg-white border-slate-200" cellSpacing="0">
                <tbody>
                    <tr>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Sender</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Receiver</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Amount</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Date</th>
                    </tr>
                    {
                        items && items.map((item) => <tr key={item?._id} className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                            <td data-th="Sender" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.senderNumber}</td>
                            <td data-th="Receiver" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.receiverNumber}</td>
                            <td data-th="Amount" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.sentAmount}</td>
                            <td data-th="Date" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.date}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdminSendMoneyHis;