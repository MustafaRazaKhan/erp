import { FiEdit2, FiTrash2, FiSearch } from "react-icons/fi";

const UserTableBody = ({ data }: any) => {
  return (
    <tbody className="divide-y divide-slate-100">
      {data.length > 0 ? (
        data.map((user: any) => (
          <tr
            key={user._id}
            className="group transition-colors hover:bg-slate-50/60"
          >
            {/* Email */}
            <td className="px-5 py-4">
              <p className="text-xs text-slate-600">{user.identifier || "-"}</p>
            </td>

            {/* Role */}
            <td className="px-5 py-4">
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase text-slate-600">
                {user.role || "-"}
              </span>
            </td>

            {/* Status */}
            <td className="px-5 py-4">
              <span
                className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase ${
                  user.isActive
                    ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                    : "border-red-200 bg-red-50 text-red-600"
                }`}
              >
                {user.isActive ? "Active" : "Inactive"}
              </span>
            </td>

            {/* Actions */}
            <td className="px-5 py-4">
              <div className="flex items-center justify-end gap-1">
                <button
                  type="button"
                  title="Edit user"
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
                  title="Delete user"
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
          <td colSpan={5} className="px-5 py-16 text-center">
            <div className="mx-auto max-w-xs">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                <FiSearch size={17} />
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-700">
                No users found
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

export default UserTableBody;
