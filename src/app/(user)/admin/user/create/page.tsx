"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiCheck,
  FiChevronDown,
  FiEye,
  FiEyeOff,
  FiMail,
  FiPhone,
  FiShield,
  FiUser,
  FiUsers,
} from "react-icons/fi";

type UserRole = "admin" | "teacher" | "accountant" | "staff";

type UserStatus = "active" | "inactive";

type UserForm = {
  name: string;
  email: string;
  phone: string;
  employeeId: string;
  role: UserRole;
  department: string;
  password: string;
  confirmPassword: string;
  status: UserStatus;
  sendWelcomeEmail: boolean;
};

const initialForm: UserForm = {
  name: "",
  email: "",
  phone: "",
  employeeId: "",
  role: "teacher",
  department: "",
  password: "",
  confirmPassword: "",
  status: "active",
  sendWelcomeEmail: true,
};

const roleOptions = [
  {
    value: "admin",
    label: "Administrator",
    description: "Full administrative access",
  },
  {
    value: "teacher",
    label: "Teacher",
    description: "Academic and classroom access",
  },
  {
    value: "accountant",
    label: "Accountant",
    description: "Fees and finance access",
  },
  {
    value: "staff",
    label: "Staff",
    description: "General staff access",
  },
];

const departmentOptions = [
  "Administration",
  "Academic",
  "Accounts",
  "Transport",
  "Library",
  "Human Resources",
  "Support",
];

