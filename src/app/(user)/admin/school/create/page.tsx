"use client";

import React, { useState } from "react";

import {
  FaSchool,
  FaIdCard,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaImage,
  FaPlus,
  FaList,
} from "react-icons/fa";

import FormInput from "@/components/common/FormInput";
import FormWrapper from "@/components/common/FormWrapper";
import PageContent from "@/components/common/PageContent";
import PageHeader from "@/components/common/PageHeader";
import Row from "@/components/common/Row";
import SectionCard from "@/components/common/SectionCard";
import PageLayout from "@/components/layouts/PageLayout";
import Button from "@/components/common/Button";
import ListBtn from "@/components/common/ListBtn";
import useSchool from "@/modules/school/hooks/useSchool";

const heading = {
  title: "Create School Profile",
  subTitle: "School Management",
  desc: "Add a new school profile and manage its information",
};

const CreateSchool = () => {
  const { onChange, handleSubmit, schoolObj, onFileChange, photo } =
    useSchool();

  return (
    <PageLayout>
      <PageContent>
        <div className="flex justify-between flex-wrap">
          <PageHeader heading={heading} />
          <ListBtn
            btn={{
              href: "/admin/school/list",
              title: "School List",
              icon: <FaList size={13} />,
            }}
          />
        </div>

        <FormWrapper onSubmit={handleSubmit}>
          <SectionCard title="Create School Profile" icon={<FaSchool />}>
            {/* =====================================================
                SCHOOL NAME + AFFILIATION CODE
            ====================================================== */}

            <Row>
              <FormInput
                name="name"
                value={schoolObj.name}
                type="text"
                placeholder="Enter School Name"
                onChange={onChange}
                icon={<FaSchool />}
                label="School Name"
              />

              <FormInput
                name="code"
                value={schoolObj.code}
                type="text"
                placeholder="Enter Affiliation Code"
                onChange={onChange}
                icon={<FaIdCard />}
                label="Affiliation Code"
              />
            </Row>

            {/* =====================================================
                EMAIL + CONTACT
            ====================================================== */}

            <Row>
              <FormInput
                name="email"
                value={schoolObj.email}
                type="email"
                placeholder="Enter Email Address"
                onChange={onChange}
                icon={<FaEnvelope />}
                label="Email Address"
              />

              <FormInput
                name="contact"
                value={schoolObj.contact}
                type="tel"
                placeholder="Enter Contact Number"
                onChange={onChange}
                icon={<FaPhoneAlt />}
                label="Contact Number"
              />
            </Row>

            {/* =====================================================
                ADDRESS
            ====================================================== */}

            <Row>
              <FormInput
                name="address"
                value={schoolObj.address}
                type="text"
                placeholder="Enter Address"
                onChange={onChange}
                icon={<FaMapMarkerAlt />}
                label="Address"
              />
            </Row>

            {/* =====================================================
                SCHOOL IMAGE
            ====================================================== */}

            <Row>
              <div className="w-full">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Upload School Image
                </label>

                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-3 transition hover:border-gray-400">
                  <FaImage className="text-sm text-gray-400" />

                  <span className="text-sm text-gray-600">
                    {photo?.name || "Upload school image"}
                  </span>

                  <input
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={onFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </Row>

            {/* =====================================================
                SUBMIT BUTTON
            ====================================================== */}

            <Button />
          </SectionCard>
        </FormWrapper>
      </PageContent>
    </PageLayout>
  );
};

export default CreateSchool;
