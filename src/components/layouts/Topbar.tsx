"use client";

import { FiBell, FiChevronDown, FiMoon, FiSun } from "react-icons/fi";
import { RiMenuFold3Fill, RiMenuUnfold3Fill } from "react-icons/ri";

import Dropdown from "../common/DropDown";

import useToggle from "@/modules/toggle/hooks/useToggle";
import useTheme from "@/modules/theme/hooks/useTheme";

export default function Topbar() {
  const { toggle, handleToggleChange } = useToggle();

  const { theme, handleThemeToggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex min-h-[64px] items-center justify-between px-3 py-2.5 sm:px-5 lg:px-6">
        {/* =====================================================
            LEFT SIDE
        ====================================================== */}
        <div className="flex min-w-0 items-center gap-3">
          {/* Sidebar Toggle */}
          <button
            type="button"
            onClick={handleToggleChange}
            title={toggle ? "Expand Sidebar" : "Collapse Sidebar"}
            aria-label={toggle ? "Expand Sidebar" : "Collapse Sidebar"}
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-lg
              border border-slate-200
              bg-white
              text-slate-500
              shadow-sm
              transition-colors duration-200
              hover:border-slate-300
              hover:bg-slate-50
              hover:text-[#1e3a5f]
              focus:outline-none
              focus:ring-2
              focus:ring-blue-100
            "
          >
            {toggle ? (
              <RiMenuUnfold3Fill size={18} />
            ) : (
              <RiMenuFold3Fill size={18} />
            )}
          </button>

          {/* School / Application Information */}
          <div className="hidden min-w-0 leading-tight sm:block">
            <p className="truncate text-sm font-bold tracking-tight text-slate-900">
              Krishna Public School
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
                Administration
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE
        ====================================================== */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* =================================================
              ACADEMIC YEAR
          ================================================== */}
          <button
            type="button"
            className="
              hidden
              items-center gap-2
              rounded-lg
              border border-slate-200
              bg-white
              px-3 py-2
              text-left
              transition-colors duration-200
              hover:border-slate-300
              hover:bg-slate-50
              md:flex
            "
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-[#1e3a5f]">
              <span className="text-[10px] font-bold">AY</span>
            </div>

            <div className="leading-tight">
              <p className="text-[9px] font-medium uppercase tracking-wider text-slate-400">
                Academic Year
              </p>

              <p className="mt-0.5 text-[11px] font-semibold text-slate-700">
                2026 - 27
              </p>
            </div>

            <FiChevronDown size={13} className="ml-1 text-slate-400" />
          </button>

          {/* =================================================
              THEME TOGGLE
          ================================================== */}
          <button
            type="button"
            onClick={handleThemeToggle}
            title={theme ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label={theme ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="
              relative flex h-9 w-9 items-center justify-center
              rounded-lg
              border border-slate-200
              bg-white
              text-slate-500
              shadow-sm
              transition-colors duration-200
              hover:border-slate-300
              hover:bg-slate-50
              hover:text-[#1e3a5f]
              focus:outline-none
              focus:ring-2
              focus:ring-blue-100
            "
          >
            {theme ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>

          {/* =================================================
              NOTIFICATIONS
          ================================================== */}
          <button
            type="button"
            title="Notifications"
            aria-label="Notifications"
            className="
              relative flex h-9 w-9 items-center justify-center
              rounded-lg
              border border-slate-200
              bg-white
              text-slate-500
              shadow-sm
              transition-colors duration-200
              hover:border-slate-300
              hover:bg-slate-50
              hover:text-[#1e3a5f]
              focus:outline-none
              focus:ring-2
              focus:ring-blue-100
            "
          >
            <FiBell size={17} />

            {/* Notification Count */}
            <span
              className="
                absolute -right-0.5 -top-0.5
                flex h-3.5 min-w-3.5 items-center
                justify-center
                rounded-full
                bg-red-500
                px-1
                text-[8px]
                font-bold
                text-white
                ring-2
                ring-white
              "
            >
              3
            </span>
          </button>

          {/* =================================================
              PROFILE
          ================================================== */}
          <div
            className="
              flex items-center
              rounded-lg
              border border-slate-200
              bg-white
              shadow-sm
              transition-colors duration-200
              hover:border-slate-300
              hover:bg-slate-50
            "
          >
            {/* <Dropdown isNavbar={false} /> */}
          </div>
        </div>
      </div>
    </header>
  );
}
