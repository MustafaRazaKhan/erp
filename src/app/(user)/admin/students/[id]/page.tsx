"use client";

import Link from "next/link";
import {
  FiArrowLeft,
  FiCalendar,
  FiCheckCircle,
  FiChevronRight,
  FiClock,
  FiDownload,
  FiEdit2,
  FiFileText,
  FiMail,
  FiMapPin,
  FiMoreVertical,
  FiPhone,
  FiUser,
  FiUsers,
  FiXCircle,
} from "react-icons/fi";

type StudentStatus = "active" | "inactive";

type Student = {
  id: string;
  admissionNo: string;
  name: string;
  gender: string;
  dateOfBirth: string;
  bloodGroup: string;
  phone: string;
  email: string;
  address: string;

  className: string;
  section: string;
  rollNo: string;
  academicYear: string;
  admissionDate: string;

  status: StudentStatus;

  fatherName: string;
  fatherPhone: string;
  motherName: string;
  motherPhone: string;
  guardianName: string;
  guardianRelation: string;

  attendance: number;
  feePaid: number;
  feeTotal: number;
};

const student: Student = {
  id: "STU-1024",
  admissionNo: "KPS-2024-1024",
  name: "Rahul Sharma",
  gender: "Male",
  dateOfBirth: "14 August 2014",
  bloodGroup: "B+",
  phone: "+91 98765 43210",
  email: "rahul.sharma@example.com",
  address: "Civil Lines, Bareilly, Uttar Pradesh",

  className: "Class 6",
  section: "A",
  rollNo: "18",
  academicYear: "2026 - 27",
  admissionDate: "12 April 2024",

  status: "active",

  fatherName: "Rajesh Sharma",
  fatherPhone: "+91 98765 40001",
  motherName: "Neha Sharma",
  motherPhone: "+91 98765 40002",
  guardianName: "Rajesh Sharma",
  guardianRelation: "Father",

  attendance: 94.2,
  feePaid: 42000,
  feeTotal: 48000,
};

const activities = [
  {
    title: "Fee payment recorded",
    description: "₹12,000 payment received",
    date: "Today, 10:32 AM",
    icon: <FiCheckCircle size={15} />,
  },
  {
    title: "Attendance marked",
    description: "Present for today's classes",
    date: "Today, 8:45 AM",
    icon: <FiCalendar size={15} />,
  },
  {
    title: "Class assignment updated",
    description: "Assigned to Class 6 - A",
    date: "01 Apr 2026",
    icon: <FiUsers size={15} />,
  },
  {
    title: "Student profile updated",
    description: "Contact information updated",
    date: "28 Mar 2026",
    icon: <FiUser size={15} />,
  },
];

