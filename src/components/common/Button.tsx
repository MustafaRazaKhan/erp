import React from "react";
import { FaArrowRight } from "react-icons/fa";

type ButtonProps = {
  title?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({
  title = "Submit",
  type = "submit",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="
        group
        inline-flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-xl
        bg-[#1e3a5f]
        px-6
        py-3.5
        text-sm
        font-semibold
        text-white
        shadow-sm
        transition-all
        duration-300
        hover:bg-[#16324f]
        hover:shadow-md
        focus:outline-none
        focus:ring-2
        focus:ring-blue-200
        focus:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-60
        sm:w-auto
        mt-4
      "
    >
      <span>{title}</span>

      <FaArrowRight
        size={12}
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </button>
  );
};

export default Button;
