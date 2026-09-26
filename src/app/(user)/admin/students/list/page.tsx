"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FiActivity,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiEdit2,
  FiEye,
  FiFilter,
  FiMail,
  FiMoreVertical,
  FiPhone,
  FiPlus,
  FiRefreshCw,
  FiSearch,
  FiUsers,
  FiUserCheck,
  FiUserX,
} from "react-icons/fi";

type StudentStatus = "active" | "inactive";

type Student = {
  _id: string;
  admissionNo: string;
  name: string;
  email: string;
  phone: string;
  className: string;
  section: string;
  rollNo: string;
  parentName: string;
  parentPhone: string;
  attendance: number;
  feePaid: number;
  feeTotal: number;
  status: StudentStatus;
};

const students: Student[] = [
  {
    _id: "STU-1001",
    admissionNo: "KPS-2024-1001",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    className: "Class 6",
    section: "A",
    rollNo: "18",
    parentName: "Rajesh Sharma",
    parentPhone: "+91 98765 40001",
    attendance: 94.2,
    feePaid: 42000,
    feeTotal: 48000,
    status: "active",
  },
  {
    _id: "STU-1002",
    admissionNo: "KPS-2024-1002",
    name: "Ananya Verma",
    email: "ananya.verma@example.com",
    phone: "+91 98765 11223",
    className: "Class 5",
    section: "B",
    rollNo: "07",
    parentName: "Amit Verma",
    parentPhone: "+91 98765 22001",
    attendance: 97.4,
    feePaid: 48000,
    feeTotal: 48000,
    status: "active",
  },
  {
    _id: "STU-1003",
    admissionNo: "KPS-2025-1003",
    name: "Arjun Singh",
    email: "arjun.singh@example.com",
    phone: "+91 98765 33445",
    className: "Class 7",
    section: "A",
    rollNo: "12",
    parentName: "Vikram Singh",
    parentPhone: "+91 98765 33001",
    attendance: 89.6,
    feePaid: 36000,
    feeTotal: 48000,
    status: "active",
  },
  {
    _id: "STU-1004",
    admissionNo: "KPS-2025-1004",
    name: "Priya Gupta",
    email: "priya.gupta@example.com",
    phone: "+91 98765 55667",
    className: "Class 4",
    section: "A",
    rollNo: "21",
    parentName: "Sanjay Gupta",
    parentPhone: "+91 98765 44001",
    attendance: 96.1,
    feePaid: 45000,
    feeTotal: 48000,
    status: "active",
  },
  {
    _id: "STU-1005",
    admissionNo: "KPS-2025-1005",
    name: "Kabir Khan",
    email: "kabir.khan@example.com",
    phone: "+91 98765 77889",
    className: "Class 8",
    section: "B",
    rollNo: "05",
    parentName: "Imran Khan",
    parentPhone: "+91 98765 55001",
    attendance: 91.8,
    feePaid: 30000,
    feeTotal: 48000,
    status: "active",
  },
  {
    _id: "STU-1006",
    admissionNo: "KPS-2023-1006",
    name: "Meera Joshi",
    email: "meera.joshi@example.com",
    phone: "+91 98765 88990",
    className: "Class 6",
    section: "B",
    rollNo: "14",
    parentName: "Rakesh Joshi",
    parentPhone: "+91 98765 66001",
    attendance: 87.3,
    feePaid: 48000,
    feeTotal: 48000,
    status: "active",
  },
  {
    _id: "STU-1007",
    admissionNo: "KPS-2026-1007",
    name: "Aditya Mishra",
    email: "aditya.mishra@example.com",
    phone: "+91 98765 99112",
    className: "Class 3",
    section: "A",
    rollNo: "09",
    parentName: "Pankaj Mishra",
    parentPhone: "+91 98765 77001",
    attendance: 92.5,
    feePaid: 24000,
    feeTotal: 48000,
    status: "active",
  },
  {
    _id: "STU-1008",
    admissionNo: "KPS-2022-1008",
    name: "Sana Ali",
    email: "sana.ali@example.com",
    phone: "+91 98765 22334",
    className: "Class 9",
    section: "A",
    rollNo: "03",
    parentName: "Faizan Ali",
    parentPhone: "+91 98765 88001",
    attendance: 78.4,
    feePaid: 28000,
    feeTotal: 48000,
    status: "inactive",
  },
];

const classOptions = [
  "All Classes",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
];

const sectionOptions = ["All Sections", "A", "B", "C", "D"];

