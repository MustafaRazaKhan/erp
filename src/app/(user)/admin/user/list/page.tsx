"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FiEdit2,
  FiEye,
  FiMoreVertical,
  FiPlus,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiTrash2,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

type UserRole = "admin" | "teacher" | "accountant" | "staff";

type UserStatus = "active" | "inactive";

type UserItem = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  status: UserStatus;
  lastActive: string;
};

const users: UserItem[] = [
  {
    _id: "1",
    name: "Rahul Sharma",
    email: "rahul.sharma@kps.edu",
    phone: "+91 98765 43210",
    role: "admin",
    status: "active",
    lastActive: "Today, 09:15 AM",
  },
  {
    _id: "2",
    name: "Priya Singh",
    email: "priya.singh@kps.edu",
    phone: "+91 98765 12456",
    role: "teacher",
    status: "active",
    lastActive: "Today, 08:52 AM",
  },
  {
    _id: "3",
    name: "Amit Kumar",
    email: "amit.kumar@kps.edu",
    phone: "+91 98765 78654",
    role: "teacher",
    status: "active",
    lastActive: "Today, 08:41 AM",
  },
  {
    _id: "4",
    name: "Neha Verma",
    email: "neha.verma@kps.edu",
    phone: "+91 98765 34567",
    role: "accountant",
    status: "active",
    lastActive: "Yesterday, 05:32 PM",
  },
  {
    _id: "5",
    name: "Sandeep Yadav",
    email: "sandeep.yadav@kps.edu",
    phone: "+91 98765 99887",
    role: "staff",
    status: "active",
    lastActive: "Yesterday, 04:18 PM",
  },
  {
    _id: "6",
    name: "Kavita Joshi",
    email: "kavita.joshi@kps.edu",
    phone: "+91 98765 11223",
    role: "teacher",
    status: "inactive",
    lastActive: "12 Sep 2026",
  },
];

export default function UserListPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue) ||
        user.phone.toLowerCase().includes(searchValue);

      const matchesRole = roleFilter === "all" || user.role === roleFilter;

      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [search, roleFilter, statusFilter]);

  const activeUsers = users.filter((user) => user.status === "active").length;

  const inactiveUsers = users.filter(
    (user) => user.status === "inactive",
  ).length;

  const teacherCount = users.filter((user) => user.role === "teacher").length;

  const adminCount = users.filter((user) => user.role === "admin").length;

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-5 lg:p-6">
      {/* --------------------------------------------------
          Page Header
      -------------------------------------------------- */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-1 text-sm font-medium text-slate-500">
            Administration / Users
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            User Management
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage administrators, teachers, staff and system access.
          </p>
        </div>

        <Link
          href="/admin/users/create"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1e3a5f] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16324f]"
        >
          <FiPlus size={17} />
          Add User
        </Link>
      </div>

      {/* --------------------------------------------------
          Summary Cards
      -------------------------------------------------- */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          title="Total Users"
          value={users.length}
          icon={<FiUsers size={20} />}
          iconClass="bg-blue-50 text-[#1e3a5f]"
        />

        <SummaryCard
          title="Active Users"
          value={activeUsers}
          icon={<FiUserCheck size={20} />}
          iconClass="bg-emerald-50 text-emerald-600"
        />

        <SummaryCard
          title="Teachers"
          value={teacherCount}
          icon={<FiUsers size={20} />}
          iconClass="bg-violet-50 text-violet-600"
        />

        <SummaryCard
          title="Administrators"
          value={adminCount}
          icon={<FiShield size={20} />}
          iconClass="bg-amber-50 text-amber-600"
        />
      </div>

      {/* --------------------------------------------------
          Main Table Card
      -------------------------------------------------- */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="border-b border-slate-200 p-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                System Users
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Users with access to the school ERP.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row">
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
                  placeholder="Search users..."
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1e3a5f] focus:ring-2 focus:ring-blue-50 md:w-64"
                />
              </div>

              {/* Role */}
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-[#1e3a5f]"
              >
                <option value="all">All Roles</option>
                <option value="admin">Administrator</option>
                <option value="teacher">Teacher</option>
                <option value="accountant">Accountant</option>
                <option value="staff">Staff</option>
              </select>

              {/* Status */}
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
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                <FiRefreshCw size={16} />

                <span className="hidden sm:inline">Refresh</span>
              </button>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------
            Table
        -------------------------------------------------- */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  User
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Contact
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Role
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Last Activity
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
              {filteredUsers.map((user) => (
                <tr key={user._id} className="transition hover:bg-slate-50">
                  {/* User */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <UserAvatar name={user.name} />

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {user.name}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                          User ID: {user._id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Contact */}
                  <td className="px-5 py-4">
                    <div>
                      <p className="text-sm text-slate-700">{user.email}</p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {user.phone}
                      </p>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="px-5 py-4">
                    <RoleBadge role={user.role} />
                  </td>

                  {/* Last Activity */}
                  <td className="px-5 py-4">
                    <p className="text-sm text-slate-700">{user.lastActive}</p>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <StatusBadge status={user.status} />
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <ActionButton icon={<FiEye size={16} />} title="View" />

                      <ActionButton icon={<FiEdit2 size={16} />} title="Edit" />

                      <ActionButton
                        icon={<FiTrash2 size={16} />}
                        title="Delete"
                        danger
                      />

                      <button
                        type="button"
                        title="More"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                      >
                        <FiMoreVertical size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --------------------------------------------------
            Empty State
        -------------------------------------------------- */}
        {filteredUsers.length === 0 && (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FiUsers size={24} />
            </div>

            <h3 className="text-sm font-semibold text-slate-900">
              No users found
            </h3>

            <p className="mt-1 max-w-sm text-sm text-slate-500">
              Try changing your search or filter options.
            </p>
          </div>
        )}

        {/* --------------------------------------------------
            Pagination
        -------------------------------------------------- */}
        {filteredUsers.length > 0 && (
          <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing <span className="font-medium text-slate-700">1</span> to{" "}
              <span className="font-medium text-slate-700">
                {filteredUsers.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-slate-700">{users.length}</span>{" "}
              users
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

/* ============================================================
   SUMMARY CARD
============================================================ */

function SummaryCard({
  title,
  value,
  icon,
  iconClass,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  iconClass: string;
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

/* ============================================================
   USER AVATAR
============================================================ */

function UserAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef3f7] text-xs font-bold text-[#1e3a5f]">
      {initials}
    </div>
  );
}

/* ============================================================
   ROLE BADGE
============================================================ */

function RoleBadge({ role }: { role: UserRole }) {
  const roleConfig: Record<
    UserRole,
    {
      label: string;
      className: string;
    }
  > = {
    admin: {
      label: "Administrator",
      className: "bg-blue-50 text-[#1e3a5f]",
    },

    teacher: {
      label: "Teacher",
      className: "bg-violet-50 text-violet-600",
    },

    accountant: {
      label: "Accountant",
      className: "bg-amber-50 text-amber-600",
    },

    staff: {
      label: "Staff",
      className: "bg-slate-100 text-slate-600",
    },
  };

  const config = roleConfig[role];

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  );
}

/* ============================================================
   STATUS BADGE
============================================================ */

function StatusBadge({ status }: { status: UserStatus }) {
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

/* ============================================================
   ACTION BUTTON
============================================================ */

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
