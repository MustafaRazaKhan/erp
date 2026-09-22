"use client";

import { useState } from "react";
import Link from "next/link";

import { FiMenu, FiX, FiLogIn, FiChevronDown } from "react-icons/fi";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About School",
    href: "/about",
  },
  {
    name: "Admissions",
    href: "/admissions",
  },
  {
    name: "Enquiry",
    href: "/enquiry",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top information bar */}
      <div className="hidden border-b border-slate-200 bg-[#1e3a5f] text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            <span>Krishna Public School</span>
            <span className="h-3 w-px bg-white/30" />
            <span>Excellence in Education</span>
          </div>

          <div className="flex items-center gap-5">
            <span>Academic Session 2026–27</span>
            <span className="h-3 w-px bg-white/30" />
            <span>School ERP</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav>
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* School Logo */}
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1e3a5f] text-sm font-bold text-white shadow-sm">
              KPS
            </div>

            <div className="leading-tight">
              <h1 className="text-base font-bold tracking-tight text-[#1e3a5f] sm:text-lg">
                Krishna Public School
              </h1>

              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                School ERP Portal
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-[#1e3a5f]"
              >
                {link.name}
              </Link>
            ))}

            {/* Login */}
            <Link
              href="/login"
              className="ml-3 flex items-center gap-2 rounded-lg bg-[#1e3a5f] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#16324f] hover:shadow-md"
            >
              <FiLogIn size={17} />
              <span>ERP Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1e3a5f] transition hover:bg-blue-50 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-200 bg-white shadow-md lg:hidden">
            <div className="mx-auto max-w-7xl px-5 py-4">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="border-b border-slate-100 px-2 py-3.5 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-[#1e3a5f]"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#1e3a5f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#16324f]"
                >
                  <FiLogIn size={17} />
                  ERP Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
