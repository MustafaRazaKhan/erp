"use client";

import React from "react";

import {
  FiUsers,
  FiUserPlus,
  FiBookOpen,
  FiDollarSign,
  FiCalendar,
  FiArrowUpRight,
  FiArrowRight,
  FiMoreHorizontal,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const Page = () => {
  return (
    <div className="min-h-full bg-slate-50 p-4 sm:p-5 lg:p-6">
      <div className="mx-auto max-w-[1600px]">
        {/* =====================================================
            PAGE HEADER
        ====================================================== */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Administration
            </p>

            <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Welcome back. Here&apos;s what&apos;s happening at your school
              today.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 sm:flex">
              <FiCalendar size={15} className="text-slate-400" />

              <span className="text-xs font-medium text-slate-600">
                Academic Year
              </span>

              <span className="text-xs font-bold text-[#1e3a5f]">
                2026 - 27
              </span>
            </div>

            <button
              type="button"
              className="
                flex items-center gap-2
                rounded-lg
                bg-[#1e3a5f]
                px-3.5 py-2.5
                text-xs font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-[#16324f]
              "
            >
              <FiUserPlus size={14} />
              Add Student
            </button>
          </div>
        </div>

        {/* =====================================================
            OVERVIEW CARDS
        ====================================================== */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {/* Students */}
          <DashboardCard
            title="Total Students"
            value="1,248"
            change="+8.2%"
            description="vs. previous year"
            icon={<FiUsers size={18} />}
          />

          {/* Teachers */}
          <DashboardCard
            title="Teachers & Staff"
            value="86"
            change="+4.6%"
            description="active employees"
            icon={<FiBookOpen size={18} />}
          />

          {/* Enquiries */}
          <DashboardCard
            title="New Enquiries"
            value="32"
            change="+12.5%"
            description="this month"
            icon={<FiUserPlus size={18} />}
          />

          {/* Fees */}
          <DashboardCard
            title="Fee Collection"
            value="₹18.4L"
            change="+6.8%"
            description="this academic year"
            icon={<FiDollarSign size={18} />}
          />
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.6fr_1fr]">
          {/* =================================================
              FEE COLLECTION
          ================================================== */}
          <section className="rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Fee Collection
                </h2>

                <p className="mt-0.5 text-xs text-slate-400">
                  Collection overview for 2026 - 27
                </p>
              </div>

              <button
                type="button"
                className="flex items-center gap-1 text-xs font-semibold text-[#1e3a5f] hover:underline"
              >
                View Report
                <FiArrowRight size={13} />
              </button>
            </div>

            <div className="p-5">
              {/* Summary */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-slate-400">Collected</p>

                  <p className="mt-1 text-lg font-bold text-slate-900">
                    ₹18.4L
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Outstanding</p>

                  <p className="mt-1 text-lg font-bold text-slate-900">₹4.2L</p>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <p className="text-xs text-slate-400">Collection Rate</p>

                  <p className="mt-1 text-lg font-bold text-emerald-600">
                    81.4%
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    Overall collection
                  </span>

                  <span className="text-[11px] font-bold text-slate-700">
                    81.4%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-[#1e3a5f]"
                    style={{ width: "81.4%" }}
                  />
                </div>
              </div>

              {/* Monthly Bars */}
              <div className="mt-8 flex h-40 items-end justify-between gap-2 border-b border-slate-100">
                {[
                  { month: "Apr", value: "65%" },
                  { month: "May", value: "72%" },
                  { month: "Jun", value: "58%" },
                  { month: "Jul", value: "78%" },
                  { month: "Aug", value: "69%" },
                  { month: "Sep", value: "86%" },
                ].map((item) => (
                  <div
                    key={item.month}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                  >
                    <div
                      className="w-full max-w-[36px] rounded-t-md bg-blue-100"
                      style={{ height: item.value }}
                    />

                    <span className="pb-2 text-[10px] text-slate-400">
                      {item.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              ATTENDANCE
          ================================================== */}
          <section className="rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Today&apos;s Attendance
                </h2>

                <p className="mt-0.5 text-xs text-slate-400">
                  Student attendance
                </p>
              </div>

              <FiMoreHorizontal size={18} className="text-slate-400" />
            </div>

            <div className="p-5">
              <div className="flex items-center justify-center py-3">
                <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[14px] border-slate-100">
                  <div className="absolute inset-[-14px] rounded-full border-[14px] border-emerald-500 border-b-transparent border-l-transparent" />

                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-900">94.2%</p>

                    <p className="mt-0.5 text-[10px] text-slate-400">Present</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <AttendanceItem label="Present" value="1,176" type="success" />

                <AttendanceItem label="Absent" value="52" type="danger" />

                <AttendanceItem label="Leave" value="20" type="warning" />
              </div>

              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                View Attendance
                <FiArrowRight size={13} />
              </button>
            </div>
          </section>
        </div>

        {/* =====================================================
            LOWER CONTENT
        ====================================================== */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* =================================================
              RECENT ENQUIRIES
          ================================================== */}
          <section className="rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Recent Enquiries
                </h2>

                <p className="mt-0.5 text-xs text-slate-400">
                  Latest admission enquiries
                </p>
              </div>

              <button
                type="button"
                className="text-xs font-semibold text-[#1e3a5f] hover:underline"
              >
                View All
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              <EnquiryRow
                name="Rahul Sharma"
                subject="Admission for Class 6"
                time="10 min ago"
                status="New"
              />

              <EnquiryRow
                name="Priya Verma"
                subject="Admission for Class 3"
                time="42 min ago"
                status="Contacted"
              />

              <EnquiryRow
                name="Aman Singh"
                subject="Transport enquiry"
                time="1 hour ago"
                status="New"
              />

              <EnquiryRow
                name="Neha Gupta"
                subject="Fee structure enquiry"
                time="2 hours ago"
                status="Follow Up"
              />
            </div>
          </section>

          {/* =================================================
              QUICK ACTIONS + ACTIVITIES
          ================================================== */}
          <section className="rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-5 py-4">
              <h2 className="text-sm font-bold text-slate-900">
                Quick Actions
              </h2>

              <p className="mt-0.5 text-xs text-slate-400">
                Frequently used administration tasks
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3">
              <QuickAction
                icon={<FiUserPlus size={17} />}
                title="Add Student"
              />

              <QuickAction
                icon={<FiUsers size={17} />}
                title="Manage Students"
              />

              <QuickAction
                icon={<FiBookOpen size={17} />}
                title="Manage Classes"
              />

              <QuickAction
                icon={<FiDollarSign size={17} />}
                title="Fee Management"
              />

              <QuickAction icon={<FiCalendar size={17} />} title="Attendance" />

              <QuickAction
                icon={<FiArrowUpRight size={17} />}
                title="View Reports"
              />
            </div>

            {/* System Activity */}
            <div className="border-t border-slate-100 px-5 py-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-800">
                    Recent Activity
                  </h3>
                </div>

                <FiClock size={14} className="text-slate-400" />
              </div>

              <div className="space-y-3">
                <Activity
                  icon={<FiCheckCircle size={13} />}
                  text="Fee payment recorded"
                  time="5 min ago"
                  type="success"
                />

                <Activity
                  icon={<FiUserPlus size={13} />}
                  text="New student registered"
                  time="18 min ago"
                  type="info"
                />

                <Activity
                  icon={<FiAlertCircle size={13} />}
                  text="Fee payment pending"
                  time="32 min ago"
                  type="warning"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   DASHBOARD CARD
============================================================ */

type DashboardCardProps = {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: React.ReactNode;
};

const DashboardCard = ({
  title,
  value,
  change,
  description,
  icon,
}: DashboardCardProps) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 transition-shadow duration-200 hover:shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500">{title}</p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#1e3a5f]">
          {icon}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5">
        <span className="text-[10px] font-bold text-emerald-600">{change}</span>

        <span className="text-[10px] text-slate-400">{description}</span>
      </div>
    </div>
  );
};

/* ============================================================
   ATTENDANCE ITEM
============================================================ */

type AttendanceItemProps = {
  label: string;
  value: string;
  type: "success" | "danger" | "warning";
};

const AttendanceItem = ({ label, value, type }: AttendanceItemProps) => {
  const styles = {
    success: "bg-emerald-50 text-emerald-700",
    danger: "bg-red-50 text-red-600",
    warning: "bg-amber-50 text-amber-700",
  };

  return (
    <div className={`rounded-lg px-2 py-2.5 text-center ${styles[type]}`}>
      <p className="text-sm font-bold">{value}</p>

      <p className="mt-0.5 text-[9px] font-medium opacity-80">{label}</p>
    </div>
  );
};

/* ============================================================
   ENQUIRY ROW
============================================================ */

type EnquiryRowProps = {
  name: string;
  subject: string;
  time: string;
  status: string;
};

const EnquiryRow = ({ name, subject, time, status }: EnquiryRowProps) => {
  return (
    <div className="flex items-center gap-3 px-5 py-3.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
        {name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .slice(0, 2)}
      </div>

      <div className="min-w-0 flex-1">
        <p className=" text-xs font-semibold text-slate-800">{name}</p>

        <p className="mt-0.5  text-[10px] text-slate-400">{subject}</p>
      </div>

      <div className="hidden text-right sm:block">
        <span className="text-[9px] font-semibold text-[#1e3a5f]">
          {status}
        </span>

        <p className="mt-0.5 text-[9px] text-slate-400">{time}</p>
      </div>
    </div>
  );
};

/* ============================================================
   QUICK ACTION
============================================================ */

type QuickActionProps = {
  icon: React.ReactNode;
  title: string;
};

const QuickAction = ({ icon, title }: QuickActionProps) => {
  return (
    <button
      type="button"
      className="
        group flex flex-col items-center justify-center
        rounded-lg
        border border-slate-200
        bg-white
        px-3 py-4
        text-center
        transition-all duration-200
        hover:border-blue-100
        hover:bg-blue-50/40
      "
    >
      <span
        className="
          flex h-9 w-9 items-center justify-center
          rounded-lg
          bg-slate-50
          text-slate-500
          transition-colors
          group-hover:bg-blue-50
          group-hover:text-[#1e3a5f]
        "
      >
        {icon}
      </span>

      <span className="mt-2 text-[10px] font-semibold text-slate-600">
        {title}
      </span>
    </button>
  );
};

/* ============================================================
   ACTIVITY
============================================================ */

type ActivityProps = {
  icon: React.ReactNode;
  text: string;
  time: string;
  type: "success" | "info" | "warning";
};

const Activity = ({ icon, text, time, type }: ActivityProps) => {
  const styles = {
    success: "bg-emerald-50 text-emerald-600",
    info: "bg-blue-50 text-blue-600",
    warning: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${styles[type]}`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className=" text-[10px] font-medium text-slate-600">{text}</p>

        <p className="mt-0.5 text-[9px] text-slate-400">{time}</p>
      </div>
    </div>
  );
};

export default Page;
