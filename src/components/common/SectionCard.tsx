import React from "react";

const SectionCard = ({ icon, title, children }: any) => {
  return (
    <section className="my-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#1e3a5f]">
          {icon}
        </div>

        <h2 className="text-sm font-semibold text-slate-800">{title}</h2>
      </div>

      {/* Content */}
      <div className="p-5">{children}</div>
    </section>
  );
};

export default SectionCard;
