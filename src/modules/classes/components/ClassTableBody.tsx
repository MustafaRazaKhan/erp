import { FiEdit2, FiTrash2, FiSearch } from "react-icons/fi";

const ClassTableBody = ({ data }: any) => {
  return (
    <tbody className="divide-y divide-slate-100">
      {data.length > 0 ? (
        data.map((classItem: any) => (
          <tr
            key={classItem._id}
            className="group transition-colors hover:bg-slate-50/60"
          >
            {/* Class Name */}
            <td className="px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-slate-800">
                    {classItem.className || "-"}
                  </p>
                </div>
              </div>
            </td>

            {/* Class Number */}
            <td className="px-5 py-4">
              <p className="text-xs text-slate-600">
                {classItem.sectionName ?? "-"}
              </p>
            </td>

            {/* Section */}
            <td className="px-5 py-4">
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase text-slate-600">
                {classItem.roomNo || "-"}
              </span>
            </td>
            <td className="px-5 py-4">
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase text-slate-600">
                {classItem.isActive ? "Active" : "InActive"}
              </span>
            </td>

            {/* Actions */}
            <td className="px-5 py-4">
              <div className="flex items-center justify-end gap-1">
                <button
                  type="button"
                  title="Edit class"
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
                  title="Delete class"
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
          <td colSpan={4} className="px-5 py-16 text-center">
            <div className="mx-auto max-w-xs">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                <FiSearch size={17} />
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-700">
                No classes found
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

export default ClassTableBody;
