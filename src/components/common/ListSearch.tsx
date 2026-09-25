import React from "react";
import { FiSearch } from "react-icons/fi";

const ListSearch = ({ onChange }: any) => {
  return (
    <div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}

        <div className="relative w-full lg:max-w-md">
          <FiSearch
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            //   value={search}
            onChange={onChange}
            placeholder="Search by name, email, phone or subject..."
            className="
                w-full
                rounded-lg
                border border-slate-200
                bg-slate-50
                py-2.5 pl-9 pr-3
                text-xs
                text-slate-700
                outline-none
                placeholder:text-slate-400
                focus:border-[#1e3a5f]
                focus:bg-white
                focus:ring-2
                focus:ring-blue-50
              "
          />
        </div>

        {/* Filters */}
      </div>
    </div>
  );
};

export default ListSearch;
