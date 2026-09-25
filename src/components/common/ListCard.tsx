import React from "react";

const ListCard = ({ title, value, color = "blue" }: any) => {
  const styles: any = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    green: "bg-emerald-50 text-emerald-600",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 flex-1">
      <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <div className="mt-2 flex items-end justify-between">
        <p className="text-xl font-bold text-slate-900">{value}</p>

        <span
          className={`flex h-7 w-7 items-center justify-center rounded-lg ${styles[color]}`}
        >
          <span className="h-2 w-2 rounded-full bg-current" />
        </span>
      </div>
    </div>
  );
};

export default ListCard;