export default function StudentProfilePage() {
  const feePercentage = Math.round((student.feePaid / student.feeTotal) * 100);

  const feeOutstanding = student.feeTotal - student.feePaid;

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-5 lg:p-6">
      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/admin/students"
              className="transition-colors hover:text-[#1e3a5f]"
            >
              Students
            </Link>

            <FiChevronRight size={14} />

            <span className="text-slate-700">Student Profile</span>
          </div>

          <h1 className="text-xl font-semibold text-slate-900">
            Student Profile
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            View student information, academic records, attendance and fee
            details.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/students"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <FiArrowLeft size={16} />
            Back
          </Link>

          <Link
            href={`/admin/students/${student.id}/edit`}
            className="inline-flex items-center gap-2 rounded-lg bg-[#1e3a5f] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#16324f]"
          >
            <FiEdit2 size={15} />
            Edit Student
          </Link>
        </div>
      </div>

      {/* =====================================================
          STUDENT HEADER
      ====================================================== */}
      <section className="mb-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="h-24 bg-[#1e3a5f]" />

        <div className="px-5 pb-5">
          <div className="-mt-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              {/* Student Avatar */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border-4 border-white bg-slate-200 text-2xl font-semibold text-[#1e3a5f] shadow-sm">
                RS
              </div>

              <div className="pb-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-semibold text-slate-900">
                    {student.name}
                  </h2>

                  <StatusBadge status={student.status} />
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                  <span>
                    Admission No:{" "}
                    <strong className="font-medium text-slate-700">
                      {student.admissionNo}
                    </strong>
                  </span>

                  <span className="hidden text-slate-300 sm:inline">•</span>

                  <span>
                    {student.className} - {student.section}
                  </span>

                  <span className="hidden text-slate-300 sm:inline">•</span>

                  <span>Roll No. {student.rollNo}</span>
                </div>
              </div>
            </div>

            {/* Header actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <FiDownload size={15} />
                Export
              </button>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <FiMoreVertical size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK STATISTICS
      ====================================================== */}
      <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Current Class"
          value={`${student.className} - ${student.section}`}
          helper={`Academic Year ${student.academicYear}`}
          icon={<FiUsers size={18} />}
        />

        <StatCard
          label="Attendance"
          value={`${student.attendance}%`}
          helper="Current academic year"
          icon={<FiCalendar size={18} />}
          valueClassName="text-green-600"
        />

        <StatCard
          label="Fee Paid"
          value={`₹${student.feePaid.toLocaleString("en-IN")}`}
          helper={`₹${feeOutstanding.toLocaleString("en-IN")} outstanding`}
          icon={<FiFileText size={18} />}
        />

        <StatCard
          label="Admission Date"
          value={student.admissionDate}
          helper="Student since 2024"
          icon={<FiClock size={18} />}
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        {/* ===================================================
            LEFT COLUMN
        ==================================================== */}
        <div className="space-y-5">
          {/* Personal Information */}
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <SectionHeader
              title="Personal Information"
              description="Basic identity and contact details"
            />

            <div className="grid grid-cols-1 gap-x-8 gap-y-5 p-5 sm:grid-cols-2 lg:grid-cols-3">
              <InfoItem label="Full Name" value={student.name} />

              <InfoItem label="Gender" value={student.gender} />

              <InfoItem label="Date of Birth" value={student.dateOfBirth} />

              <InfoItem label="Blood Group" value={student.bloodGroup} />

              <InfoItem
                label="Phone Number"
                value={student.phone}
                icon={<FiPhone size={14} />}
              />

              <InfoItem
                label="Email Address"
                value={student.email}
                icon={<FiMail size={14} />}
              />

              <div className="sm:col-span-2 lg:col-span-3">
                <InfoItem
                  label="Residential Address"
                  value={student.address}
                  icon={<FiMapPin size={14} />}
                />
              </div>
            </div>
          </section>

          {/* Academic Information */}
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <SectionHeader
              title="Academic Information"
              description="Current academic placement and admission details"
            />

            <div className="grid grid-cols-1 gap-x-8 gap-y-5 p-5 sm:grid-cols-2 lg:grid-cols-3">
              <InfoItem label="Academic Year" value={student.academicYear} />

              <InfoItem label="Class" value={student.className} />

              <InfoItem label="Section" value={student.section} />

              <InfoItem label="Roll Number" value={student.rollNo} />

              <InfoItem label="Admission Number" value={student.admissionNo} />

              <InfoItem label="Admission Date" value={student.admissionDate} />
            </div>
          </section>

          {/* Parent / Guardian */}
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <SectionHeader
              title="Parent & Guardian Information"
              description="Primary contacts associated with the student"
            />

            <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
              <GuardianCard
                relation="Father"
                name={student.fatherName}
                phone={student.fatherPhone}
              />

              <GuardianCard
                relation="Mother"
                name={student.motherName}
                phone={student.motherPhone}
              />

              <div className="md:col-span-2">
                <GuardianCard
                  relation={`Primary Guardian • ${student.guardianRelation}`}
                  name={student.guardianName}
                  phone={student.fatherPhone}
                  primary
                />
              </div>
            </div>
          </section>

          {/* Attendance */}
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <SectionHeader
              title="Attendance Overview"
              description="Attendance performance for the current academic year"
              action="View Full Attendance"
            />

            <div className="p-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-[180px_1fr] md:items-center">
                {/* Percentage */}
                <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-5">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-green-100">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-900">
                        {student.attendance}%
                      </p>

                      <p className="text-xs text-slate-500">Attendance</p>
                    </div>
                  </div>
                </div>

                {/* Attendance details */}
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Attendance Performance
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Based on attendance recorded so far.
                      </p>
                    </div>

                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
                      Good Standing
                    </span>
                  </div>

                  <div className="mb-5 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-green-500"
                      style={{
                        width: `${student.attendance}%`,
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <AttendanceStat
                      label="Present"
                      value="142"
                      icon={<FiCheckCircle size={15} />}
                      className="text-green-600"
                    />

                    <AttendanceStat
                      label="Absent"
                      value="7"
                      icon={<FiXCircle size={15} />}
                      className="text-red-500"
                    />

                    <AttendanceStat
                      label="Leave"
                      value="2"
                      icon={<FiClock size={15} />}
                      className="text-amber-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ===================================================
            RIGHT COLUMN
        ==================================================== */}
        <aside className="space-y-5">
          {/* Fee Summary */}
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <SectionHeader
              title="Fee Summary"
              description="Current academic year"
              action="View Payments"
            />

            <div className="p-5">
              <div className="mb-5">
                <div className="mb-2 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Total Fee</p>

                    <p className="mt-1 text-xl font-semibold text-slate-900">
                      ₹{student.feeTotal.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-green-600">
                    {feePercentage}% Paid
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{
                      width: `${feePercentage}%`,
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <FeeItem
                  label="Paid"
                  value={`₹${student.feePaid.toLocaleString("en-IN")}`}
                  className="text-green-600"
                />

                <FeeItem
                  label="Outstanding"
                  value={`₹${feeOutstanding.toLocaleString("en-IN")}`}
                  className="text-red-500"
                />
              </div>

              <div className="mt-4 rounded-lg border border-amber-100 bg-amber-50 p-3">
                <p className="text-xs font-medium text-amber-700">
                  Outstanding balance
                </p>

                <p className="mt-1 text-xs text-amber-600">
                  ₹{feeOutstanding.toLocaleString("en-IN")} is pending for the
                  current academic year.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Card */}
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <SectionHeader
              title="Primary Contact"
              description="Parent / guardian contact"
            />

            <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-[#1e3a5f]">
                  <FiUser size={18} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {student.guardianName}
                  </p>

                  <p className="text-xs text-slate-500">
                    {student.guardianRelation}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <ContactItem
                  icon={<FiPhone size={15} />}
                  value={student.fatherPhone}
                />

                <ContactItem
                  icon={<FiMail size={15} />}
                  value={student.email}
                />

                <ContactItem
                  icon={<FiMapPin size={15} />}
                  value={student.address}
                />
              </div>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <SectionHeader
              title="Recent Activity"
              description="Latest student record activity"
            />

            <div className="p-5">
              <div className="space-y-5">
                {activities.map((activity, index) => (
                  <ActivityItem
                    key={activity.title}
                    activity={activity}
                    last={index === activities.length - 1}
                  />
                ))}
              </div>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>

        <p className="mt-1 text-xs text-slate-500">{description}</p>
      </div>

      {action && (
        <button
          type="button"
          className="hidden text-xs font-medium text-[#1e3a5f] transition hover:text-[#16324f] sm:block"
        >
          {action}
        </button>
      )}
    </div>
  );
}

/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({ status }: { status: StudentStatus }) {
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
   STAT CARD
========================================================= */

function StatCard({
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

      <p className={`mt-1 text-lg font-semibold ${valueClassName}`}>{value}</p>

      <p className="mt-1 text-xs text-slate-400">{helper}</p>
    </div>
  );
}

/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <div className="mt-1.5 flex items-start gap-2">
        {icon && <span className="mt-0.5 text-slate-400">{icon}</span>}

        <p className="text-sm font-medium leading-5 text-slate-800">{value}</p>
      </div>
    </div>
  );
}

/* =========================================================
   GUARDIAN CARD
========================================================= */

function GuardianCard({
  relation,
  name,
  phone,
  primary = false,
}: {
  relation: string;
  name: string;
  phone: string;
  primary?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        primary ? "border-blue-100 bg-blue-50" : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              primary ? "bg-white text-[#1e3a5f]" : "bg-white text-slate-500"
            }`}
          >
            <FiUser size={17} />
          </div>

          <div>
            <p className="text-xs font-medium text-slate-500">{relation}</p>

            <p className="mt-0.5 text-sm font-semibold text-slate-900">
              {name}
            </p>
          </div>
        </div>

        <a
          href={`tel:${phone}`}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#1e3a5f] transition hover:bg-slate-100"
        >
          <FiPhone size={15} />
        </a>
      </div>

      <div className="mt-3 border-t border-slate-200 pt-3">
        <p className="text-xs text-slate-500">Phone</p>

        <p className="mt-1 text-sm font-medium text-slate-800">{phone}</p>
      </div>
    </div>
  );
}

/* =========================================================
   ATTENDANCE STAT
========================================================= */

function AttendanceStat({
  label,
  value,
  icon,
  className,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  className: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <div className={`flex items-center gap-1.5 ${className}`}>
        {icon}

        <span className="text-xs font-medium">{label}</span>
      </div>

      <p className="mt-1 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}

/* =========================================================
   FEE ITEM
========================================================= */

function FeeItem({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
      <p className="text-xs text-slate-500">{label}</p>

      <p className={`mt-1 text-sm font-semibold ${className}`}>{value}</p>
    </div>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-slate-400">{icon}</span>

      <span className="text-sm leading-5 text-slate-700">{value}</span>
    </div>
  );
}

/* =========================================================
   ACTIVITY ITEM
========================================================= */

function ActivityItem({
  activity,
  last,
}: {
  activity: {
    title: string;
    description: string;
    date: string;
    icon: React.ReactNode;
  };
  last: boolean;
}) {
  return (
    <div className="relative flex gap-3">
      {!last && (
        <div className="absolute left-[15px] top-8 h-full w-px bg-slate-200" />
      )}

      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1e3a5f]">
        {activity.icon}
      </div>

      <div className="min-w-0 pb-1">
        <p className="text-sm font-medium text-slate-900">{activity.title}</p>

        <p className="mt-0.5 text-xs text-slate-500">{activity.description}</p>

        <p className="mt-1.5 text-[11px] text-slate-400">{activity.date}</p>
      </div>
    </div>
  );
}
