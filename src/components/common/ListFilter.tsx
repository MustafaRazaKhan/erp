import React from "react";
import { FiDownload, FiFilter, FiRefreshCw } from "react-icons/fi";

const ListFilter = () => {
  return (
    <div>
      <div className="flex items-center gap-2 flex-1 w-full">
        <div className="relative">
          <FiFilter
            size={14}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            className="
                  appearance-none
                  rounded-lg
                  border border-slate-200
                  bg-white
                  py-2.5 pl-9 pr-8
                  text-xs font-medium
                  text-slate-600
                  outline-none
                  focus:border-[#1e3a5f]
                  focus:ring-2
                  focus:ring-blue-50
                "
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Refresh */}

        <button
          type="button"
          title="Refresh"
          className="
                flex h-10 w-10 items-center justify-center
                rounded-lg
                border border-slate-200
                bg-white
                text-slate-500
                transition
                hover:bg-slate-50
                hover:text-[#1e3a5f]
              "
        >
          <FiRefreshCw size={15} />
        </button>

        {/* Export */}

        <button
          type="button"
          title="Export"
          className="
                hidden h-10 items-center gap-2
                rounded-lg
                border border-slate-200
                bg-white
                px-3
                text-xs font-semibold
                text-slate-600
                transition
                hover:bg-slate-50
                sm:flex
              "
        >
          <FiDownload size={14} />
          Export
        </button>
      </div>
    </div>
  );
};

export default ListFilter;
