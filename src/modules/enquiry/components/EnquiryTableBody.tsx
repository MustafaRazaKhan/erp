import { getStatusStyle } from "@/utils/status";

import {
  FiEdit2,
  FiEye,
  FiMail,
  FiMoreVertical,
  FiPhone,
  FiSearch,
  FiTrash2,
} from "react-icons/fi";

const EnquiryTableBody = ({ data }: any) => {
  return (
    <tbody className="divide-y divide-slate-100">
      {data.length > 0 ? (
        data.map((enquiry: any) => (
          <tr
            key={enquiry._id}
            className="group transition-colors hover:bg-slate-50/60"
          >
            {/* Name */}
            <td className="px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
                  {enquiry.name
                    ?.split(" ")
                    .map((word: string) => word[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-slate-800">
                    {enquiry.name}
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Enquiry #{enquiry._id}
                  </p>
                </div>
              </div>
            </td>

            {/* Contact Details */}
            <td className="px-5 py-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <FiMail size={11} className="shrink-0 text-slate-400" />

                  <span className="truncate text-[11px] text-slate-600">
                    {enquiry.email || "-"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <FiPhone size={11} className="shrink-0 text-slate-400" />

                  <span className="text-[11px] text-slate-500">
                    {enquiry.phone || "-"}
                  </span>
                </div>
              </div>
            </td>

            {/* Subject */}
            <td className="max-w-[220px] px-5 py-4">
              <p className="truncate text-xs font-medium text-slate-700">
                {enquiry.subject || "-"}
              </p>
            </td>

            {/* Comment */}
            <td className="max-w-[220px] px-5 py-4">
              <p className="truncate text-xs text-slate-500">
                {enquiry.comment || "-"}
              </p>
            </td>

            {/* Message */}
            <td className="max-w-[220px] px-5 py-4">
              <p className="truncate text-xs text-slate-500">
                {enquiry.message || "-"}
              </p>
            </td>

            {/* Status */}
            <td className="px-5 py-4">
              <span
                className={`
                  inline-flex
                  items-center
                  rounded-full
                  border
                  px-2.5
                  py-1
                  text-[9px]
                  font-bold
                  capitalize
                  ${getStatusStyle(enquiry.status)}
                `}
              >
                {enquiry.status || "Unknown"}
              </span>
            </td>

            {/* Created At */}
            <td className="whitespace-nowrap px-5 py-4">
              <p className="text-xs text-slate-600">
                {enquiry.createdAt
                  ? new Date(enquiry.createdAt).toLocaleDateString()
                  : "-"}
              </p>
            </td>

            {/* Updated At */}
            <td className="whitespace-nowrap px-5 py-4">
              <p className="text-xs text-slate-500">
                {enquiry.updatedAt
                  ? new Date(enquiry.updatedAt).toLocaleDateString()
                  : "-"}
              </p>
            </td>

            {/* Actions */}
            <td className="px-5 py-4">
              <div className="flex items-center justify-end gap-1">
                <button
                  type="button"
                  title="Edit enquiry"
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
                  title="Delete enquiry"
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
          <td colSpan={9} className="px-5 py-16 text-center">
            <div className="mx-auto max-w-xs">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                <FiSearch size={17} />
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-700">
                No enquiries found
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

export default EnquiryTableBody;
