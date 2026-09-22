"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import useToggle from "@/modules/toggle/hooks/useToggle";

type MenuItem = {
  id: string | number;
  name: string;
  link: string;
  icon: React.ReactNode;
};

type SidebarProps = {
  menuData: MenuItem[];
};

const Sidebar = ({ menuData }: SidebarProps) => {
  const pathname = usePathname();

  const { toggle } = useToggle();

  return (
    <aside
      className={`
        ${
          toggle
            ? "w-0"
            : "w-[45%] sm:w-[50%] md:w-[25%] lg:w-[14%] xl:w-[13%] 2xl:w-[12%]"
        }
        relative shrink-0 overflow-hidden
        border-r border-slate-200
        bg-white
        transition-all duration-300
      `}
    >
      <div className="flex h-full min-h-0 flex-col">
        {/* =====================================================
            BRAND
        ====================================================== */}
        <div className="border-b border-slate-200 bg-white px-3 py-4">
          <div className="flex items-center gap-2.5">
            {/* School Logo */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
              <img
                src="/hero.jpg"
                alt="Krishna Public School"
                className="h-full w-full object-cover"
              />
            </div>

            {/* School Name */}
            <div className="min-w-0 leading-tight">
              <h2 className="truncate text-[13px] font-bold text-slate-900">
                Krishna Public School
              </h2>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                School ERP
              </p>
            </div>
          </div>

          {/* Current Academic Year */}
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[9px] font-medium uppercase tracking-wider text-slate-400">
                  Academic Year
                </p>

                <p className="mt-0.5 text-[11px] font-semibold text-slate-700">
                  2026 - 27
                </p>
              </div>

              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>

        {/* =====================================================
            NAVIGATION
        ====================================================== */}
        <nav className="flex-1 overflow-y-auto px-2 py-4">
          {/* Section Title */}
          <div className="mb-2 px-2">
            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Main Menu
            </p>
          </div>

          {/* Menu */}
          <div className="space-y-0.5">
            {menuData.map((item) => {
              const isActive =
                pathname === item.link ||
                (item.link !== "/" && pathname.startsWith(`${item.link}/`));

              return (
                <Link
                  key={item.id}
                  href={item.link}
                  title={item.name}
                  className={`
                    group relative flex items-center gap-2.5
                    rounded-lg px-2 py-1.5
                    text-[12px] font-medium
                    transition-colors duration-200
                    ${
                      isActive
                        ? "bg-[#eef3f7] text-[#1e3a5f]"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                    }
                  `}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-[#1e3a5f]" />
                  )}

                  {/* Icon */}
                  <span
                    className={`
                      flex h-8 w-8 shrink-0 items-center justify-center
                      rounded-lg
                      transition-colors duration-200
                      ${
                        isActive
                          ? "bg-white text-[#1e3a5f] shadow-sm"
                          : "text-slate-400 group-hover:bg-white group-hover:text-slate-700"
                      }
                    `}
                  >
                    {item.icon}
                  </span>

                  {/* Label */}
                  <span className="min-w-0 flex-1 truncate">{item.name}</span>

                  {/* Active Dot */}
                  {isActive && (
                    <span className="mr-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1e3a5f]" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* =====================================================
            SYSTEM STATUS
        ====================================================== */}
        <div className="border-t border-slate-200 bg-slate-50 px-2.5 py-3">
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              {/* Status */}
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/30" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
              </div>

              {/* Status Text */}
              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-slate-700">
                  System Online
                </p>

                <p className="mt-0.5 text-[9px] text-slate-400">
                  All services operational
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
