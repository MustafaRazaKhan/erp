"use client";

const DataTable = ({ children }: any) => {
  return (
    <div className=" rounded-xl border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full">{children}</table>
      </div>
    </div>
  );
};

export default DataTable;
