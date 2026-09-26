"use client";

import React from "react";

import { FaEnvelope, FaList, FaUser } from "react-icons/fa";
import { FiShield } from "react-icons/fi";

import Button from "@/components/common/Button";
import FormInput from "@/components/common/FormInput";
import FormWrapper from "@/components/common/FormWrapper";
import ListBtn from "@/components/common/ListBtn";
import PageContent from "@/components/common/PageContent";
import PageHeader from "@/components/common/PageHeader";
import PasswordInput from "@/components/common/PasswordInput";
import PreviewRow from "@/components/common/PreviewRow";
import Row from "@/components/common/Row";
import SectionCard from "@/components/common/SectionCard";
import SelectField from "@/components/common/SelectField";
import PageLayout from "@/components/layouts/PageLayout";

import useUser from "@/modules/user/hooks/useUser";

const heading = {
  title: "Create User",
  subTitle: "User Management",
  desc: "Create a user account and configure their access",
};

const roleOptions = [
  {
    value: "admin",
    label: "Administrator",
  },
  {
    value: "teacher",
    label: "Teacher",
  },
  {
    value: "class_teacher",
    label: "Class Teacher",
  },
  {
    value: "accountant",
    label: "Accountant",
  },

  {
    value: "student",
    label: "Student",
  },
  {
    value: "transport",
    label: "Transport",
  },
  {
    value: "library",
    label: "Librarian",
  },
];

const CreateUser = () => {
  const { onChange, userObj, handleSubmit } = useUser();

  return (
    <PageLayout>
      <PageContent>
        {/* HEADER */}
        <div className="flex flex-wrap justify-between gap-4">
          <PageHeader heading={heading} />

          <ListBtn
            btn={{
              href: "/admin/user/list",
              title: "User List",
              icon: <FaList size={13} />,
            }}
          />
        </div>

        <FormWrapper onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* LEFT */}
            <div className="space-y-5">
              {/* USER IDENTITY */}
              <SectionCard title="User Identity" icon={<FaUser />}>
                <Row>
                  <FormInput
                    label="Email Address / User Name"
                    name="identifier"
                    type="text"
                    value={userObj.identifier}
                    onChange={onChange}
                    placeholder="Enter Email Address or User Name"
                    icon={<FaEnvelope />}
                  />

                  <SelectField
                    label="Role"
                    name="role"
                    value={userObj.role}
                    onChange={onChange}
                    placeholder="Select Role"
                    options={roleOptions}
                  />
                </Row>
              </SectionCard>

              {/* ACCOUNT SECURITY */}
              <SectionCard title="Account Security" icon={<FiShield />}>
                <Row>
                  <PasswordInput
                    label="Password"
                    name="password"
                    value={userObj.password}
                    onChange={onChange}
                    placeholder="Create Password"
                  />
                </Row>

                <Button title="Create User" />
              </SectionCard>
            </div>

            {/* RIGHT PREVIEW */}
            <aside className="space-y-5 xl:sticky xl:top-5 xl:self-start">
              <SectionCard title="Account Preview" icon={<FaUser />}>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1e3a5f] text-lg font-semibold text-white">
                    {userObj.identifier
                      ? userObj.identifier.slice(0, 2).toUpperCase()
                      : "US"}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-800">
                      {userObj.identifier || "user@school.com"}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {userObj.role
                        ? userObj.role.charAt(0).toUpperCase() +
                          userObj.role.slice(1)
                        : "Role not selected"}
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px bg-slate-200" />

                <div className="space-y-4">
                  <PreviewRow
                    label="Login ID"
                    value={userObj.identifier || "Not provided"}
                  />

                  <PreviewRow
                    label="Role"
                    value={
                      userObj.role
                        ? userObj.role.charAt(0).toUpperCase() +
                          userObj.role.slice(1)
                        : "Not selected"
                    }
                  />

                  <PreviewRow
                    label="Account Status"
                    value="Active"
                    valueClassName="text-green-600"
                  />
                </div>
              </SectionCard>
            </aside>
          </div>
        </FormWrapper>
      </PageContent>
    </PageLayout>
  );
};

export default CreateUser;
