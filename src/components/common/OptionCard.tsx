import React from "react";
import { FiCheck } from "react-icons/fi";

const OptionCard = ({ selected, onClick, title, description, icon }: any) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between rounded-lg border p-4 text-left transition ${
        selected
          ? "border-[#1e3a5f] bg-blue-50"
          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${
              selected
                ? "bg-[#1e3a5f] text-white"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {icon}
          </div>
        )}

        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>

          {description && (
            <p className="mt-0.5 text-xs text-slate-500">{description}</p>
          )}
        </div>
      </div>

      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
          selected ? "border-[#1e3a5f] bg-[#1e3a5f]" : "border-slate-300"
        }`}
      >
        {selected && <FiCheck size={12} className="text-white" />}
      </div>
    </button>
  );
};

export default OptionCard;
