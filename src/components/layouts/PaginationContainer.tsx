import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type PaginationContainerProps = {
  currentPage: number;
  totalPages: number;
  total: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  onPageChange: (page: number) => void;
};

const PaginationContainer = ({
  currentPage,
  totalPages,
  total,
  limit,
  hasNextPage,
  hasPrevPage,
  onPageChange,
}: PaginationContainerProps) => {
  const start = total === 0 ? 0 : (currentPage - 1) * limit + 1;

  const end = Math.min(currentPage * limit, total);

  return (
    <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-[11px] text-slate-400">
        Showing{" "}
        <span className="font-semibold text-slate-600">
          {start}-{end}
        </span>{" "}
        of <span className="font-semibold text-slate-600">{total}</span>{" "}
        enquiries
      </p>

      <div className="flex items-center gap-1">
        {/* Previous */}
        <button
          type="button"
          disabled={!hasPrevPage}
          onClick={() => onPageChange(currentPage - 1)}
          className="
            flex h-8 w-8 items-center justify-center
            rounded-lg
            border border-slate-200
            text-slate-400
            transition
            hover:bg-slate-50
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <FiChevronLeft size={14} />
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`
              flex h-8 w-8 items-center justify-center
              rounded-lg
              text-[11px]
              font-medium
              transition
              ${
                currentPage === page
                  ? "bg-[#1e3a5f] text-white"
                  : "border border-slate-200 text-slate-500 hover:bg-slate-50"
              }
            `}
            >
              {page}
            </button>
          ),
        )}

        {/* Next */}
        <button
          type="button"
          disabled={!hasNextPage}
          onClick={() => onPageChange(currentPage + 1)}
          className="
            flex h-8 w-8 items-center justify-center
            rounded-lg
            border border-slate-200
            text-slate-500
            transition
            hover:bg-slate-50
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <FiChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
