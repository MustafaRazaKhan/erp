const PreviewRow = ({
  label,
  value,
  valueClassName = "text-slate-900",
}: any) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs text-slate-500">{label}</span>

      <span
        className={`max-w-[180px]  text-right text-sm font-medium ${valueClassName}`}
      >
        {value}
      </span>
    </div>
  );
};

export default PreviewRow;
