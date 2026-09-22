import Link from "next/link";

import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
  FiShield,
} from "react-icons/fi";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About School", href: "/about" },
  { name: "Enquiry", href: "/enquiry" },
  { name: "Contact Us", href: "/contact" },
];

const portalLinks = [
  { name: "Student Portal", href: "/student/dashboard" },
  { name: "Teacher Portal", href: "/teacher/dashboard" },
  { name: "Admin Portal", href: "/admin/dashboard" },
];

const moduleLinks = [
  { name: "Students", href: "/admin/students" },
  { name: "Classes", href: "/admin/classes" },
  { name: "Fees", href: "/admin/fees" },
  { name: "Transport", href: "/admin/transport" },
];

const socialLinks = [
  {
    icon: <FiFacebook size={17} />,
    href: "#",
    label: "Facebook",
  },
  {
    icon: <FiInstagram size={17} />,
    href: "#",
    label: "Instagram",
  },
  {
    icon: <FiTwitter size={17} />,
    href: "#",
    label: "Twitter",
  },
  {
    icon: <FiLinkedin size={17} />,
    href: "#",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#172033] text-white">
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr]">
          {/* =================================================
              SCHOOL INFORMATION
          ================================================== */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              {/* School Logo */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af5a]/30 bg-white/5 text-[#d4af5a] shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:border-[#d4af5a]/60 group-hover:bg-[#d4af5a]/10">
                <span className="text-lg font-bold">K</span>
              </div>

              {/* School Name */}
              <div>
                <p className="text-lg font-bold tracking-tight text-white">
                  Krishna Public School
                </p>

                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4af5a]">
                  School ERP
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              A modern school management platform designed to connect students,
              teachers, parents and administrators through one organized digital
              system.
            </p>

            {/* Accreditation / Secure Platform */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <FiShield size={14} className="text-[#d4af5a]" />

              <span className="text-xs font-medium text-slate-400">
                Secure School Management Platform
              </span>
            </div>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    text-slate-400
                    shadow-sm
                    transition
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#d4af5a]/40
                    hover:bg-[#d4af5a]/10
                    hover:text-[#d4af5a]
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af5a]">
              Navigation
            </p>

            <h3 className="text-base font-bold text-white">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-1.5
                    text-sm
                    text-slate-400
                    transition
                    duration-200
                    hover:text-[#d4af5a]
                  "
                >
                  <span>{link.name}</span>

                  <FiArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* =================================================
              ERP PORTALS + MODULES
          ================================================== */}
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af5a]">
              Platform
            </p>

            <h3 className="text-base font-bold text-white">School ERP</h3>

            {/* Portal Links */}
            <div className="mt-6 flex flex-col gap-3.5">
              {portalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-1.5
                    text-sm
                    text-slate-400
                    transition
                    duration-200
                    hover:text-[#d4af5a]
                  "
                >
                  <span>{link.name}</span>

                  <FiArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>

            {/* ERP Modules */}
            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="mb-3 text-xs font-semibold text-slate-500">
                ERP Modules
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {moduleLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-[#d4af5a]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af5a]">
              Get In Touch
            </p>

            <h3 className="text-base font-bold text-white">Contact School</h3>

            <div className="mt-6 space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#d4af5a]">
                  <FiMapPin size={15} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Krishna Public School
                    <br />
                    Your School Address
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#d4af5a]">
                  <FiPhone size={15} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500">Phone</p>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block text-sm text-slate-300 transition hover:text-[#d4af5a]"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#d4af5a]">
                  <FiMail size={15} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500">Email</p>

                  <a
                    href="mailto:info@school.com"
                    className="mt-1 block text-sm text-slate-300 transition hover:text-[#d4af5a]"
                  >
                    info@school.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-7 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af5a]">
                Office Hours
              </p>

              <p className="mt-2 text-sm text-slate-400">Monday – Saturday</p>

              <p className="mt-1 text-sm font-medium text-slate-300">
                08:00 AM – 04:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER DIVIDER
      ====================================================== */}
      <div className="h-px bg-white/10" />

      {/* =====================================================
          BOTTOM FOOTER
      ====================================================== */}
      <div className="bg-[#101827]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-xs text-slate-500 sm:text-sm md:flex-row md:items-center md:justify-between lg:px-8">
          {/* Copyright */}
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-300">
              Krishna Public School
            </span>
            . All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="transition hover:text-[#d4af5a]">
              Privacy Policy
            </Link>

            <span className="h-1 w-1 rounded-full bg-slate-700" />

            <Link href="/terms" className="transition hover:text-[#d4af5a]">
              Terms & Conditions
            </Link>

            <span className="h-1 w-1 rounded-full bg-slate-700" />

            <Link href="/contact" className="transition hover:text-[#d4af5a]">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