export default function StudentListPage() {
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("All Classes");
  const [sectionFilter, setSectionFilter] = useState("All Sections");
  const [statusFilter, setStatusFilter] = useState<"all" | StudentStatus>(
    "all",
  );

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        student.name.toLowerCase().includes(searchValue) ||
        student.admissionNo.toLowerCase().includes(searchValue) ||
        student.email.toLowerCase().includes(searchValue) ||
        student.phone.includes(searchValue) ||
        student.parentName.toLowerCase().includes(searchValue);

      const matchesClass =
        classFilter === "All Classes" || student.className === classFilter;

      const matchesSection =
        sectionFilter === "All Sections" || student.section === sectionFilter;

      const matchesStatus =
        statusFilter === "all" || student.status === statusFilter;

      return matchesSearch && matchesClass && matchesSection && matchesStatus;
    });
  }, [search, classFilter, sectionFilter, statusFilter]);

  const activeStudents = students.filter(
    (student) => student.status === "active",
  ).length;

  const inactiveStudents = students.filter(
    (student) => student.status === "inactive",
  ).length;

  const averageAttendance =
    students.reduce((total, student) => total + student.attendance, 0) /
    students.length;

  const totalOutstanding = students.reduce(
    (total, student) => total + (student.feeTotal - student.feePaid),
    0,
  );

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-5 lg:p-6">
      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <div className="mb-5 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
            <span>Administration</span>
            <span>/</span>
            <span className="text-slate-700">Students</span>
          </div>

          <h1 className="text-xl font-semibold text-slate-900">Students</h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage student records, academic placement, attendance and fee
            information.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 sm:flex">
            <span className="text-xs text-slate-500">Academic Year</span>

            <span className="text-sm font-semibold text-slate-800">
              2026 - 27
            </span>

            <FiChevronDown size={14} className="text-slate-400" />
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <FiDownload size={15} />
            Export
          </button>

          <Link
            href="/admin/students/create"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1e3a5f] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#16324f]"
          >
            <FiPlus size={16} />
            Add Student
          </Link>
        </div>
      </div>

      {/* =====================================================
          SUMMARY CARDS
      ====================================================== */}
      <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          label="Total Students"
          value={students.length.toLocaleString()}
          helper="Current academic year"
          icon={<FiUsers size={18} />}
        />

        <SummaryCard
          label="Active Students"
          value={activeStudents.toLocaleString()}
          helper="Currently enrolled"
          icon={<FiUserCheck size={18} />}
          valueClassName="text-green-600"
        />

        <SummaryCard
          label="Average Attendance"
          value={`${averageAttendance.toFixed(1)}%`}
          helper="Across all students"
          icon={<FiActivity size={18} />}
        />

        <SummaryCard
          label="Fee Outstanding"
          value={`₹${totalOutstanding.toLocaleString("en-IN")}`}
          helper="Current academic year"
          icon={<FiUserX size={18} />}
          valueClassName="text-amber-600"
        />
      </div>

      {/* =====================================================
          STUDENT MANAGEMENT
      ====================================================== */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* Section header */}
        <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Student Directory
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              {filteredStudents.length} student
              {filteredStudents.length !== 1 ? "s" : ""} matching the selected
              filters
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 lg:self-auto"
          >
            <FiRefreshCw size={14} />
            Refresh
          </button>
        </div>

        {/* =================================================
            FILTER BAR
        ================================================== */}
        <div className="border-b border-slate-200 bg-slate-50/70 px-5 py-4">
          <div className="flex flex-col gap-3 xl:flex-row">
            {/* Search */}
            <div className="relative min-w-0 flex-1">
              <FiSearch
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by student name, admission no., parent or phone..."
                className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1e3a5f] focus:ring-2 focus:ring-blue-50"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:w-[620px]">
              <FilterSelect
                value={classFilter}
                onChange={setClassFilter}
                options={classOptions}
              />

              <FilterSelect
                value={sectionFilter}
                onChange={setSectionFilter}
                options={sectionOptions}
              />

              <FilterSelect
                value={
                  statusFilter === "all"
                    ? "All Status"
                    : statusFilter === "active"
                      ? "Active"
                      : "Inactive"
                }
                onChange={(value) => {
                  if (value === "All Status") {
                    setStatusFilter("all");
                  } else if (value === "Active") {
                    setStatusFilter("active");
                  } else {
                    setStatusFilter("inactive");
                  }
                }}
                options={["All Status", "Active", "Inactive"]}
                icon={<FiFilter size={14} />}
              />
            </div>
          </div>
        </div>

        {/* =================================================
            DESKTOP TABLE
        ================================================== */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr className="border-b border-slate-200 bg-white">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Student
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Class
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Parent / Guardian
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Attendance
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Fee Status
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>

                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <StudentTableRow key={student._id} student={student} />
              ))}
            </tbody>
          </table>
        </div>

        {/* =================================================
            MOBILE / TABLET CARDS
        ================================================== */}
        <div className="divide-y divide-slate-200 lg:hidden">
          {filteredStudents.map((student) => (
            <StudentMobileCard key={student._id} student={student} />
          ))}
        </div>

        {/* =================================================
            EMPTY STATE
        ================================================== */}
        {filteredStudents.length === 0 && (
          <div className="px-5 py-16 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
              <FiUsers size={21} />
            </div>

            <h3 className="mt-4 text-sm font-semibold text-slate-900">
              No students found
            </h3>

            <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">
              Try changing your search or filters to find the student you are
              looking for.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setClassFilter("All Classes");
                setSectionFilter("All Sections");
                setStatusFilter("all");
              }}
              className="mt-4 text-sm font-medium text-[#1e3a5f] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* =================================================
            PAGINATION
        ================================================== */}
        {filteredStudents.length > 0 && (
          <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Showing <span className="font-medium text-slate-700">1</span> to{" "}
              <span className="font-medium text-slate-700">
                {filteredStudents.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-slate-700">
                {filteredStudents.length}
              </span>{" "}
              students
            </p>

            <div className="flex items-center gap-1">
              <PaginationButton icon={<FiChevronLeft size={15} />} disabled />

              <PaginationButton label="1" active />

              <PaginationButton label="2" />

              <PaginationButton label="3" />

              <PaginationButton icon={<FiChevronRight size={15} />} />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

/* =========================================================
   SUMMARY CARD
========================================================= */

function SummaryCard({
  label,
  value,
  helper,
  icon,
  valueClassName = "text-slate-900",
}: {
  label: string;
  value: string;
  helper: string;
  icon: React.ReactNode;
  valueClassName?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#1e3a5f]">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-xs font-medium text-slate-500">{label}</p>

      <p className={`mt-1 text-xl font-semibold ${valueClassName}`}>{value}</p>

      <p className="mt-1 text-xs text-slate-400">{helper}</p>
    </div>
  );
}

/* =========================================================
   FILTER SELECT
========================================================= */

function FilterSelect({
  value,
  onChange,
  options,
  icon,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  icon?: React.ReactNode;
}) {
  return (
    <div className="relative">
      {icon && (
        <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-400">
          {icon}
        </span>
      )}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pr-9 text-sm text-slate-700 outline-none transition focus:border-[#1e3a5f] focus:ring-2 focus:ring-blue-50 ${
          icon ? "pl-9" : "px-3"
        }`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <FiChevronDown
        size={14}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}

/* =========================================================
   STUDENT TABLE ROW
========================================================= */

function StudentTableRow({ student }: { student: Student }) {
  const outstanding = student.feeTotal - student.feePaid;

  const feePercentage = Math.round((student.feePaid / student.feeTotal) * 100);

  return (
    <tr className="border-b border-slate-100 transition hover:bg-slate-50/70">
      {/* Student */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <StudentAvatar name={student.name} />

          <div className="min-w-0">
            <Link
              href={`/admin/students/${student._id}`}
              className="block  text-sm font-semibold text-slate-900 hover:text-[#1e3a5f]"
            >
              {student.name}
            </Link>

            <p className="mt-0.5 text-xs text-slate-500">
              {student.admissionNo}
            </p>
          </div>
        </div>
      </td>

      {/* Class */}
      <td className="px-4 py-4">
        <div>
          <p className="text-sm font-medium text-slate-800">
            {student.className} - {student.section}
          </p>

          <p className="mt-0.5 text-xs text-slate-500">
            Roll No. {student.rollNo}
          </p>
        </div>
      </td>

      {/* Parent */}
      <td className="px-4 py-4">
        <p className="text-sm font-medium text-slate-800">
          {student.parentName}
        </p>

        <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
          <FiPhone size={12} />
          {student.parentPhone}
        </div>
      </td>

      {/* Attendance */}
      <td className="px-4 py-4">
        <div className="w-28">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-800">
              {student.attendance}%
            </span>

            <AttendanceBadge attendance={student.attendance} />
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full ${
                student.attendance >= 90
                  ? "bg-green-500"
                  : student.attendance >= 80
                    ? "bg-amber-500"
                    : "bg-red-500"
              }`}
              style={{
                width: `${student.attendance}%`,
              }}
            />
          </div>
        </div>
      </td>

      {/* Fees */}
      <td className="px-4 py-4">
        <div className="w-32">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              {feePercentage}% paid
            </span>

            {outstanding === 0 ? (
              <span className="text-xs font-medium text-green-600">Paid</span>
            ) : (
              <span className="text-xs font-medium text-amber-600">
                ₹{outstanding.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full ${
                outstanding === 0 ? "bg-green-500" : "bg-[#1e3a5f]"
              }`}
              style={{
                width: `${feePercentage}%`,
              }}
            />
          </div>
        </div>
      </td>

      {/* Status */}
      <td className="px-4 py-4">
        <StudentStatusBadge status={student.status} />
      </td>

      {/* Actions */}
      <td className="px-5 py-4">
        <div className="flex items-center justify-end gap-1">
          <ActionButton
            icon={<FiEye size={15} />}
            title="View student"
            href={`/admin/students/${student._id}`}
          />

          <ActionButton
            icon={<FiEdit2 size={14} />}
            title="Edit student"
            href={`/admin/students/${student._id}/edit`}
          />

          <button
            type="button"
            title="More actions"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <FiMoreVertical size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}

/* =========================================================
   MOBILE STUDENT CARD
========================================================= */

function StudentMobileCard({ student }: { student: Student }) {
  const outstanding = student.feeTotal - student.feePaid;

  return (
    <div className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <StudentAvatar name={student.name} />

          <div className="min-w-0">
            <Link
              href={`/admin/students/${student._id}`}
              className="block  text-sm font-semibold text-slate-900"
            >
              {student.name}
            </Link>

            <p className="mt-0.5 text-xs text-slate-500">
              {student.admissionNo}
            </p>
          </div>
        </div>

        <StudentStatusBadge status={student.status} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <MobileInfo
          label="Class"
          value={`${student.className} - ${student.section}`}
        />

        <MobileInfo label="Roll No." value={student.rollNo} />

        <MobileInfo label="Parent" value={student.parentName} />

        <MobileInfo label="Attendance" value={`${student.attendance}%`} />
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <div>
          <p className="text-xs text-slate-400">Fee Outstanding</p>

          <p
            className={`mt-1 text-sm font-semibold ${
              outstanding === 0 ? "text-green-600" : "text-amber-600"
            }`}
          >
            {outstanding === 0
              ? "Fully Paid"
              : `₹${outstanding.toLocaleString("en-IN")}`}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <ActionButton
            icon={<FiEye size={15} />}
            title="View student"
            href={`/admin/students/${student._id}`}
          />

          <ActionButton
            icon={<FiEdit2 size={14} />}
            title="Edit student"
            href={`/admin/students/${student._id}/edit`}
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STUDENT AVATAR
========================================================= */

function StudentAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((item) => item[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eef3f7] text-xs font-semibold text-[#1e3a5f]">
      {initials}
    </div>
  );
}

/* =========================================================
   ATTENDANCE BADGE
========================================================= */

function AttendanceBadge({ attendance }: { attendance: number }) {
  if (attendance >= 90) {
    return <span className="text-[10px] font-medium text-green-600">Good</span>;
  }

  if (attendance >= 80) {
    return (
      <span className="text-[10px] font-medium text-amber-600">Watch</span>
    );
  }

  return <span className="text-[10px] font-medium text-red-600">Low</span>;
}

/* =========================================================
   STATUS BADGE
========================================================= */

function StudentStatusBadge({ status }: { status: StudentStatus }) {
  const active = status === "active";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        active ? "bg-green-50 text-green-600" : "bg-slate-100 text-slate-500"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          active ? "bg-green-500" : "bg-slate-400"
        }`}
      />

      {active ? "Active" : "Inactive"}
    </span>
  );
}

/* =========================================================
   MOBILE INFO
========================================================= */

function MobileInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-slate-50 p-3">
      <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1  text-sm font-medium text-slate-800">{value}</p>
    </div>
  );
}

/* =========================================================
   ACTION BUTTON
========================================================= */

function ActionButton({
  icon,
  title,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      title={title}
      className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-[#1e3a5f]"
    >
      {icon}
    </Link>
  );
}

/* =========================================================
   PAGINATION BUTTON
========================================================= */

function PaginationButton({
  label,
  icon,
  active = false,
  disabled = false,
}: {
  label?: string;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-xs font-medium transition ${
        active
          ? "bg-[#1e3a5f] text-white"
          : disabled
            ? "cursor-not-allowed text-slate-300"
            : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
      }`}
    >
      {icon || label}
    </button>
  );
}
