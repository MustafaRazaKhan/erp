"use client";

import React from "react";

import {
  FaArrowRight,
  FaBook,
  FaCheck,
  FaEnvelope,
  FaPhone,
  FaSchool,
  FaUser,
} from "react-icons/fa";

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

import FormWrapper from "@/components/common/FormWrapper";
import FormInput from "@/components/common/FormInput";
import Button from "@/components/common/Button";

import useEnquiry from "@/modules/enquiry/hooks/useEnquiry";

const CreateEnquiry = () => {
  const { handleSubmit, onChange, enquiryObj } = useEnquiry();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fffdf5] text-stone-800">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-[#eadfbe] bg-[#fff9e9]">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#d4af5a]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#d4af5a]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 text-center lg:px-8 lg:py-20">
            {/* School Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ead9a5] bg-white text-[#b58a28] shadow-sm">
              <FaSchool size={20} />
            </div>

            {/* Small Heading */}
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-[#a77c20]">
              Krishna Public School
            </p>

            {/* Main Heading */}
            <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Begin Your Child&apos;s
              <span className="block text-[#b58a28]">Journey With Us</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-500 sm:text-base">
              Have questions about admissions, academics or campus life? Share
              your details and our admission team will be happy to assist you.
            </p>

            {/* Small trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-[#eadfbe] bg-white px-4 py-2 text-xs font-medium text-stone-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#b58a28]" />
                Admission Support
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#eadfbe] bg-white px-4 py-2 text-xs font-medium text-stone-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#b58a28]" />
                Quick Response
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#eadfbe] bg-white px-4 py-2 text-xs font-medium text-stone-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#b58a28]" />
                School Admissions
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FORM SECTION
        ====================================================== */}
        <section className="px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid overflow-hidden rounded-[2rem] border border-[#eadfbe] bg-white shadow-[0_20px_60px_rgba(74,58,25,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
              {/* =================================================
                  LEFT INFORMATION PANEL
              ================================================== */}
              <div className="relative overflow-hidden bg-[#172033] p-8 text-white sm:p-10 lg:p-12">
                {/* Decorative circle */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#d4af5a]/20" />

                <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#d4af5a]/5 blur-2xl" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af5a]/30 bg-[#d4af5a]/10 text-[#d4af5a]">
                    <FaSchool size={20} />
                  </div>

                  {/* Label */}
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af5a]">
                    Krishna Public School
                  </p>

                  {/* Heading */}
                  <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                    A place to
                    <br />
                    <span className="text-[#d4af5a]">learn, grow</span> & excel.
                  </h2>

                  {/* Description */}
                  <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                    We believe every child deserves an environment where
                    curiosity is encouraged, confidence is built and every
                    achievement is celebrated.
                  </p>

                  {/* =================================================
                      BENEFITS
                  ================================================== */}
                  <div className="mt-9 space-y-4">
                    <Benefit text="Smart and engaging classrooms" />

                    <Benefit text="Experienced and dedicated faculty" />

                    <Benefit text="Modern learning methods" />

                    <Benefit text="Sports and extracurricular activities" />

                    <Benefit text="Safe and supportive campus" />
                  </div>

                  {/* =================================================
                      ADMISSION PROCESS
                  ================================================== */}
                  <div className="mt-10 border-t border-white/10 pt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d4af5a]">
                      What happens next?
                    </p>

                    <div className="mt-5 space-y-4">
                      <ProcessStep
                        number="01"
                        title="Submit enquiry"
                        text="Share your basic details with us."
                      />

                      <ProcessStep
                        number="02"
                        title="Our team connects"
                        text="Our admission team will contact you."
                      />

                      <ProcessStep
                        number="03"
                        title="Get guidance"
                        text="Receive admission information and guidance."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT FORM PANEL
              ================================================== */}
              <div className="bg-[#fffdf8] p-7 sm:p-10 lg:p-12">
                {/* Form Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#b58a28]" />

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a77c20]">
                      Get In Touch
                    </p>
                  </div>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-stone-900">
                    Admission Enquiry
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-6 text-stone-500">
                    Tell us how we can help. Please provide your details and our
                    team will get back to you shortly.
                  </p>
                </div>

                {/* =================================================
                    FORM
                ================================================== */}
                <FormWrapper onSubmit={handleSubmit}>
                  {/* Name */}
                  <FormInput
                    label="Full Name"
                    icon={<FaUser />}
                    name="name"
                    placeholder="Enter your full name"
                    value={enquiryObj.name}
                    onChange={onChange}
                    type="text"
                  />

                  {/* Email */}
                  <FormInput
                    label="Email Address"
                    icon={<FaEnvelope />}
                    name="email"
                    placeholder="Enter your email address"
                    value={enquiryObj.email}
                    onChange={onChange}
                    type="email"
                  />

                  {/* Phone */}
                  <FormInput
                    label="Phone Number"
                    icon={<FaPhone />}
                    name="phone"
                    placeholder="Enter your phone number"
                    value={enquiryObj.phone}
                    onChange={onChange}
                    type="tel"
                  />

                  {/* Subject */}
                  <FormInput
                    label="Subject"
                    icon={<FaBook />}
                    name="subject"
                    placeholder="What would you like to know?"
                    value={enquiryObj.subject}
                    onChange={onChange}
                    type="text"
                  />

                  {/* Message */}
                  <div className="mt-5">
                    <label className="mb-2 block py-1 text-sm font-medium text-stone-800">
                      Your Message
                    </label>

                    <div className="rounded-xl border border-[#e6dcc0] bg-white transition-all duration-200 focus-within:border-[#b58a28] focus-within:ring-2 focus-within:ring-[#d4af5a]/20">
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Tell us about your enquiry..."
                        value={enquiryObj.message}
                        onChange={onChange}
                        required
                        className="w-full resize-none rounded-xl bg-transparent px-4 py-3.5 text-sm text-stone-800 outline-none placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="
                        group
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        bg-[#172033]
                        px-6
                        py-3.5
                        text-sm
                        font-semibold
                        text-white
                        shadow-sm
                        transition-all
                        duration-300
                        hover:bg-[#101827]
                        hover:shadow-lg
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#d4af5a]/40
                        focus:ring-offset-2
                      "
                    >
                      <span>Submit Admission Enquiry</span>

                      <FaArrowRight
                        size={12}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </button>
                  </div>

                  {/* Privacy / response message */}
                  <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-[#eadfbe] bg-[#fff9e9] p-3.5">
                    <FaCheck
                      size={11}
                      className="mt-1 shrink-0 text-[#b58a28]"
                    />

                    <p className="text-[11px] leading-5 text-stone-500">
                      Your information is used only to respond to your enquiry.
                      Our admission team will contact you using the details
                      provided.
                    </p>
                  </div>
                </FormWrapper>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

/* =========================================================
   BENEFIT
========================================================= */

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d4af5a]/30 bg-[#d4af5a]/10 text-[#d4af5a]">
        <FaCheck size={10} />
      </div>

      <p className="text-sm font-medium text-slate-200">{text}</p>
    </div>
  );
}

/* =========================================================
   PROCESS STEP
========================================================= */

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#d4af5a]/20 bg-[#d4af5a]/10 text-[10px] font-bold text-[#d4af5a]">
        {number}
      </div>

      <div>
        <p className="text-sm font-semibold text-white">{title}</p>

        <p className="mt-0.5 text-xs leading-5 text-slate-500">{text}</p>
      </div>
    </div>
  );
}

export default CreateEnquiry;
