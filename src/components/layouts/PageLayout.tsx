import React from "react";

const PageLayout = ({ children }: any) => {
  return (
    <div className="min-h-full bg-slate-50 p-4 sm:p-5 lg:p-6">{children}</div>
  );
};

export default PageLayout;
