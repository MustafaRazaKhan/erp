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

  useEffect(() => {
    getAllEnquiries();
  }, []);

  return (
    <PageLayout>
      <PageContent>
        <div className="flex">
          <PageHeader heading={heading} />

          {/* <PageBtn /> */}
        </div>

        {/* list card container */}

        <div className="mb-5 flex flex-wrap gap-3 ">
          <ListCard title="Total Enquiries" value={enquiryList.length} />

          <ListCard
            title="New"
            value={
              enquiryList.filter((item: any) => item.status === "new").length
            }
            color="blue"
          />

          <ListCard
            title="Follow Up"
            value={
              enquiryList.filter((item: any) => item.status === "follow-up")
                .length
            }
            color="amber"
          />

          <ListCard
            title="Resolved"
            value={
              enquiryList.filter((item: any) => item.status === "resolved")
                .length
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
