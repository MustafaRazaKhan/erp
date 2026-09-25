import React from "react";

const ListTableHeader = ({ children }: any) => {
  return (
    <div
      className="border-b border-slate-100 p-4 w-full 
    "
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {children}
      </div>
    </div>
  );
};

export default ListTableHeader;
