"use client";

import React, { useState } from "react";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaSchool,
} from "react-icons/fa";

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* Header */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:py-16">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#1e3a5f] shadow-sm">
              <FaSchool size={18} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Contact Us
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              We&apos;d Love to Hear From You
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Have a question about admissions, academics or school facilities?
              Get in touch with our team.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-6 py-12 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
              {/* LEFT SIDE */}
              <div className="bg-blue-50 p-8 sm:p-10 lg:p-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1e3a5f] shadow-sm">
                  <FaSchool />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                  Krishna Public School
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Get in touch with us.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                  Our team is here to answer your questions and provide the
                  information you need about admissions, academics and school
                  facilities.
                </p>

                <div className="mt-10 space-y-6">
                  <ContactItem
                    icon={<FaPhone />}
                    title="Phone"
                    value="+91 98765 43210"
                  />

                  <ContactItem
                    icon={<FaEnvelope />}
                    title="Email"
                    value="info@krishnapublicschool.com"
                  />

                  <ContactItem
                    icon={<FaMapMarkerAlt />}
                    title="Address"
                    value="Krishna Public School, India"
                  />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                    Send Message
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    Contact Us
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Fill in the form and our team will get back to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* ROW 1 */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormInput
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                    />

                    <FormInput
                      label="Email Address"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                    />
                  </div>

                  {/* ROW 2 */}
                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormInput
                      label="Phone Number"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                    />

                    <FormInput
                      label="Subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      type="text"
                    />
                  </div>

                  {/* MESSAGE - FULL WIDTH */}
                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-slate-900">
                      Message
                    </label>

                    <div className="rounded-xl border border-slate-200 bg-white p-1 transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                      <textarea
                        name="message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        required
                        className="w-full resize-none bg-transparent px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e3a5f] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#16324f] hover:shadow-md"
                  >
                    <span>Send Message</span>

                    <FaPaperPlane
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;

function FormInput({
  label,
  name,
  value,
  onChange,
  type,
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-900">
        {label}
      </label>

      <div className="rounded-xl border border-slate-200 bg-white px-3 transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={`Enter ${label}`}
          required
          className="w-full bg-transparent px-2 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#1e3a5f] shadow-sm">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>

        <p className="mt-1 text-sm leading-6 text-slate-500">{value}</p>
      </div>
    </div>
  );
}
