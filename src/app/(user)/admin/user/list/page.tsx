"use client";

import { useEffect } from "react";

import { FaList, FaUserCheck, FaUsers } from "react-icons/fa";
import { FiShield } from "react-icons/fi";

import DataTable from "@/components/common/DataTable";
import DataTableHeader from "@/components/common/DataTableHeader";
import ListBtn from "@/components/common/ListBtn";
import ListFilter from "@/components/common/ListFilter";
import ListSearch from "@/components/common/ListSearch";
import ListTableHeader from "@/components/common/ListTableHeader";
import PageContent from "@/components/common/PageContent";
import PageHeader from "@/components/common/PageHeader";
import PageLayout from "@/components/layouts/PageLayout";

import UserTableBody from "@/modules/user/components/UserTableBody";
import useUser from "@/modules/user/hooks/useUser";
import ListCard from "@/components/common/ListCard";
import PaginationContainer from "@/components/layouts/PaginationContainer";

const heading = {
  title: "User List",
  subTitle: "User Management",
  desc: "Manage all your system users and their access here!",
};

const UserListPage = () => {
  const {
    userList,
    getAllUsers,
    loading,
    totalUsers,
    currentPage,
    totalPages,
    limit,
    hasNextPage,
    hasPrevPage,
    search,
    handleSearch,
    handlePageChange,
  } = useUser();

  useEffect(() => {
    getAllUsers();
  }, []);

  const activeUsers = userList.filter(
    (user: any) => user.isActive === true,
  ).length;

  const teacherCount = userList.filter(
    (user: any) => user.role === "teacher",
  ).length;

  const adminCount = userList.filter(
    (user: any) => user.role === "admin",
  ).length;

  const userColumns = ["User", "Identifier", "Role", "Status", "Actions"];

  return (
    <PageLayout>
      <PageContent>
        {/* Page Header */}

        <div className="flex flex-wrap justify-between gap-4">
          <PageHeader heading={heading} />

          <ListBtn
            btn={{
              href: "/admin/user/create",
              title: "Create User",
              icon: <FaList size={13} />,
            }}
          />
        </div>

        {/* Summary Cards */}

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <ListCard
            title="Total Users"
            value={totalUsers}
            icon={<FaUsers size={18} />}
          />

          <ListCard
            title="Active Users"
            value={activeUsers}
            icon={<FaUserCheck size={18} />}
          />

          <ListCard
            title="Teachers"
            value={teacherCount}
            icon={<FaUsers size={18} />}
          />

          <ListCard
            title="Administrators"
            value={adminCount}
            icon={<FiShield size={18} />}
          />
        </div>

        {/* Table */}

        <div className="mt-6">
          <ListTableHeader
            title="System Users"
            desc="Users with access to the school ERP."
          >
            <ListSearch
              value={search}
              onChange={handleSearch}
              placeholder="Search users..."
            />

            <ListFilter
            // Use the same props/options
            // as your EnquiryListPage
            />
          </ListTableHeader>

          <DataTable>
            <DataTableHeader columns={userColumns} />

            <UserTableBody data={userList} loading={loading} />
          </DataTable>

          <PaginationContainer
            currentPage={currentPage}
            totalPages={totalPages}
            total={totalUsers}
            limit={limit}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            onPageChange={handlePageChange}
          />
        </div>
      </PageContent>
    </PageLayout>
  );
};

export default UserListPage;
