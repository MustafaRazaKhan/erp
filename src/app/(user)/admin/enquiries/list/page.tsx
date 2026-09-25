"use client";

import React, { useEffect, useMemo, useState } from "react";

import {
  FiSearch,
  FiMoreVertical,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiPhone,
  FiMail,
} from "react-icons/fi";

import type { EnquiryObj } from "@/modules/enquiry/store/enquiry.types";
import useEnquiry from "@/modules/enquiry/hooks/useEnquiry";
import PageLayout from "@/components/layouts/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import ListCard from "@/components/common/ListCard";
import PageContent from "@/components/common/PageContent";
import PaginationContainer from "@/components/layouts/PaginationContainer";
import ListTableHeader from "@/components/common/ListTableHeader";
import ListSearch from "@/components/common/ListSearch";
import ListFilter from "@/components/common/ListFilter";
import DataTable from "@/components/common/DataTable";
import DataTableHeader from "@/components/common/DataTableHeader";
import enquiryColumns from "@/constants/tables/enquiry.columns";
import EnquiryTableBody from "@/modules/enquiry/components/EnquiryTableBody";

const EnquiryListPage = () => {
  // console.log(enquiryColumns);
  const {
    enquiryList,
    totalEnquiries,
    currentPage,
    totalPages,
    limit,
    hasNextPage,
    hasPrevPage,
    handleSearch,
    handlePageChange,
    getAllEnquiries,
  } = useEnquiry();

  useEffect(() => {
    getAllEnquiries();
  }, []);
  const heading = {
    title: "Admission Enquiry",
    subTitle: "Admission Enquiry List",
    desc: "Manage All Your Admission Enquiry Here!",
  };
  /* ============================================================
     STATE
  ============================================================ */

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  useEffect(() => {
    getAllEnquiries();
  }, []);

  const [enquiries] = useState<EnquiryObj[]>([
    {
      _id: "1",
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "+91 98765 43210",
      subject: "Admission for Class 6",
      message: "I would like to know about admission availability.",
      comment: "Please contact me in the afternoon.",
      status: "new",
    },
    {
      _id: "2",
      name: "Priya Verma",
      email: "priya@example.com",
      phone: "+91 98765 12345",
      subject: "Admission for Class 3",
      message: "Looking for admission information for my daughter.",
      status: "contacted",
    },
    {
      _id: "3",
      name: "Aman Singh",
      email: "aman@example.com",
      phone: "+91 91234 56789",
      subject: "Transport Enquiry",
      message: "I want to know about the school bus routes.",
      status: "new",
    },
    {
      _id: "4",
      name: "Neha Gupta",
      email: "neha@example.com",
      phone: "+91 99887 66554",
      subject: "Fee Structure",
      message: "Please share the fee structure for Class 5.",
      status: "follow-up",
    },
    {
      _id: "5",
      name: "Vikas Kumar",
      email: "vikas@example.com",
      phone: "+91 90000 12345",
      subject: "School Admission",
      message: "Need information regarding admission procedure.",
      status: "resolved",
    },
  ]);

  /* ============================================================
     FILTER
  ============================================================ */

  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((enquiry) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        enquiry.name.toLowerCase().includes(searchValue) ||
        enquiry.email.toLowerCase().includes(searchValue) ||
        enquiry.phone.toLowerCase().includes(searchValue) ||
        enquiry.subject.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "all" ||
        enquiry.status?.toLowerCase() === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [enquiries, search, statusFilter]);

  return (
    <PageLayout>
      <PageContent>
        <div className="flex">
          <PageHeader heading={heading} />
          {/* <PageBtn /> */}
        </div>

        {/* list card container */}

        <div className="mb-5 flex flex-wrap gap-3 ">
          <ListCard title="Total Enquiries" value={enquiries.length} />

          <ListCard
            title="New"
            value={enquiries.filter((item) => item.status === "new").length}
            color="blue"
          />

          <ListCard
            title="Follow Up"
            value={
              enquiries.filter((item) => item.status === "follow-up").length
            }
            color="amber"
          />

          <ListCard
            title="Resolved"
            value={
              enquiries.filter((item) => item.status === "resolved").length
            }
            color="green"
          />
        </div>

        {/* ======================================================
            TABLE CARD
        ======================================================= */}

        <ListTableHeader>
          <ListSearch onChange={handleSearch} />
          <ListFilter />
        </ListTableHeader>
        <DataTable>
          {/* ====================================================
              TOOLBAR
          ===================================================== */}

          {/* Search */}

          {/* ====================================================
              TABLE
          ===================================================== */}

          <DataTableHeader columns={enquiryColumns} />
          <EnquiryTableBody data={enquiryList} />
        </DataTable>

        {/* ====================================================
              PAGINATION
          ===================================================== */}

        <PaginationContainer
          currentPage={currentPage}
          totalPages={totalPages}
          total={totalEnquiries}
          limit={limit}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          onPageChange={handlePageChange}
        />
      </PageContent>
    </PageLayout>
  );
};

/* ================================================================
   SUMMARY CARD
================================================================ */

export default EnquiryListPage;
