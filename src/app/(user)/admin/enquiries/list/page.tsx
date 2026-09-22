"use client";

import React, { useMemo, useState } from "react";

import {
  FiSearch,
  FiPlus,
  FiMoreVertical,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiPhone,
  FiMail,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiRefreshCw,
} from "react-icons/fi";

import Link from "next/link";

import type { EnquiryObj } from "@/modules/enquiry/store/enquiry.types";

const EnquiryListPage = () => {
  /* ============================================================
     STATE
  ============================================================ */

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  /*
    Temporary data for UI.

    Later this will come from:

    const { enquiryList } = useAppSelector(
      (state) => state.enquiry
    );
  */
  const [enquiries] = useState<EnquiryObj[]>([
    {
      _id: "1",
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "+91 98765 43210",
      subject: "Admission for Class 6",
      message: "I would like to know about admission availability.",
      comment: "Please contact me in the afternoon.",
      status: "new",
    },
    {
      _id: "2",
      name: "Priya Verma",
      email: "priya@example.com",
      phone: "+91 98765 12345",
      subject: "Admission for Class 3",
      message: "Looking for admission information for my daughter.",
      status: "contacted",
    },
    {
      _id: "3",
      name: "Aman Singh",
      email: "aman@example.com",
      phone: "+91 91234 56789",
      subject: "Transport Enquiry",
      message: "I want to know about the school bus routes.",
      status: "new",
    },
    {
      _id: "4",
      name: "Neha Gupta",
      email: "neha@example.com",
      phone: "+91 99887 66554",
      subject: "Fee Structure",
      message: "Please share the fee structure for Class 5.",
      status: "follow-up",
    },
    {
      _id: "5",
      name: "Vikas Kumar",
      email: "vikas@example.com",
      phone: "+91 90000 12345",
      subject: "School Admission",
      message: "Need information regarding admission procedure.",
      status: "resolved",
    },
  ]);

  /* ============================================================
     FILTER
  ============================================================ */

  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((enquiry) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        enquiry.name.toLowerCase().includes(searchValue) ||
        enquiry.email.toLowerCase().includes(searchValue) ||
        enquiry.phone.toLowerCase().includes(searchValue) ||
        enquiry.subject.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "all" ||
        enquiry.status?.toLowerCase() === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [enquiries, search, statusFilter]);

  /* ============================================================
     HELPERS
  ============================================================ */

  const getStatusStyle = (status?: string) => {
    switch (status?.toLowerCase()) {
      case "new":
        return "bg-blue-50 text-blue-700 border-blue-100";

      case "contacted":
        return "bg-violet-50 text-violet-700 border-violet-100";

      case "follow-up":
        return "bg-amber-50 text-amber-700 border-amber-100";

      case "resolved":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";

      default:
        return "bg-slate-50 text-slate-600 border-slate-200";
    }
  };

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
              Admissions
            </p>

            <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Enquiries
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage admission enquiries and follow-ups.
            </p>
          </div>

          <Link
            href="/admin/enquiries/create"
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
            New Enquiry
          </Link>
        </div>

        {/* ======================================================
            SUMMARY CARDS
        ======================================================= */}
        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <SummaryCard label="Total Enquiries" value={enquiries.length} />

          <SummaryCard
            label="New"
            value={enquiries.filter((item) => item.status === "new").length}
            color="blue"
          />

          <SummaryCard
            label="Follow Up"
            value={
              enquiries.filter((item) => item.status === "follow-up").length
            }
            color="amber"
          />

          <SummaryCard
            label="Resolved"
            value={
              enquiries.filter((item) => item.status === "resolved").length
            }
            color="green"
          />
        </div>

        {/* ======================================================
            TABLE CARD
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, email, phone or subject..."
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

              {/* Filters */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <FiFilter
                    size={14}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
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
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="follow-up">Follow Up</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>

                {/* Refresh */}
                <button
                  type="button"
                  title="Refresh"
                  className="
                    flex h-10 w-10 items-center justify-center
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
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/70">
                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Enquirer
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Contact
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Subject
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
                {filteredEnquiries.length > 0 ? (
                  filteredEnquiries.map((enquiry) => (
                    <tr
                      key={enquiry._id}
                      className="group transition-colors hover:bg-slate-50/60"
                    >
                      {/* Enquirer */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
                            {enquiry.name
                              .split(" ")
                              .map((word) => word[0])
                              .join("")
                              .slice(0, 2)
                              .toUpperCase()}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-xs font-semibold text-slate-800">
                              {enquiry.name}
                            </p>

                            <p className="mt-0.5 text-[10px] text-slate-400">
                              Enquiry #{enquiry._id}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="px-5 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <FiMail size={11} className="text-slate-400" />

                            <span className="text-[11px] text-slate-600">
                              {enquiry.email}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <FiPhone size={11} className="text-slate-400" />

                            <span className="text-[11px] text-slate-500">
                              {enquiry.phone}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Subject */}
                      <td className="max-w-[280px] px-5 py-4">
                        <p className="truncate text-xs font-medium text-slate-700">
                          {enquiry.subject}
                        </p>

                        <p className="mt-1 truncate text-[10px] text-slate-400">
                          {enquiry.message}
                        </p>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-4">
                        <span
                          className={`
                            inline-flex items-center
                            rounded-full
                            border
                            px-2.5 py-1
                            text-[9px]
                            font-bold
                            capitalize
                            ${getStatusStyle(enquiry.status)}
                          `}
                        >
                          {enquiry.status || "Unknown"}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            type="button"
                            title="View enquiry"
                            className="
                              flex h-8 w-8 items-center justify-center
                              rounded-lg
                              text-slate-400
                              transition
                              hover:bg-blue-50
                              hover:text-[#1e3a5f]
                            "
                          >
                            <FiEye size={14} />
                          </button>

                          <button
                            type="button"
                            title="Edit enquiry"
                            className="
                              flex h-8 w-8 items-center justify-center
                              rounded-lg
                              text-slate-400
                              transition
                              hover:bg-slate-100
                              hover:text-slate-700
                            "
                          >
                            <FiEdit2 size={14} />
                          </button>

                          <button
                            type="button"
                            title="Delete enquiry"
                            className="
                              flex h-8 w-8 items-center justify-center
                              rounded-lg
                              text-slate-400
                              transition
                              hover:bg-red-50
                              hover:text-red-600
                            "
                          >
                            <FiTrash2 size={14} />
                          </button>

                          <button
                            type="button"
                            title="More options"
                            className="
                              flex h-8 w-8 items-center justify-center
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
                  <tr>
                    <td colSpan={5} className="px-5 py-16 text-center">
                      <div className="mx-auto max-w-xs">
                        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                          <FiSearch size={17} />
                        </div>

                        <p className="mt-3 text-sm font-semibold text-slate-700">
                          No enquiries found
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Try changing your search or filter.
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
                {filteredEnquiries.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-600">
                {enquiries.length}
              </span>{" "}
              enquiries
            </p>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-lg
                  border border-slate-200
                  text-slate-400
                  transition
                  hover:bg-slate-50
                  disabled:opacity-40
                "
                disabled
              >
                <FiChevronLeft size={14} />
              </button>

              <button
                type="button"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-lg
                  bg-[#1e3a5f]
                  text-[11px]
                  font-semibold
                  text-white
                "
              >
                1
              </button>

              <button
                type="button"
                className="
                  flex h-8 w-8 items-center justify-center
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

              <button
                type="button"
                className="
                  flex h-8 w-8 items-center justify-center
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
  color?: "blue" | "amber" | "green";
};

const SummaryCard = ({ label, value, color = "blue" }: SummaryCardProps) => {
  const styles = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    green: "bg-emerald-50 text-emerald-600",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <div className="mt-2 flex items-end justify-between">
        <p className="text-xl font-bold text-slate-900">{value}</p>

        <span
          className={`flex h-7 w-7 items-center justify-center rounded-lg ${styles[color]}`}
        >
          <span className="h-2 w-2 rounded-full bg-current" />
        </span>
      </div>
    </div>
  );
};

export default EnquiryListPage;
