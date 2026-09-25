"use client";

import React from "react";

import {
  MdDashboard,
  MdSchool,
  MdClass,
  MdEmojiTransportation,
  MdBusAlert,
  MdPersonAddAlt1,
  MdOutlinePayment,
} from "react-icons/md";

import {
  FaEnvelopeOpenText,
  FaBuilding,
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaChalkboardTeacher,
  FaCertificate,
} from "react-icons/fa";

import {
  PiStudentBold,
  PiUsersThreeBold,
  PiUserListBold,
  PiChalkboardTeacher,
} from "react-icons/pi";

import { LuBookMarked, LuSchool } from "react-icons/lu";
import Sidebar from "@/components/layouts/Sidebar";
import Topbar from "@/components/layouts/Topbar";
import useToggle from "@/modules/toggle/hooks/useToggle";
import useTheme from "@/modules/theme/hooks/useTheme";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { toggle } = useToggle();
  const { theme } = useTheme();

  const navData = [
    // =====================================================
    // DASHBOARD
    // =====================================================

    {
      id: 0,
      name: "Dashboard",
      link: "/admin/dashboard",
      icon: <MdDashboard size={19} />,
    },

    // =====================================================
    // ENQUIRY
    // =====================================================

    {
      id: 1,
      name: "Enquiries List",
      link: "/admin/enquiries/list",
      icon: <FaEnvelopeOpenText size={18} />,
    },

    // =====================================================
    // SCHOOL
    // =====================================================

    {
      id: 2,
      name: "Add School",
      link: "/admin/school/create",
      icon: <FaBuilding size={18} />,
    },

    {
      id: 3,
      name: "School List",
      link: "/admin/school/list",
      icon: <LuSchool size={19} />,
    },

    // =====================================================
    // CLASS
    // =====================================================

    {
      id: 4,
      name: "Add Class",
      link: "/admin/classes/class-create",
      icon: <MdClass size={19} />,
    },

    {
      id: 5,
      name: "Class List",
      link: "/admin/classes/list",
      icon: <MdSchool size={19} />,
    },

    // =====================================================
    // USERS
    // =====================================================

    {
      id: 6,
      name: "Add User",
      link: "/admin/user/user-create",
      icon: <MdPersonAddAlt1 size={19} />,
    },

    {
      id: 7,
      name: "User List",
      link: "/admin/user/list",
      icon: <PiUserListBold size={19} />,
    },

    // =====================================================
    // STAFF PROFILES
    // =====================================================

    {
      id: 8,
      name: "Staff Profiles",
      link: "/admin/profile/profile-list",
      icon: <PiUsersThreeBold size={20} />,
    },

    {
      id: 9,
      name: "Teacher List",
      link: "/admin/profile/teacher-list",
      icon: <PiChalkboardTeacher size={20} />,
    },

    {
      id: 10,
      name: "Class Teacher List",
      link: "/admin/profile/class-teacher-list",
      icon: <FaChalkboardTeacher size={18} />,
    },

    {
      id: 11,
      name: "Librarian List",
      link: "/admin/profile/librarian-list",
      icon: <LuBookMarked size={19} />,
    },

    // =====================================================
    // STUDENTS
    // =====================================================

    {
      id: 12,
      name: "Student List",
      link: "/admin/students/list",
      icon: <PiStudentBold size={20} />,
    },

    // =====================================================
    // TRANSPORT
    // =====================================================

    {
      id: 13,
      name: "Add Transport",
      link: "/admin/transport/create-transport",
      icon: <MdEmojiTransportation size={20} />,
    },

    {
      id: 14,
      name: "Transport List",
      link: "/admin/transport/transport-list",
      icon: <MdBusAlert size={20} />,
    },

    // =====================================================
    // FEES
    // =====================================================

    {
      id: 15,
      name: "Add Fee",
      link: "/admin/fee/fee-create",
      icon: <FaMoneyBillWave size={18} />,
    },

    {
      id: 16,
      name: "Fee Structure",
      link: "/admin/fee/admin-view-fee-list",
      icon: <FaFileInvoiceDollar size={18} />,
    },

    {
      id: 17,
      name: "Fee Payments",
      link: "/admin/fee/admin-view-fee-payment-history-list",
      icon: <MdOutlinePayment size={20} />,
    },

    // =====================================================
    // CERTIFICATES
    // =====================================================

    {
      id: 18,
      name: "Certificates",
      link: "/admin/tc/tc-register",
      icon: <FaCertificate size={18} />,
    },

    // =====================================================
    // FUTURE MODULES
    // Uncomment when required
    // =====================================================

    /*
    {
      id: 19,
      name: "Library",
      link: "/admin/library/library-list",
      icon: <LuBookOpen size={19} />,
    },

    {
      id: 20,
      name: "Attendance",
      link: "/admin/attendance/attendance-list",
      icon: <FaUserCheck size={18} />,
    },

    {
      id: 21,
      name: "Parents",
      link: "/admin/parent/parent-list",
      icon: <PiUsersThreeBold size={20} />,
    },
    */
  ];

  return (
    <div
      className={`flex min-h-screen w-full transition-colors duration-1000 ease-in-out ${
        theme ? "bg-slate-900" : "bg-white"
      }`}
    >
      <Sidebar menuData={navData} />

      <div
        className={`${
          toggle
            ? "w-full"
            : "w-[55%] sm:w-[50%] md:w-[75%] lg:w-[88%] xl:w-[88%] 2xl:w-[88%]"
        } transition-all duration-300 flex flex-col`}
      >
        <Topbar />

        <main className="flex-1 p-1">
          <div className="min-h-full p-1">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
