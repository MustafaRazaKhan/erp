"use client";

import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "Enter Password",
}: any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1/2">
      <label className="mb-2 block py-1 text-sm font-medium text-slate-900">
        {label}
      </label>

      <div className="flex items-center rounded-lg border border-slate-200 bg-white px-3 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent px-1 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-slate-400 transition hover:text-slate-700"
        >
          {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
