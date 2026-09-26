import { FiEdit2, FiMail, FiPhone, FiTrash2, FiSearch } from "react-icons/fi";

const SchoolTableBody = ({ data }: any) => {
  return (
    <tbody className="divide-y divide-slate-100">
      {data.length > 0 ? (
        data.map((school: any) => (
          <tr
            key={school._id}
            className="group transition-colors hover:bg-slate-50/60"
          >
            <td className="px-5 py-4">
              <div className="flex items-center gap-3">
                {/* Photo placeholder for now */}

                <img
                  src={`/api/school/photo/${school._id}`}
                  alt="photo"
                  className="w-10 h-10"
                />
              </div>
            </td>
            {/* Name */}
            <td className="px-5 py-4">
              <div className="flex items-center gap-3">
                {/* Photo placeholder for now */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
                  {school.name
                    ?.split(" ")
                    .map((word: string) => word[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <div className="min-w-0">
                  <p className=" text-xs font-semibold text-slate-800">
                    {school.name}
                  </p>
                </div>
              </div>
            </td>
            {/* afflicaiton Code */}
            <td className="px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="min-w-0">
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {school.code || school._id}
                  </p>
                </div>
              </div>
            </td>

            {/* Email */}
            <td className="px-5 py-4">
              <div className="flex items-center gap-1.5">
                <FiMail size={11} className="shrink-0 text-slate-400" />

                <span className=" text-[11px] text-slate-600">
                  {school.email || "-"}
                </span>
              </div>
            </td>

            {/* Contact */}
            <td className="px-5 py-4">
              <div className="flex items-center gap-1.5">
                <FiPhone size={11} className="shrink-0 text-slate-400" />

                <span className="text-[11px] text-slate-500">
                  {school.contact || "-"}
                </span>
              </div>
            </td>

            {/* Address */}
            <td className="max-w-[220px] px-5 py-4">
              <p className=" text-xs text-slate-500">{school.address || "-"}</p>
            </td>

            {/* Code */}

            {/* Actions */}
            <td className="px-5 py-4">
              <div className="flex items-center justify-end gap-1">
                <button
                  type="button"
                  title="Edit school"
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
                  title="Delete school"
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
          <td colSpan={8} className="px-5 py-16 text-center">
            <div className="mx-auto max-w-xs">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                <FiSearch size={17} />
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-700">
                No schools found
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

export default SchoolTableBody;
