const CashOutHis = () => {
    return (
        <div>
            <table className="w-full text-left border border-separate rounded bg-white border-slate-200" cellSpacing="0">
                <tbody>
                    <tr>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Agent</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Amount</th>
                        <th scope="col" className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Date</th>
                    </tr>
                    <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                        <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">1</td>
                        <td data-th="Title" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">2</td>
                        <td data-th="Title" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">Date</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CashOutHis;