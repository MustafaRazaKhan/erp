"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiArrowLeft,
  FiBookOpen,
  FiCheck,
  FiChevronDown,
  FiInfo,
  FiUsers,
} from "react-icons/fi";

type ClassForm = {
  grade: string;
  section: string;
  classTeacher: string;
  capacity: string;
  classroom: string;
  classType: string;
  status: "active" | "inactive";
};

export default function CreateClassPage() {
  const [form, setForm] = useState<ClassForm>({
    grade: "",
    section: "",
    classTeacher: "",
    capacity: "40",
    classroom: "",
    classType: "regular",
    status: "active",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const classData = {
        ...form,
        capacity: Number(form.capacity),
      };

      console.log("Create class:", classData);

      // Later:
      // await createClass(classData);

      alert("Class created successfully");

      setForm({
        grade: "",
        section: "",
        classTeacher: "",
        capacity: "40",
        classroom: "",
        classType: "regular",
        status: "active",
      });
    } catch (error) {
      console.error("Create class error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* -------------------------------------------------
          Page Header
      ------------------------------------------------- */}
      <div className="border-b border-slate-200 bg-white">
        <div className="px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/admin/classes"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#1e3a5f]"
            >
              <FiArrowLeft size={16} />
              Back to Classes
            </Link>

            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-400">
                  <span>Administration</span>
                  <span>/</span>
                  <span>Classes</span>
                  <span>/</span>
                  <span className="text-slate-600">Create</span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  Create Class
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Set up a class section for the selected academic year.
                </p>
              </div>

              {/* Academic Year */}
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#1e3a5f] shadow-sm">
                  <FiBookOpen size={17} />
                </div>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                    Academic Year
                  </p>

                  <p className="text-sm font-semibold text-slate-800">
                    2026 - 27
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------
          Main Content
      ------------------------------------------------- */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
              {/* =================================================
                  LEFT - FORM
              ================================================== */}
              <div className="space-y-6">
                {/* -----------------------------------------------
                    Academic Placement
                ------------------------------------------------ */}
                <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <SectionHeader
                    title="Academic Placement"
                    description="Define where this class belongs within the academic structure."
                  />

                  <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
                    {/* Grade */}
                    <SelectField
                      label="Grade / Class"
                      name="grade"
                      value={form.grade}
                      onChange={handleChange}
                      required
                      placeholder="Select grade"
                      options={[
                        {
                          value: "1",
                          label: "Class 1",
                        },
                        {
                          value: "2",
                          label: "Class 2",
                        },
                        {
                          value: "3",
                          label: "Class 3",
                        },
                        {
                          value: "4",
                          label: "Class 4",
                        },
                        {
                          value: "5",
                          label: "Class 5",
                        },
                        {
                          value: "6",
                          label: "Class 6",
                        },
                        {
                          value: "7",
                          label: "Class 7",
                        },
                        {
                          value: "8",
                          label: "Class 8",
                        },
                        {
                          value: "9",
                          label: "Class 9",
                        },
                        {
                          value: "10",
                          label: "Class 10",
                        },
                        {
                          value: "11",
                          label: "Class 11",
                        },
                        {
                          value: "12",
                          label: "Class 12",
                        },
                      ]}
                    />

                    {/* Section */}
                    <SelectField
                      label="Section"
                      name="section"
                      value={form.section}
                      onChange={handleChange}
                      required
                      placeholder="Select section"
                      options={[
                        {
                          value: "A",
                          label: "Section A",
                        },
                        {
                          value: "B",
                          label: "Section B",
                        },
                        {
                          value: "C",
                          label: "Section C",
                        },
                        {
                          value: "D",
                          label: "Section D",
                        },
                        {
                          value: "E",
                          label: "Section E",
                        },
                      ]}
                    />
                  </div>
                </section>

                {/* -----------------------------------------------
                    Class Administration
                ------------------------------------------------ */}
                <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <SectionHeader
                    title="Class Administration"
                    description="Assign the responsible teacher and classroom resources."
                  />

                  <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
                    {/* Teacher */}
                    <SelectField
                      label="Class Teacher"
                      name="classTeacher"
                      value={form.classTeacher}
                      onChange={handleChange}
                      required
                      placeholder="Select class teacher"
                      options={[
                        {
                          value: "teacher-1",
                          label: "Mrs. Priya Sharma",
                        },
                        {
                          value: "teacher-2",
                          label: "Mr. Rahul Verma",
                        },
                        {
                          value: "teacher-3",
                          label: "Mrs. Neha Singh",
                        },
                        {
                          value: "teacher-4",
                          label: "Mr. Amit Kumar",
                        },
                      ]}
                    />

                    {/* Classroom */}
                    <SelectField
                      label="Classroom"
                      name="classroom"
                      value={form.classroom}
                      onChange={handleChange}
                      placeholder="Select classroom"
                      options={[
                        {
                          value: "room-101",
                          label: "Room 101",
                        },
                        {
                          value: "room-102",
                          label: "Room 102",
                        },
                        {
                          value: "room-103",
                          label: "Room 103",
                        },
                        {
                          value: "room-201",
                          label: "Room 201",
                        },
                        {
                          value: "room-202",
                          label: "Room 202",
                        },
                      ]}
                    />

                    {/* Capacity */}
                    <NumberField
                      label="Student Capacity"
                      name="capacity"
                      value={form.capacity}
                      onChange={handleChange}
                      required
                      min={1}
                      max={200}
                    />

                    {/* Class Type */}
                    <SelectField
                      label="Class Type"
                      name="classType"
                      value={form.classType}
                      onChange={handleChange}
                      required
                      options={[
                        {
                          value: "regular",
                          label: "Regular",
                        },
                        {
                          value: "special",
                          label: "Special",
                        },
                      ]}
                    />
                  </div>
                </section>

                {/* -----------------------------------------------
                    Status
                ------------------------------------------------ */}
                <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <SectionHeader
                    title="Class Status"
                    description="Control whether this class can be used for enrollment."
                  />

                  <div className="p-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Active */}
                      <label
                        className={`cursor-pointer rounded-lg border p-4 transition ${
                          form.status === "active"
                            ? "border-[#1e3a5f] bg-blue-50"
                            : "border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            name="status"
                            value="active"
                            checked={form.status === "active"}
                            onChange={handleChange}
                            className="mt-1 accent-[#1e3a5f]"
                          />

                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              Active
                            </p>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              Available for student enrollment and academic
                              operations.
                            </p>
                          </div>
                        </div>
                      </label>

                      {/* Inactive */}
                      <label
                        className={`cursor-pointer rounded-lg border p-4 transition ${
                          form.status === "inactive"
                            ? "border-slate-400 bg-slate-50"
                            : "border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            name="status"
                            value="inactive"
                            checked={form.status === "inactive"}
                            onChange={handleChange}
                            className="mt-1 accent-slate-600"
                          />

                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              Inactive
                            </p>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              Keep the class record but prevent new enrollment.
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </section>
              </div>

              {/* =================================================
                  RIGHT - SUMMARY
              ================================================== */}
              <aside className="lg:sticky lg:top-6 lg:self-start">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Class Preview
                    </p>

                    <h2 className="mt-1 text-lg font-bold text-slate-900">
                      {form.grade ? `Class ${form.grade}` : "New Class"}
                      {form.section ? ` - ${form.section}` : ""}
                    </h2>
                  </div>

                  <div className="space-y-5 p-5">
                    {/* Preview Identity */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1e3a5f]">
                        <FiBookOpen size={21} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {form.grade
                            ? `Class ${form.grade}`
                            : "Class not selected"}
                        </p>

                        <p className="text-xs text-slate-500">
                          {form.section
                            ? `Section ${form.section}`
                            : "Section not selected"}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-100" />

                    {/* Details */}
                    <div className="space-y-4">
                      <PreviewRow label="Academic Year" value="2026 - 27" />

                      <PreviewRow
                        label="Class Teacher"
                        value={getTeacherName(form.classTeacher)}
                      />

                      <PreviewRow
                        label="Classroom"
                        value={getClassroomName(form.classroom)}
                      />

                      <PreviewRow
                        label="Capacity"
                        value={
                          form.capacity
                            ? `${form.capacity} students`
                            : "Not set"
                        }
                      />

                      <PreviewRow
                        label="Class Type"
                        value={
                          form.classType === "special" ? "Special" : "Regular"
                        }
                      />
                    </div>

                    <div className="border-t border-slate-100" />

                    {/* Status */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">Status</span>

                      {form.status === "active" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          Inactive
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Information */}
                <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <div className="flex gap-3">
                    <FiInfo
                      size={17}
                      className="mt-0.5 shrink-0 text-[#1e3a5f]"
                    />

                    <div>
                      <p className="text-sm font-semibold text-[#1e3a5f]">
                        Academic year
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        This class belongs to the 2026 - 27 academic year.
                        Previous academic-year class records remain unchanged.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* -------------------------------------------------
                Bottom Actions
            ------------------------------------------------- */}
            <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-end">
              <Link
                href="/admin/classes"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#1e3a5f] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16324f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FiCheck size={17} />

                {loading ? "Creating..." : "Create Class"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SECTION HEADER
============================================================ */

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-slate-200 px-5 py-4">
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>

      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </div>
  );
}

/* ============================================================
   SELECT FIELD
============================================================ */

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-sm text-slate-800 outline-none transition focus:border-[#1e3a5f] focus:ring-2 focus:ring-blue-50"
        >
          {placeholder && <option value="">{placeholder}</option>}

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
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

/* ============================================================
   NUMBER FIELD
============================================================ */

function NumberField({
  label,
  name,
  value,
  onChange,
  required = false,
  min,
  max,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  min?: number;
  max?: number;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="relative">
        <FiUsers
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          id={name}
          name={name}
          type="number"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          required={required}
          className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-800 outline-none transition focus:border-[#1e3a5f] focus:ring-2 focus:ring-blue-50"
        />
      </div>

      <p className="mt-1.5 text-xs text-slate-400">
        Maximum students allowed in this section.
      </p>
    </div>
  );
}

/* ============================================================
   PREVIEW ROW
============================================================ */

function PreviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-xs text-slate-500">{label}</span>

      <span className="text-right text-xs font-medium text-slate-800">
        {value}
      </span>
    </div>
  );
}

/* ============================================================
   HELPERS
============================================================ */

function getTeacherName(value: string) {
  const teachers: Record<string, string> = {
    "teacher-1": "Mrs. Priya Sharma",
    "teacher-2": "Mr. Rahul Verma",
    "teacher-3": "Mrs. Neha Singh",
    "teacher-4": "Mr. Amit Kumar",
  };

  return teachers[value] || "Not assigned";
}

function getClassroomName(value: string) {
  const classrooms: Record<string, string> = {
    "room-101": "Room 101",
    "room-102": "Room 102",
    "room-103": "Room 103",
    "room-201": "Room 201",
    "room-202": "Room 202",
  };

  return classrooms[value] || "Not assigned";
}
