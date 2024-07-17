import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";

const CashInAgent = () => {

    const { user, loading } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

    const { data: items = [], isLoading, refetch } = useQuery({
        queryKey: ["cashInHistoryAgent"],
        enabled: !loading && !!user,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/cashinRequestPendingAgent?email=${user?.email}&phone=${user?.phone}`);
            return data;
        }
    })

    const handleCashInReq = async (id, txt, number, amount) => {
        const query = {id, txt, number, amount};

        try {
            const { data } = await axiosSecure.patch(`/cashinRequestUpdate?email=${user?.email}&phone=${user?.phone}`, query);
            if(data.modifiedCount === 1) {
                toast.success("Cash In Request Updated!");
                refetch();
            } else {
                toast.error("Something went wrong!");
            }
        } catch(error) {
            toast.error(error.message);
        }
    }


    if (isLoading || loading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
            <table className="w-full text-left border border-separate rounded bg-white border-slate-200" cellSpacing="0">
                <tbody>
                    <tr>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Request Number</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Amount</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Date</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Status</th>
                    </tr>
                    {
                        items && items.map((item) => <tr key={item._id} className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                            <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.reqNumber}</td>
                            <td data-th="Title" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.amount} $</td>
                            <td data-th="Title" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.date}</td>
                            <td data-th="Title" className={`before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 capitalize font-semibold`}>
                                <button onClick={() => handleCashInReq(item?._id, 'accept', item?.reqNumber, item?.amount)} className="btn btn-success btn-sm text-white mr-2">Accept</button>
                                <button onClick={() => handleCashInReq(item?._id, 'reject', item?.reqNumber, item?.amount)} className="btn btn-error btn-sm text-white">Reject</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CashInAgent;