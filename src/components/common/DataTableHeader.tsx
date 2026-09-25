import React from "react";

const DataTableHeader = ({ columns }: any) => {
  return (
    <thead>
      <tr className="border-b border-slate-100 bg-slate-50/70">
        {columns?.map((column: any, index: number) => (
          <th
            key={index}
            className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default DataTableHeader;
