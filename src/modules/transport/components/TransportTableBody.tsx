import { FiEdit2, FiTrash2, FiSearch } from "react-icons/fi";

const TransportTableBody = ({ data }: any) => {
  return (
    <tbody className="divide-y divide-slate-100">
      {data.length > 0 ? (
        data.map((transport: any) => (
          <tr
            key={transport._id}
            className="group transition-colors hover:bg-slate-50/60"
          >
            {/* Transport ID */}
            <td className="px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
                  {transport.transportId?.slice(0, 2).toUpperCase()}
                </div>

                <div className="min-w-0">
                  <p className=" text-xs font-semibold text-slate-800">
                    {transport.transportId || "-"}
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {transport.vehicleModel || "No model"}
                  </p>
                </div>
              </div>
            </td>

            {/* Vehicle Type */}
            <td className="px-5 py-4">
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase text-slate-600">
                {transport.vehicleType || "-"}
              </span>
            </td>

            {/* Registration Number */}
            <td className="px-5 py-4">
              <p className="text-xs font-medium text-slate-700">
                {transport.registrationNumber || "-"}
              </p>
            </td>

            {/* Seating Capacity */}
            <td className="px-5 py-4">
              <p className="text-xs text-slate-600">
                {transport.seatingCapacity ?? "-"}
              </p>
            </td>

            {/* Driver */}
            <td className="px-5 py-4">
              <div>
                <p className="text-xs font-semibold text-slate-700">
                  {transport.name || "-"}
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  {transport.phone || "-"}
                </p>
              </div>
            </td>

            {/* Status */}
            <td className="px-5 py-4">
              <span
                className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase ${
                  transport.status === "active"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                    : "border-red-200 bg-red-50 text-red-600"
                }`}
              >
                {transport.status || "-"}
              </span>
            </td>

            {/* Actions */}
            <td className="px-5 py-4">
              <div className="flex items-center justify-end gap-1">
                <button
                  type="button"
                  title="Edit transport"
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg
                    text-slate-400
                    transition
                    hover:bg-slate-100
                    hover:text-slate-700
                  "
                >
                  <FiEdit2 size={14} />
                </button>

                <button
                  type="button"
                  title="Delete transport"
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg
                    text-slate-400
                    transition
                    hover:bg-red-50
                    hover:text-red-600
                  "
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={7} className="px-5 py-16 text-center">
            <div className="mx-auto max-w-xs">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                <FiSearch size={17} />
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-700">
                No transport found
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Try changing your search or filter.
              </p>
            </div>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TransportTableBody;
