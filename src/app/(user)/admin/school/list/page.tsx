"use client";

import React, { useMemo, useState } from "react";

import Link from "next/link";

import {
  FiSearch,
  FiPlus,
  FiMoreVertical,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiPhone,
  FiMail,
  FiMapPin,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiRefreshCw,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";
import { AiFillBuild } from "react-icons/ai";

/* ============================================================
   TYPES
============================================================ */

type School = {
  _id: string;
  name: string;
  code: string;
  contact: string;
  email: string;
  address: string;
  image?: string | null;
  status: "active" | "inactive";
};

/* ============================================================
   PAGE
============================================================ */

const SchoolListPage = () => {
  /* ============================================================
     STATE
  ============================================================ */

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");

  /*
    Temporary data.

    Later replace this with:

    const schoolList = useAppSelector(
      (state) => state.school.schoolList
    );
  */

  const [schools] = useState<School[]>([
    {
      _id: "1",
      name: "Krishna Public School",
      code: "KPS001",
      contact: "+91 98765 43210",
      email: "info@krishnapublicschool.com",
      address: "Bareilly, Uttar Pradesh",
      image: "/hero.jpg",
      status: "active",
    },
    {
      _id: "2",
      name: "Delhi Public Academy",
      code: "DPA002",
      contact: "+91 98765 12345",
      email: "info@delhipublicacademy.com",
      address: "New Delhi, India",
      image: null,
      status: "active",
    },
    {
      _id: "3",
      name: "St. Mary's School",
      code: "SMS003",
      contact: "+91 91234 56789",
      email: "office@stmarys.edu.in",
      address: "Lucknow, Uttar Pradesh",
      image: null,
      status: "active",
    },
    {
      _id: "4",
      name: "Green Valley School",
      code: "GVS004",
      contact: "+91 99887 66554",
      email: "admin@greenvalley.edu.in",
      address: "Moradabad, Uttar Pradesh",
      image: null,
      status: "inactive",
    },
    {
      _id: "5",
      name: "Bright Future Academy",
      code: "BFA005",
      contact: "+91 90000 12345",
      email: "info@brightfuture.edu.in",
      address: "Rampur, Uttar Pradesh",
      image: null,
      status: "active",
    },
  ]);

  /* ============================================================
     FILTER SCHOOLS
  ============================================================ */

  const filteredSchools = useMemo(() => {
    return schools.filter((school) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        school.name.toLowerCase().includes(searchValue) ||
        school.code.toLowerCase().includes(searchValue) ||
        school.email.toLowerCase().includes(searchValue) ||
        school.contact.toLowerCase().includes(searchValue) ||
        school.address.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "all" || school.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [schools, search, statusFilter]);

  /* ============================================================
     COUNTS
  ============================================================ */

  const totalSchools = schools.length;

  const activeSchools = schools.filter(
    (school) => school.status === "active",
  ).length;

  const inactiveSchools = schools.filter(
    (school) => school.status === "inactive",
  ).length;

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <div className="min-h-full bg-slate-50 p-4 sm:p-5 lg:p-6">
      <div className="mx-auto max-w-[1600px]">
        {/* ======================================================
            PAGE HEADER
        ======================================================= */}
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Administration
            </p>

            <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Schools
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage schools and their organization details.
            </p>
          </div>

          <Link
            href="/admin/schools/create"
            className="
              inline-flex items-center justify-center gap-2
              rounded-lg
              bg-[#1e3a5f]
              px-4 py-2.5
              text-xs font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-[#16324f]
            "
          >
            <FiPlus size={15} />
            Add School
          </Link>
        </div>

        {/* ======================================================
            SUMMARY CARDS
        ======================================================= */}
        <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {/* Total */}
          <SummaryCard
            label="Total Schools"
            value={totalSchools}
            icon={<AiFillBuild size={16} />}
            iconClass="bg-blue-50 text-[#1e3a5f]"
          />

          {/* Active */}
          <SummaryCard
            label="Active Schools"
            value={activeSchools}
            icon={<FiCheckCircle size={16} />}
            iconClass="bg-emerald-50 text-emerald-600"
          />

          {/* Inactive */}
          <SummaryCard
            label="Inactive Schools"
            value={inactiveSchools}
            icon={<FiXCircle size={16} />}
            iconClass="bg-red-50 text-red-600"
          />
        </div>

        {/* ======================================================
            MAIN TABLE
        ======================================================= */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          {/* ====================================================
              TOOLBAR
          ===================================================== */}
          <div className="border-b border-slate-100 p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              {/* Search */}
              <div className="relative w-full lg:max-w-md">
                <FiSearch
                  size={16}
                  className="
                    absolute left-3 top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search school, code, email or phone..."
                  className="
                    w-full
                    rounded-lg
                    border border-slate-200
                    bg-slate-50
                    py-2.5 pl-9 pr-3
                    text-xs
                    text-slate-700
                    outline-none
                    placeholder:text-slate-400
                    focus:border-[#1e3a5f]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-blue-50
                  "
                />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {/* Status Filter */}
                <div className="relative">
                  <FiFilter
                    size={14}
                    className="
                      pointer-events-none
                      absolute left-3 top-1/2
                      -translate-y-1/2
                      text-slate-400
                    "
                  />

                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(
                        e.target.value as "all" | "active" | "inactive",
                      )
                    }
                    className="
                      appearance-none
                      rounded-lg
                      border border-slate-200
                      bg-white
                      py-2.5 pl-9 pr-8
                      text-xs font-medium
                      text-slate-600
                      outline-none
                      focus:border-[#1e3a5f]
                      focus:ring-2
                      focus:ring-blue-50
                    "
                  >
                    <option value="all">All Status</option>

                    <option value="active">Active</option>

                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                {/* Refresh */}
                <button
                  type="button"
                  title="Refresh"
                  className="
                    flex h-10 w-10 items-center
                    justify-center
                    rounded-lg
                    border border-slate-200
                    bg-white
                    text-slate-500
                    transition
                    hover:bg-slate-50
                    hover:text-[#1e3a5f]
                  "
                >
                  <FiRefreshCw size={15} />
                </button>

                {/* Export */}
                <button
                  type="button"
                  title="Export"
                  className="
                    hidden h-10 items-center gap-2
                    rounded-lg
                    border border-slate-200
                    bg-white
                    px-3
                    text-xs font-semibold
                    text-slate-600
                    transition
                    hover:bg-slate-50
                    sm:flex
                  "
                >
                  <FiDownload size={14} />
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* ====================================================
              TABLE
          ===================================================== */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[950px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/70">
                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    School
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Code
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Contact
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Address
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Status
                  </th>

                  <th className="px-5 py-3 text-right text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredSchools.length > 0 ? (
                  filteredSchools.map((school) => (
                    <tr
                      key={school._id}
                      className="
                        group
                        transition-colors
                        hover:bg-slate-50/60
                      "
                    >
                      {/* =================================================
                          SCHOOL
                      ================================================== */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          {/* Logo */}
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                            {school.image ? (
                              <img
                                src={school.image}
                                alt={school.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <span className="text-xs font-bold text-[#1e3a5f]">
                                {school.name
                                  .split(" ")
                                  .map((word) => word[0])
                                  .join("")
                                  .slice(0, 2)
                                  .toUpperCase()}
                              </span>
                            )}
                          </div>

                          {/* Name */}
                          <div className="min-w-0">
                            <p className="truncate text-xs font-semibold text-slate-800">
                              {school.name}
                            </p>

                            <p className="mt-0.5 text-[10px] text-slate-400">
                              School ID: {school._id}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* =================================================
                          CODE
                      ================================================== */}
                      <td className="px-5 py-4">
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold tracking-wide text-slate-600">
                          {school.code}
                        </span>
                      </td>

                      {/* =================================================
                          CONTACT
                      ================================================== */}
                      <td className="px-5 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <FiPhone size={11} className="text-slate-400" />

                            <span className="text-[11px] text-slate-600">
                              {school.contact}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <FiMail size={11} className="text-slate-400" />

                            <span className="text-[11px] text-slate-500">
                              {school.email}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* =================================================
                          ADDRESS
                      ================================================== */}
                      <td className="max-w-[220px] px-5 py-4">
                        <div className="flex items-start gap-1.5">
                          <FiMapPin
                            size={12}
                            className="mt-0.5 shrink-0 text-slate-400"
                          />

                          <span className="truncate text-[11px] text-slate-600">
                            {school.address}
                          </span>
                        </div>
                      </td>

                      {/* =================================================
                          STATUS
                      ================================================== */}
                      <td className="px-5 py-4">
                        {school.status === "active" ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[9px] font-bold text-emerald-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-[9px] font-bold text-red-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                            Inactive
                          </span>
                        )}
                      </td>

                      {/* =================================================
                          ACTIONS
                      ================================================== */}
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-1">
                          {/* View */}
                          <button
                            type="button"
                            title="View school"
                            className="
                              flex h-8 w-8
                              items-center justify-center
                              rounded-lg
                              text-slate-400
                              transition
                              hover:bg-blue-50
                              hover:text-[#1e3a5f]
                            "
                          >
                            <FiEye size={14} />
                          </button>

                          {/* Edit */}
                          <button
                            type="button"
                            title="Edit school"
                            className="
                              flex h-8 w-8
                              items-center justify-center
                              rounded-lg
                              text-slate-400
                              transition
                              hover:bg-slate-100
                              hover:text-slate-700
                            "
                          >
                            <FiEdit2 size={14} />
                          </button>

                          {/* Delete */}
                          <button
                            type="button"
                            title="Delete school"
                            className="
                              flex h-8 w-8
                              items-center justify-center
                              rounded-lg
                              text-slate-400
                              transition
                              hover:bg-red-50
                              hover:text-red-600
                            "
                          >
                            <FiTrash2 size={14} />
                          </button>

                          {/* More */}
                          <button
                            type="button"
                            title="More options"
                            className="
                              flex h-8 w-8
                              items-center justify-center
                              rounded-lg
                              text-slate-400
                              transition
                              hover:bg-slate-100
                              hover:text-slate-700
                            "
                          >
                            <FiMoreVertical size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  /* =================================================
                     EMPTY STATE
                  ================================================== */
                  <tr>
                    <td colSpan={6} className="px-5 py-16 text-center">
                      <div className="mx-auto max-w-xs">
                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                          <FiBuilding size={18} />
                        </div>

                        <p className="mt-3 text-sm font-semibold text-slate-700">
                          No schools found
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Try changing your search or status filter.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* ====================================================
              PAGINATION
          ===================================================== */}
          <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-slate-400">
              Showing{" "}
              <span className="font-semibold text-slate-600">
                {filteredSchools.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-600">
                {schools.length}
              </span>{" "}
              schools
            </p>

            <div className="flex items-center gap-1">
              {/* Previous */}
              <button
                type="button"
                disabled
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-lg
                  border border-slate-200
                  text-slate-400
                  transition
                  hover:bg-slate-50
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <FiChevronLeft size={14} />
              </button>

              {/* Page 1 */}
              <button
                type="button"
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-lg
                  bg-[#1e3a5f]
                  text-[11px]
                  font-semibold
                  text-white
                "
              >
                1
              </button>

              {/* Page 2 */}
              <button
                type="button"
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-lg
                  border border-slate-200
                  text-[11px]
                  font-medium
                  text-slate-500
                  transition
                  hover:bg-slate-50
                "
              >
                2
              </button>

              {/* Next */}
              <button
                type="button"
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-lg
                  border border-slate-200
                  text-slate-500
                  transition
                  hover:bg-slate-50
                "
              >
                <FiChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================================================================
   SUMMARY CARD
================================================================ */

type SummaryCardProps = {
  label: string;
  value: number;
  icon: React.ReactNode;
  iconClass: string;
};

const SummaryCard = ({ label, value, icon, iconClass }: SummaryCardProps) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
            {label}
          </p>

          <p className="mt-2 text-xl font-bold text-slate-900">{value}</p>
        </div>

        <div
          className={`
            flex h-9 w-9
            items-center justify-center
            rounded-lg
            ${iconClass}
          `}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default SchoolListPage;
