"use client";

import React, { useEffect } from "react";

import useSchool from "@/modules/school/hooks/useSchool";

import PageLayout from "@/components/layouts/PageLayout";
import PageContent from "@/components/common/PageContent";
import PageHeader from "@/components/common/PageHeader";

import ListCard from "@/components/common/ListCard";
import ListTableHeader from "@/components/common/ListTableHeader";
import ListFilter from "@/components/common/ListFilter";

import DataTable from "@/components/common/DataTable";
import schoolColumns from "@/constants/tables/school.column";
import DataTableHeader from "@/components/common/DataTableHeader";
import SchoolTableBody from "@/modules/school/components/SchoolTableBody";
import ListBtn from "@/components/common/ListBtn";
import { FaPlus } from "react-icons/fa";

const SchoolListPage = () => {
  const { schoolList, getAllSchools } = useSchool();

  useEffect(() => {
    getAllSchools();
  }, []);
  // console.log(schoolList);

  const heading = {
    title: "Schools",
    subTitle: "School List",
    desc: "Manage all your schools and organization details here!",
  };

  const totalSchools = schoolList.length;

  return (
    <PageLayout>
      <PageContent>
        {/* ============================================================
            PAGE HEADER
        ============================================================ */}

        <div className="flex justify-between flex-wrap">
          <PageHeader heading={heading} />
          <ListBtn
            btn={{
              href: "/admin/school/create",
              title: "Add School",
              icon: <FaPlus size={13} />,
            }}
          />
        </div>

        {/* ============================================================
            SUMMARY CARDS
        ============================================================ */}

        <div className="mb-5 flex flex-wrap gap-3">
          <ListCard title="Total Schools" value={totalSchools} />
        </div>

        {/* ============================================================
            TABLE HEADER
        ============================================================ */}

        <ListTableHeader></ListTableHeader>

        {/* ============================================================
            SCHOOL TABLE
        ============================================================ */}

        <DataTable>
          <DataTableHeader columns={schoolColumns} />

          <SchoolTableBody data={schoolList} />
        </DataTable>
      </PageContent>
    </PageLayout>
  );
};

export default SchoolListPage;
