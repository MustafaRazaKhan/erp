"use client";

import React, { useState } from "react";

import { FaDoorOpen, FaLayerGroup, FaPlus } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";

import Button from "@/components/common/Button";
import FormInput from "@/components/common/FormInput";
import FormWrapper from "@/components/common/FormWrapper";
import PageContent from "@/components/common/PageContent";
import PageHeader from "@/components/common/PageHeader";
import ListBtn from "@/components/common/ListBtn";
import Row from "@/components/common/Row";
import SectionCard from "@/components/common/SectionCard";
import PageLayout from "@/components/layouts/PageLayout";
import useClass from "@/modules/classes/hooks/useClass";

const heading = {
  title: "Create Class",
  subTitle: "Class Management",
  desc: "Add a new class and manage its basic information",
};

const CreateClass = () => {
  const { classObj, handleClassChange, handleSubmit } = useClass();
  return (
    <PageLayout>
      <PageContent>
        {/* PAGE HEADER */}

        <div className="flex flex-wrap justify-between gap-4">
          <PageHeader heading={heading} />

          <ListBtn
            btn={{
              href: "/admin/class/class-list",
              title: "Class List",
              icon: <FaPlus size={13} />,
            }}
          />
        </div>

        {/* FORM */}

        <FormWrapper onSubmit={handleSubmit}>
          <SectionCard title="Create Class Profile" icon={<MdOutlineClass />}>
            {/* CLASS + SECTION */}

            <Row>
              {/* CLASS */}

              <div className="flex-1/2">
                <label className="mb-2 block py-1 text-sm font-medium text-slate-900">
                  Select Class
                </label>

                <select
                  name="className"
                  value={classObj.className}
                  onChange={handleClassChange}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="pnc">P.NC</option>
                  <option value="nc">N.C</option>
                  <option value="kg">K.G</option>

                  <option value="i">I</option>
                  <option value="ii">II</option>
                  <option value="iii">III</option>
                  <option value="iv">IV</option>
                  <option value="v">V</option>

                  <option value="vi">VI</option>
                  <option value="vii">VII</option>
                  <option value="viii">VIII</option>

                  <option value="ix">IX</option>
                  <option value="x">X</option>

                  <option value="xi">XI</option>
                  <option value="xii">XII</option>
                </select>
              </div>

              {/* SECTION */}

              <FormInput
                name="sectionName"
                label="Section Name"
                value={classObj.sectionName}
                onChange={handleClassChange}
                type="text"
                placeholder="Enter Section Name (A, B, C)"
                icon={<FaLayerGroup />}
              />
            </Row>

            {/* ROOM NUMBER */}

            <Row>
              <FormInput
                name="roomNo"
                label="Room Number"
                value={classObj.roomNo}
                onChange={handleClassChange}
                type="number"
                placeholder="Enter Room Number"
                icon={<FaDoorOpen />}
              />
            </Row>

            {/* SUBMIT */}

            <Button title="Create Class" />
          </SectionCard>
        </FormWrapper>
      </PageContent>
    </PageLayout>
  );
};

export default CreateClass;
