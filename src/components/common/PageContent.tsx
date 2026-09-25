import React from "react";

const PageContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-[1600px]">{children}</div>;
};

export default PageContent;
