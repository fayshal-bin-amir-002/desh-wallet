import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "../components/LoadingSpinner";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const UserManagements = () => {

    const { user, loading } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ["usersAdmin"],
        enabled: !loading && !!user,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users?email=${user?.email}&phone=${user?.phone}`);

            return data;
        }
    })

    const { mutateAsync: active } = useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosSecure.patch(`/update-user?email=${user?.email}&phone=${user?.phone}`, { id });
            return data;
        },
        onSuccess: () => {
            refetch();
            toast.success("User updated Successfully.");
        }
    })

    const handleActiveMember = async (id) => {
        try {
            await active(id);
        } catch (error) {
            toast.error(error.message);
        }
    }

    const handleBlockMember = (id) => {
        console.log(id);
    }

    if (loading || isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
            <table className="w-full text-left border border-separate rounded bg-white border-slate-200" cellSpacing="0">
                <tbody>
                    <tr>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Email</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Phone</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Status</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Role</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Actions</th>
                    </tr>
                    {
                        users && users.map((item) => <tr key={item._id} className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                            <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.name}</td>
                            <td data-th="Email" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.email}</td>
                            <td data-th="Phone" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.phone}</td>
                            <td data-th="Status" className={`before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 capitalize stroke-slate-500 text-slate-500 ${item?.status == 'verify' && 'text-green-500'} ${item?.status == 'pending' && 'text-yellow-500'} ${item?.status == 'blocked' && 'text-red-500'}`}>{item?.status}</td>
                            <td data-th="Role" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 capitalize font-semibold">{item?.role}</td>
                            <td data-th="Actions" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 space-x-2 text-white">
                                {
                                    item?.status !== "verified" && <button onClick={() => handleActiveMember(item?._id)} className="btn btn-success btn-sm text-white">Activate</button>
                                }
                                <button onClick={() => handleBlockMember(item?._id)} className="btn btn-error btn-sm text-white">Block</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserManagements;