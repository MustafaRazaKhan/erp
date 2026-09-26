import Link from "next/link";
import React from "react";

const ListBtn = ({ btn }: any) => {
  return (
    <Link
      href={btn.href}
      className="
        flex
        items-center
        justify-center
        gap-2
        rounded
        bg-red-500
        px-4
        py-2.5
        text-sm
        font-semibold
        text-white
        shadow-sm
        transition-all
        duration-200
        hover:bg-[#162d4a]
        hover:shadow-md
        focus:outline-none
        focus:ring-2
        focus:ring-blue-200
        focus:ring-offset-2
        h-12
      "
    >
      <div className="text-sm">{btn.icon}</div>

      <div>{btn.title}</div>
    </Link>
  );
};

export default ListBtn;
