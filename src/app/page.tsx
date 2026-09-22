"use client";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaBook,
  FaChartLine,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaCreditCard,
  FaGraduationCap,
  FaSchool,
  FaShieldAlt,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";

const portals = [
  {
    title: "Student Portal",
    description:
      "Access academics, attendance, fees, results and personal information.",
    icon: <FaUserGraduate />,
    href: "/student/dashboard",
  },
  {
    title: "Teacher Portal",
    description:
      "Manage classes, attendance, students and academic activities.",
    icon: <FaChalkboardTeacher />,
    href: "/teacher/dashboard",
  },
  {
    title: "Administration",
    description:
      "Manage students, staff, fees, academics and school operations.",
    icon: <FaSchool />,
    href: "/admin/dashboard",
  },
];

const modules = [
  {
    title: "Student Management",
    description: "Student profiles, guardians, classes and academic records.",
    icon: <FaUserGraduate />,
  },
  {
    title: "Attendance",
    description: "Track daily student and staff attendance with ease.",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Academic Management",
    description: "Classes, subjects, examinations and academic results.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Fee Management",
    description: "Manage payments, installments, dues and fee records.",
    icon: <FaCreditCard />,
  },
  {
    title: "Library",
    description: "Manage books, issues, returns and library activity.",
    icon: <FaBook />,
  },
  {
    title: "Reports & Insights",
    description: "Get meaningful information for everyday school decisions.",
    icon: <FaChartLine />,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-slate-900">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
          {/* Background decoration */}

          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-slate-200/60 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-20">
            {/* LEFT */}

            <div>
              {/* School label */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1e3a5f] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#1e3a5f]" />
                Krishna Public School
              </div>

              {/* Heading */}

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                A smarter way to manage
                <span className="block text-[#1e3a5f]">your school.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                A unified School ERP that brings students, teachers, academics,
                attendance, fees and everyday school operations together in one
                secure platform.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/login"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#1e3a5f] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#16324f] hover:shadow-md"
                >
                  Access ERP
                  <FaArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/enquiries/create"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-[#1e3a5f]"
                >
                  Make an Enquiry
                </Link>
              </div>

              {/* Trust points */}

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-[#1e3a5f]" size={14} />

                    <span className="text-sm font-bold text-slate-800">
                      Secure
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-400">School data</p>
                </div>

                <div className="border-l border-slate-200 pl-4">
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-[#1e3a5f]" size={14} />

                    <span className="text-sm font-bold text-slate-800">
                      Connected
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-400">One platform</p>
                </div>

                <div className="border-l border-slate-200 pl-4">
                  <div className="flex items-center gap-2">
                    <FaChartLine className="text-[#1e3a5f]" size={14} />

                    <span className="text-sm font-bold text-slate-800">
                      Simple
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    Daily management
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative">
              <div className="rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_25px_70px_rgba(15,23,42,0.10)]">
                <Image
                  src="/hero.jpg"
                  alt="Krishna Public School"
                  width={900}
                  height={650}
                  priority
                  className="h-[320px] w-full rounded-[22px] object-cover sm:h-[400px] lg:h-[470px]"
                />
              </div>

              {/* Floating ERP Card */}

              <div className="absolute -bottom-6 left-4 right-4 sm:left-8 sm:right-auto">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:min-w-[310px]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1e3a5f]">
                      <FaSchool size={17} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        School ERP
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-800">
                        Krishna Public School
                      </p>
                    </div>

                    <div className="ml-auto h-2.5 w-2.5 rounded-full bg-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PORTAL ACCESS
        ====================================================== */}

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1e3a5f]">
                  Portal Access
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  One school. Different
                  <span className="text-[#1e3a5f]"> experiences.</span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Each role gets the tools and information they need without
                  unnecessary complexity.
                </p>
              </div>

              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] hover:underline"
              >
                Go to ERP Login
                <FaArrowRight size={11} />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {portals.map((portal) => (
                <Link
                  key={portal.title}
                  href={portal.href}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  {/* top accent */}

                  <div className="absolute left-0 top-0 h-1 w-full bg-[#1e3a5f] opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1e3a5f]">
                      {portal.icon}
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-300 transition-all group-hover:bg-blue-50 group-hover:text-[#1e3a5f]">
                      <FaArrowRight size={11} />
                    </div>
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-slate-900">
                    {portal.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {portal.description}
                  </p>

                  <div className="mt-6 text-xs font-bold text-[#1e3a5f]">
                    Open Portal →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            MODULES
        ====================================================== */}

        <section className="border-y border-slate-200 bg-slate-50 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1e3a5f]">
                School ERP
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Everything your school needs.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                A connected set of tools designed to make everyday school
                administration simpler.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <div
                  key={module.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1e3a5f] transition-colors group-hover:bg-[#1e3a5f] group-hover:text-white">
                      {module.icon}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {module.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ERP PREVIEW
        ====================================================== */}

        <section className="py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1e3a5f]">
                Built for School Management
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Everything important,
                <span className="block text-[#1e3a5f]">
                  right where you need it.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                From student records to fee management, school information is
                organized into clear dashboards that help staff work faster and
                with greater confidence.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1e3a5f]">
                    <FaUserGraduate size={14} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Centralized student records
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Keep student information organized and accessible from one
                      place.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1e3a5f]">
                    <FaClipboardCheck size={14} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Simplified daily operations
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Manage attendance, fees and academic activities without
                      switching systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1e3a5f]">
                    <FaChartLine size={14} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Clear management insights
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Give administrators a clearer picture of everyday school
                      activity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Dashboard Preview */}

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-4 sm:p-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {/* Dashboard header */}

                <div className="flex items-center justify-between border-b border-slate-100 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1e3a5f]">
                      <FaSchool size={15} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        School ERP
                      </p>

                      <p className="text-sm font-bold text-slate-800">
                        Management Overview
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-semibold text-green-600">
                    System Active
                  </span>
                </div>

                {/* Mini stats */}

                <div className="grid grid-cols-2 gap-3 p-5">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <FaUsers className="text-[#1e3a5f]" size={15} />

                    <p className="mt-3 text-xl font-bold text-slate-900">
                      Students
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Centralized records
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <FaChalkboardTeacher className="text-[#1e3a5f]" size={15} />

                    <p className="mt-3 text-xl font-bold text-slate-900">
                      Teachers
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Academic management
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <FaCreditCard className="text-[#1e3a5f]" size={15} />

                    <p className="mt-3 text-xl font-bold text-slate-900">
                      Fees
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Payment management
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <FaBook className="text-[#1e3a5f]" size={15} />

                    <p className="mt-3 text-xl font-bold text-slate-900">
                      Library
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Books & records
                    </p>
                  </div>
                </div>

                {/* Activity */}

                <div className="border-t border-slate-100 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Modules
                  </p>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-3">
                      <span className="text-xs font-medium text-slate-700">
                        Student Management
                      </span>

                      <span className="text-[10px] font-semibold text-[#1e3a5f]">
                        Active
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                      <span className="text-xs font-medium text-slate-700">
                        Attendance
                      </span>

                      <span className="text-[10px] font-semibold text-green-600">
                        Ready
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                      <span className="text-xs font-medium text-slate-700">
                        Fee Management
                      </span>

                      <span className="text-[10px] font-semibold text-green-600">
                        Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="px-5 pb-20 sm:px-6 lg:pb-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#1e3a5f] px-7 py-14 text-center sm:px-12">
            {/* Decorative shapes */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/5" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/5" />

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <FaSchool />
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your school.
                <span className="block text-blue-200">
                  One connected platform.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-blue-100/80">
                Access the Krishna Public School ERP and manage the information
                relevant to your role.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/login"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#1e3a5f] shadow-sm transition-all hover:bg-blue-50"
                >
                  Login to ERP
                  <FaArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/enquiries/create"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact School
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