export default function CreateUserPage() {
  const [form, setForm] = useState<UserForm>(initialForm);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const selectedRole = useMemo(
    () => roleOptions.find((role) => role.value === form.role),
    [form.role],
  );

  const initials = useMemo(() => {
    if (!form.name.trim()) {
      return "U";
    }

    return form.name
      .trim()
      .split(" ")
      .slice(0, 2)
      .map((name) => name.charAt(0).toUpperCase())
      .join("");
  }, [form.name]);

  const passwordMatch =
    form.confirmPassword === "" || form.password === form.confirmPassword;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password && form.password !== form.confirmPassword) {
      return;
    }

    console.log("Create user:", form);
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-5 lg:p-6">
      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <div className="mb-5 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/admin/users"
              className="transition-colors hover:text-[#1e3a5f]"
            >
              Users
            </Link>

            <span>/</span>

            <span className="text-slate-700">Add User</span>
          </div>

          <h1 className="text-xl font-semibold text-slate-900">Add User</h1>

          <p className="mt-1 text-sm text-slate-500">
            Create a staff account and configure their access to the school ERP.
          </p>
        </div>

        <Link
          href="/admin/users"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          <FiArrowLeft size={16} />
          Back to Users
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
          {/* =================================================
              MAIN FORM
          ================================================== */}
          <div className="space-y-5">
            {/* =================================================
                USER IDENTITY
            ================================================== */}
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={<FiUser size={18} />}
                title="User Identity"
                description="Basic information used to identify the staff member."
              />

              <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
                <InputField
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                />

                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@school.com"
                  icon={<FiMail size={16} />}
                  required
                />

                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  icon={<FiPhone size={16} />}
                  required
                />

                <InputField
                  label="Employee ID"
                  name="employeeId"
                  value={form.employeeId}
                  onChange={handleChange}
                  placeholder="e.g. EMP-2026-001"
                  helper="Unique employee identifier"
                />
              </div>
            </section>

            {/* =================================================
                ORGANIZATION & ACCESS
            ================================================== */}
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={<FiShield size={18} />}
                title="Organization & Access"
                description="Define the user's role and organizational assignment."
              />

              <div className="space-y-5 p-5">
                {/* Role */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800">
                    System Role
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {roleOptions.map((role) => {
                      const isSelected = form.role === role.value;

                      return (
                        <button
                          key={role.value}
                          type="button"
                          onClick={() =>
                            setForm((prev) => ({
                              ...prev,
                              role: role.value as UserRole,
                            }))
                          }
                          className={`flex items-center justify-between rounded-lg border p-4 text-left transition ${
                            isSelected
                              ? "border-[#1e3a5f] bg-blue-50"
                              : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                                isSelected
                                  ? "bg-[#1e3a5f] text-white"
                                  : "bg-slate-100 text-slate-500"
                              }`}
                            >
                              <FiUsers size={17} />
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-slate-900">
                                {role.label}
                              </p>

                              <p className="mt-0.5 text-xs text-slate-500">
                                {role.description}
                              </p>
                            </div>
                          </div>

                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                              isSelected
                                ? "border-[#1e3a5f] bg-[#1e3a5f]"
                                : "border-slate-300"
                            }`}
                          >
                            {isSelected && (
                              <FiCheck size={12} className="text-white" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <SelectField
                    label="Department"
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    placeholder="Select department"
                    options={departmentOptions}
                  />

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-800">
                      Account Status
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      <StatusOption
                        label="Active"
                        description="Can sign in"
                        selected={form.status === "active"}
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            status: "active",
                          }))
                        }
                      />

                      <StatusOption
                        label="Inactive"
                        description="Access disabled"
                        selected={form.status === "inactive"}
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            status: "inactive",
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                ACCOUNT SECURITY
            ================================================== */}
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={<FiShield size={18} />}
                title="Account Security"
                description="Set the credentials used to access the ERP."
              />

              <div className="p-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <PasswordField
                    label="Password"
                    name="password"
                    value={form.password}
                    showPassword={showPassword}
                    onToggle={() => setShowPassword((prev) => !prev)}
                    onChange={handleChange}
                    placeholder="Create password"
                    required
                  />

                  <PasswordField
                    label="Confirm Password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    showPassword={showConfirmPassword}
                    onToggle={() => setShowConfirmPassword((prev) => !prev)}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    required
                  />
                </div>

                {!passwordMatch && (
                  <p className="mt-2 text-xs text-red-600">
                    Passwords do not match.
                  </p>
                )}

                {/* Welcome Email */}
                <div className="mt-5 flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Send welcome email
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Send the user their account details after the account is
                      created.
                    </p>
                  </div>

                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      name="sendWelcomeEmail"
                      checked={form.sendWelcomeEmail}
                      onChange={handleToggle}
                      className="peer sr-only"
                    />

                    <span className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-[#1e3a5f]" />

                    <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
                  </label>
                </div>
              </div>
            </section>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}
          <aside className="space-y-5 xl:sticky xl:top-5 xl:self-start">
            {/* User Preview */}
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Account Preview
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  This is how the user will appear in the ERP.
                </p>
              </div>

              <div className="p-5">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f] text-lg font-semibold text-white">
                    {initials}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold text-slate-900">
                      {form.name || "New User"}
                    </p>

                    <p className="truncate text-sm text-slate-500">
                      {form.email || "user@school.com"}
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px bg-slate-200" />

                <div className="space-y-4">
                  <PreviewRow
                    label="Role"
                    value={selectedRole?.label || "Not selected"}
                  />

                  <PreviewRow
                    label="Department"
                    value={form.department || "Not assigned"}
                  />

                  <PreviewRow
                    label="Employee ID"
                    value={form.employeeId || "Not assigned"}
                  />

                  <PreviewRow
                    label="Phone"
                    value={form.phone || "Not provided"}
                  />

                  <PreviewRow
                    label="Status"
                    value={form.status === "active" ? "Active" : "Inactive"}
                    valueClassName={
                      form.status === "active"
                        ? "text-green-600"
                        : "text-slate-500"
                    }
                  />
                </div>
              </div>
            </section>

            {/* Access Information */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#1e3a5f]">
                  <FiShield size={17} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Access Level
                  </p>

                  <p className="text-xs text-slate-500">
                    Based on selected role
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  {selectedRole?.label}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {selectedRole?.description}
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <AccessItem label="ERP Login" />
                <AccessItem label="Role-based permissions" />
                <AccessItem label="Activity tracking" />
              </div>
            </section>

            {/* Important Note */}
            <section className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-[#1e3a5f]">
                Before creating
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                Make sure the employee's role and department are correct. Access
                should match their responsibilities within the school.
              </p>
            </section>
          </aside>
        </div>

        {/* =================================================
            FORM ACTIONS
        ================================================== */}
        <div className="mt-5 flex flex-col-reverse gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/admin/users"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Cancel
          </Link>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Save as Draft
            </button>

            <button
              type="submit"
              disabled={!passwordMatch}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1e3a5f] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#16324f] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiCheck size={16} />
              Create User
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 border-b border-slate-200 px-5 py-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1e3a5f]">
        {icon}
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>

        <p className="mt-1 text-xs text-slate-500">{description}</p>
      </div>
    </div>
  );
}

/* =========================================================
   INPUT FIELD
========================================================= */

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  helper,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  helper?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-800">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="flex items-center rounded-lg border border-slate-200 bg-white px-3 transition focus-within:border-[#1e3a5f] focus-within:ring-2 focus-within:ring-blue-50">
        {icon && <span className="mr-2 text-slate-400">{icon}</span>}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>

      {helper && <p className="mt-1.5 text-xs text-slate-400">{helper}</p>}
    </div>
  );
}

/* =========================================================
   SELECT FIELD
========================================================= */

function SelectField({
  label,
  name,
  value,
  onChange,
  placeholder,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  placeholder: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-800">
        {label}
      </label>

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-3 pr-10 text-sm text-slate-900 outline-none transition focus:border-[#1e3a5f] focus:ring-2 focus:ring-blue-50"
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
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
}

/* =========================================================
   PASSWORD FIELD
========================================================= */

function PasswordField({
  label,
  name,
  value,
  showPassword,
  onToggle,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  showPassword: boolean;
  onToggle: () => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-800">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="flex items-center rounded-lg border border-slate-200 bg-white px-3 transition focus-within:border-[#1e3a5f] focus-within:ring-2 focus-within:ring-blue-50">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />

        <button
          type="button"
          onClick={onToggle}
          className="ml-2 text-slate-400 transition hover:text-slate-700"
        >
          {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   STATUS OPTION
========================================================= */

function StatusOption({
  label,
  description,
  selected,
  onClick,
}: {
  label: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border p-3 text-left transition ${
        selected
          ? "border-[#1e3a5f] bg-blue-50"
          : "border-slate-200 bg-white hover:bg-slate-50"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-900">{label}</p>

        <span
          className={`h-4 w-4 rounded-full border ${
            selected
              ? "border-[#1e3a5f] bg-[#1e3a5f] ring-2 ring-blue-100"
              : "border-slate-300"
          }`}
        />
      </div>

      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </button>
  );
}

/* =========================================================
   PREVIEW ROW
========================================================= */

function PreviewRow({
  label,
  value,
  valueClassName = "text-slate-900",
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs text-slate-500">{label}</span>

      <span
        className={`max-w-[180px] truncate text-right text-sm font-medium ${valueClassName}`}
      >
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   ACCESS ITEM
========================================================= */

function AccessItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-600">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-50 text-green-600">
        <FiCheck size={10} />
      </span>

      {label}
    </div>
  );
}
