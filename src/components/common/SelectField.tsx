import React from "react";
import { FiChevronDown } from "react-icons/fi";

const SelectField = ({
  label,
  name,
  value,
  onChange,
  placeholder = "Select",
  options,
}: any) => {
  return (
    <div className="flex-1/2">
      <label className="mb-2 block py-1 text-sm font-medium text-slate-900">
        {label}
      </label>

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-3 pr-10 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">{placeholder}</option>

          {options.map((option: any) => (
            <option key={option.value || option} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>

        <FiChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
};

export default SelectField;
