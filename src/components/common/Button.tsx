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
    <div className="mt-6 flex justify-end">
      <button
        type={type}
        disabled={disabled}
        className="
          inline-flex items-center justify-center gap-2
          rounded-lg
          bg-[#1e3a5f]
          px-6 py-3
          text-sm font-semibold text-white
          shadow-sm
          transition-all duration-200
          hover:bg-[#162d4a]
          hover:shadow-md
          active:scale-[0.98]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {title}
        <FaArrowRight size={13} />
      </button>
    </div>
  );
};

export default Button;
