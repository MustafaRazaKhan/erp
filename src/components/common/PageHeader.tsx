"use client";

const PageHeader = ({ heading }: any) => {
  return (
    <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
          {heading.title}
        </p>

        <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {heading.subTitle}
        </h1>

        <p className="mt-1 text-sm text-slate-500">{heading.desc}</p>
      </div>
    </div>
  );
};

export default PageHeader;
