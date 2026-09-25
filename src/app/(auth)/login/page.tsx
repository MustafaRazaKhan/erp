"use client";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import React, { useState } from "react";

import { FaEnvelope, FaLock, FaSchool, FaSignInAlt } from "react-icons/fa";

const LoginPage = () => {
  const [form, setForm] = useState({
    role: "admin",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center justify-center">
          <div className="grid w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="bg-blue-50 p-8 sm:p-10 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1e3a5f] shadow-sm">
                <FaSchool />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Krishna Public School
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900">
                Welcome back.
                <br />
                Manage everything
                <br />
                in one place.
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                Access the school management system to manage students,
                teachers, classes, fees and other school activities.
              </p>

              <div className="mt-8 space-y-4">
                <LoginFeature text="Manage students and teachers" />

                <LoginFeature text="Manage classes and academics" />

                <LoginFeature text="Manage fees and payments" />

                <LoginFeature text="Manage school operations" />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                  Account Login
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Sign in to your account
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Enter your details to continue.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* ROLE */}
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-sm font-medium text-slate-900"
                  >
                    Login As
                  </label>

                  <select
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                  </select>
                </div>

                {/* EMAIL + PASSWORD */}
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Email Address
                    </label>

                    <div className="flex items-center rounded-xl border border-slate-200 bg-white px-3 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                      <FaEnvelope
                        size={14}
                        className="shrink-0 text-slate-400"
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                        className="w-full bg-transparent px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Password
                    </label>

                    <div className="flex items-center rounded-xl border border-slate-200 bg-white px-3 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                      <FaLock size={14} className="shrink-0 text-slate-400" />

                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        required
                        className="w-full bg-transparent px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* FORGOT PASSWORD */}
                <div className="mt-4 text-right">
                  <button
                    type="button"
                    className="text-xs font-medium text-blue-600 hover:text-blue-700"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* LOGIN BUTTON */}
                <button
                  type="submit"
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e3a5f] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#16324f] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
                >
                  <span>Sign In</span>

                  <FaSignInAlt
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>

              <p className="mt-6 text-center text-xs text-slate-400">
                Krishna Public School Management System
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;

function LoginFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#1e3a5f] shadow-sm">
        ✓
      </div>

      <p className="text-sm font-medium text-slate-900">{text}</p>
    </div>
  );
}
