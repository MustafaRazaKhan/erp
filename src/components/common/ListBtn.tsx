import Link from "next/link";
import React from "react";

const PageBtn = ({ btn }: any) => {
  return (
    <div className="bg-blue-800 text-white px-4 py-3">
      <Link href={`${btn.href}`} className="flex gap-1">
        <div>{btn.icon}</div>
        <div>{btn.title}</div>
      </Link>
    </div>
  );
};

export default PageBtn;
