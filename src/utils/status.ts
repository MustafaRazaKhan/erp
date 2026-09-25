export const getStatusStyle = (status?: string) => {
  switch (status?.toLowerCase()) {
    case "new":
      return "bg-blue-50 text-blue-700 border-blue-100";

    case "contacted":
      return "bg-violet-50 text-violet-700 border-violet-100";

    case "follow-up":
      return "bg-amber-50 text-amber-700 border-amber-100";

    case "resolved":
      return "bg-emerald-50 text-emerald-700 border-emerald-100";

    default:
      return "bg-slate-50 text-slate-600 border-slate-200";
  }
};
