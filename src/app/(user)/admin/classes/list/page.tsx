"use client";

import React, { useEffect } from "react";

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
import useClass from "@/modules/classes/hooks/useClass";
import ClassTableBody from "@/modules/classes/components/ClassTableBody";
import classColumns from "@/constants/tables/class.column";
import ListBtn from "@/components/common/ListBtn";
import { FaPlus } from "react-icons/fa";

const ClassListPage = () => {
  // console.log(enquiryColumns);
  const { getAllClasses, classList } = useClass();

  useEffect(() => {
    getAllClasses();
  }, []);
  const heading = {
    title: "Class List",
    subTitle: "Class Management",
    desc: "Manage all your classes and sections here!",
  };
  /* ============================================================
     STATE
  ============================================================ */
  // console.log(classList);

  return (
    <PageLayout>
      <PageContent>
        <div className="flex justify-between flex-wrap">
          <PageHeader heading={heading} />
          <ListBtn
            btn={{
              href: "/admin/classes/create",
              title: "Add Class",
              icon: <FaPlus size={13} />,
            }}
          />

          {/* <PageBtn /> */}
        </div>

        {/* list card container */}

        <div className="mb-5 flex flex-wrap gap-3 ">
          <ListCard title="Total Classes" value={classList.length} />
        </div>

        {/* ======================================================
            TABLE CARD
        ======================================================= */}

        <ListTableHeader>
          {/* <ListSearch onChange={handleSearch} /> */}
          {/* <ListFilter /> */}
        </ListTableHeader>
        <DataTable>
          {/* ====================================================
              TOOLBAR
          ===================================================== */}

          {/* Search */}

          {/* ====================================================
              TABLE
          ===================================================== */}

          <DataTableHeader columns={classColumns} />
          <ClassTableBody data={classList} />
        </DataTable>

        {/* ====================================================
              PAGINATION
          ===================================================== */}

        {/* <PaginationContainer
          currentPage={currentPage}
          totalPages={totalPages}
          total={totalEnquiries}
          limit={limit}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          onPageChange={handlePageChange}
        /> */}
      </PageContent>
    </PageLayout>
  );
};

/* ================================================================
   SUMMARY CARD
================================================================ */

export default ClassListPage;
