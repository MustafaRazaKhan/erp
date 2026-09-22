"use client";

import Link from "next/link";
import {
  FiBookOpen,
  FiEdit2,
  FiEye,
  FiMoreVertical,
  FiPlus,
  FiRefreshCw,
  FiSearch,
  FiTrash2,
  FiUsers,
} from "react-icons/fi";
import { useMemo, useState } from "react";

type ClassItem = {
  _id: string;
  name: string;
  no: number;
  section: string;
  classTeacher: string;
  students: number;
  capacity: number;
  status: "active" | "inactive";
};

const classes: ClassItem[] = [
  {
    _id: "1",
    name: "Class 1",
    no: 1,
    section: "A",
    classTeacher: "Mrs. Priya Sharma",
    students: 32,
    capacity: 40,
    status: "active",
  },
  {
    _id: "2",
    name: "Class 1",
    no: 1,
    section: "B",
    classTeacher: "Mr. Rahul Verma",
    students: 35,
    capacity: 40,
    status: "active",
  },
  {
    _id: "3",
    name: "Class 2",
    no: 2,
    section: "A",
    classTeacher: "Mrs. Neha Singh",
    students: 38,
    capacity: 40,
    status: "active",
  },
  {
    _id: "4",
    name: "Class 3",
    no: 3,
    section: "A",
    classTeacher: "Mr. Amit Kumar",
    students: 36,
    capacity: 40,
    status: "active",
  },
  {
    _id: "5",
    name: "Class 4",
    no: 4,
    section: "A",
    classTeacher: "Mrs. Anjali Gupta",
    students: 34,
    capacity: 40,
    status: "active",
  },
  {
    _id: "6",
    name: "Class 5",
    no: 5,
    section: "A",
    classTeacher: "Mr. Mohit Singh",
    students: 39,
    capacity: 40,
    status: "active",
  },
  {
    _id: "7",
    name: "Class 6",
    no: 6,
    section: "A",
    classTeacher: "Mrs. Kavita Joshi",
    students: 37,
    capacity: 40,
    status: "active",
  },
  {
    _id: "8",
    name: "Class 7",
    no: 7,
    section: "A",
    classTeacher: "Mr. Sandeep Yadav",
    students: 31,
    capacity: 40,
    status: "active",
  },
  {
    _id: "9",
    name: "Class 8",
    no: 8,
    section: "A",
    classTeacher: "Mrs. Pooja Mehta",
    students: 33,
    capacity: 40,
    status: "active",
  },
];

export default function ClassListPage() {
  const [search, setSearch] = useState("");
  const [sectionFilter, setSectionFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredClasses = useMemo(() => {
    return classes.filter((item) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        item.name.toLowerCase().includes(searchValue) ||
        item.section.toLowerCase().includes(searchValue) ||
        item.classTeacher.toLowerCase().includes(searchValue);

      const matchesSection =
        sectionFilter === "all" || item.section === sectionFilter;

      const matchesStatus =
        statusFilter === "all" || item.status === statusFilter;

      return matchesSearch && matchesSection && matchesStatus;
    });
  }, [search, sectionFilter, statusFilter]);

  const totalStudents = classes.reduce(
    (total, item) => total + item.students,
    0,
  );

  const totalCapacity = classes.reduce(
    (total, item) => total + item.capacity,
    0,
  );

  const activeClasses = classes.filter(
    (item) => item.status === "active",
  ).length;

  const inactiveClasses = classes.filter(
    (item) => item.status === "inactive",
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-5 lg:p-6">
      {/* Page Header */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-slate-500">
            Administration / Classes
          </p>

          <h1 className="text-2xl font-bold text-slate-900">
            Class Management
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage classes, sections, teachers and student capacity.
          </p>
        </div>

        <Link
          href="/admin/classes/create"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1e3a5f] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16324f]"
        >
          <FiPlus size={17} />
          Add Class
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          title="Total Classes"
          value={classes.length}
          icon={<FiBookOpen size={20} />}
        />

        <SummaryCard
          title="Active Classes"
          value={activeClasses}
          icon={<FiBookOpen size={20} />}
          iconClass="bg-blue-50 text-[#1e3a5f]"
        />

        <SummaryCard
          title="Total Students"
          value={totalStudents}
          icon={<FiUsers size={20} />}
          iconClass="bg-emerald-50 text-emerald-600"
        />

        <SummaryCard
          title="Available Seats"
          value={totalCapacity - totalStudents}
          icon={<FiUsers size={20} />}
          iconClass="bg-amber-50 text-amber-600"
        />
      </div>

      {/* Main Card */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 border-b border-slate-200 p-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Classes & Sections
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Academic Year 2026 - 27
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Search */}
            <div className="relative">
              <FiSearch
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search class or teacher..."
                className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1e3a5f] focus:ring-2 focus:ring-blue-50 sm:w-64"
              />
            </div>

            {/* Section Filter */}
            <select
              value={sectionFilter}
              onChange={(e) => setSectionFilter(e.target.value)}
              className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-[#1e3a5f]"
            >
              <option value="all">All Sections</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-[#1e3a5f]"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            {/* Refresh */}
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <FiRefreshCw size={16} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Class
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Section
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Class Teacher
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Students
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Capacity
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>

                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredClasses.map((item) => {
                const occupancy =
                  item.capacity > 0
                    ? Math.round((item.students / item.capacity) * 100)
                    : 0;

                return (
                  <tr key={item._id} className="transition hover:bg-slate-50">
                    {/* Class */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1e3a5f]">
                          <FiBookOpen size={18} />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.name}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500">
                            Class No. {item.no}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Section */}
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                        Section {item.section}
                      </span>
                    </td>

                    {/* Teacher */}
                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-slate-700">
                        {item.classTeacher}
                      </p>
                    </td>

                    {/* Students */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <FiUsers size={15} className="text-slate-400" />

                        <span className="text-sm font-semibold text-slate-800">
                          {item.students}
                        </span>
                      </div>
                    </td>

                    {/* Capacity */}
                    <td className="px-5 py-4">
                      <div className="w-28">
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-xs text-slate-500">
                            {item.students}/{item.capacity}
                          </span>

                          <span className="text-xs font-medium text-slate-600">
                            {occupancy}%
                          </span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-[#1e3a5f]"
                            style={{
                              width: `${occupancy}%`,
                            }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <StatusBadge status={item.status} />
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <ActionButton icon={<FiEye size={16} />} title="View" />

                        <ActionButton
                          icon={<FiEdit2 size={16} />}
                          title="Edit"
                        />

                        <ActionButton
                          icon={<FiTrash2 size={16} />}
                          title="Delete"
                          danger
                        />

                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                          title="More"
                        >
                          <FiMoreVertical size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredClasses.length === 0 && (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FiBookOpen size={24} />
            </div>

            <h3 className="text-sm font-semibold text-slate-900">
              No classes found
            </h3>

            <p className="mt-1 max-w-sm text-sm text-slate-500">
              Try changing your search or filter options.
            </p>
          </div>
        )}

        {/* Footer / Pagination */}
        {filteredClasses.length > 0 && (
          <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing <span className="font-medium text-slate-700">1</span> to{" "}
              <span className="font-medium text-slate-700">
                {filteredClasses.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-slate-700">
                {classes.length}
              </span>{" "}
              classes
            </p>

            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-400"
              >
                Previous
              </button>

              <button
                type="button"
                className="rounded-lg bg-[#1e3a5f] px-3 py-1.5 text-sm font-medium text-white"
              >
                1
              </button>

              <button
                type="button"
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition hover:bg-slate-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Summary Card
--------------------------------------------- */

function SummaryCard({
  title,
  value,
  icon,
  iconClass = "bg-slate-100 text-[#1e3a5f]",
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  iconClass?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Status Badge
--------------------------------------------- */

function StatusBadge({ status }: { status: ClassItem["status"] }) {
  if (status === "active") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Active
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
      Inactive
    </span>
  );
}

/* ---------------------------------------------
   Action Button
--------------------------------------------- */

function ActionButton({
  icon,
  title,
  danger = false,
}: {
  icon: React.ReactNode;
  title: string;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      title={title}
      className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
        danger
          ? "text-slate-400 hover:bg-red-50 hover:text-red-600"
          : "text-slate-500 hover:bg-blue-50 hover:text-[#1e3a5f]"
      }`}
    >
      {icon}
    </button>
  );
}
