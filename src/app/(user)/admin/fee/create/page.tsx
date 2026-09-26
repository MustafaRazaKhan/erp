"use client";

import React, { useState } from "react";

import { FaList, FaMoneyBillWave, FaSchool, FaBus } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

import Button from "@/components/common/Button";
import FormInput from "@/components/common/FormInput";
import FormWrapper from "@/components/common/FormWrapper";
import ListBtn from "@/components/common/ListBtn";
import PageContent from "@/components/common/PageContent";
import PageHeader from "@/components/common/PageHeader";
import Row from "@/components/common/Row";
import SectionCard from "@/components/common/SectionCard";
import PageLayout from "@/components/layouts/PageLayout";

const feeGroups = {
  "PNC-KG": ["pnc", "nc", "kg"],
  "I-V": ["i", "ii", "iii", "iv", "v"],
  "VI-VIII": ["vi", "vii", "viii"],
  "IX-XII": ["ix", "x", "xi", "xii"],
} as const;

const heading = {
  title: "Create Fee Structure",
  subTitle: "Fee Management",
  desc: "Create monthly and one-time fee structures for students",
};

const CreateFee = () => {
  const [feeGroup, setFeeGroup] = useState<keyof typeof feeGroups>("PNC-KG");

  const [selectedClass, setSelectedClass] = useState("");

  const [state, setState] = useState({
    feeObj: {
      admissionFee: "",
      registrationFee: "",
      annualFee: "",
      examinationFee: "",
      securityFee: "",
    },

    monthlyObj: {
      monthFee: "",
      busFee: "",
    },

    monthList: [] as any[],
  });

  const classes = feeGroups[feeGroup];

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setState({
      ...state,
      feeObj: {
        ...state.feeObj,
        [name]: value,
      },
    });
  };

  const handleMonthlyFeeChange = (e: any) => {
    const { name, value } = e.target;

    setState({
      ...state,
      monthlyObj: {
        ...state.monthlyObj,
        [name]: value,
      },
    });
  };

  const handleGroupChange = (group: keyof typeof feeGroups) => {
    setFeeGroup(group);
    setSelectedClass("");
  };

  const handleMonthSubmit = (e: any) => {
    e.preventDefault();

    if (!selectedClass) return;

    const newFee = {
      selectedClass,
      monthFee: state.monthlyObj.monthFee,
      busFee: state.monthlyObj.busFee,
    };

    setState({
      ...state,

      monthList: [...state.monthList, newFee],

      monthlyObj: {
        monthFee: "",
        busFee: "",
      },
    });

    setSelectedClass("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("Fee Group:", feeGroup);
    console.log("Monthly Fees:", state.monthList);
    console.log("Other Fees:", state.feeObj);
  };

  return (
    <PageLayout>
      <PageContent>
        {/* ================= HEADER ================= */}

        <div className="flex flex-wrap justify-between gap-4">
          <PageHeader heading={heading} />

          <ListBtn
            btn={{
              href: "/admin/fee/fee-list",
              title: "Fee Structure List",
              icon: <FaList size={13} />,
            }}
          />
        </div>

        <FormWrapper onSubmit={handleSubmit}>
          {/* ================= FEE GROUP ================= */}

          <SectionCard title="Select Fee Group" icon={<FaIndianRupeeSign />}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Object.keys(feeGroups).map((group) => {
                const currentGroup = group as keyof typeof feeGroups;

                return (
                  <label
                    key={group}
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      feeGroup === currentGroup
                        ? "border-[#1e3a5f] bg-blue-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="feeGroup"
                        value={group}
                        checked={feeGroup === currentGroup}
                        onChange={() => handleGroupChange(currentGroup)}
                        className="h-5 w-5 accent-[#1e3a5f]"
                      />

                      <span className="font-medium text-slate-700">
                        {group}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </SectionCard>

          {/* ================= CLASS ================= */}

          <SectionCard title="Select Class" icon={<FaSchool />}>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {classes.map((className) => (
                <label
                  key={className}
                  className={`cursor-pointer rounded-xl border p-4 transition ${
                    selectedClass === className
                      ? "border-[#1e3a5f] bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="class"
                      value={className}
                      checked={selectedClass === className}
                      onChange={() => setSelectedClass(className)}
                      className="h-5 w-5 accent-[#1e3a5f]"
                    />

                    <span className="font-medium uppercase text-slate-700">
                      {className}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </SectionCard>

          {/* ================= MONTHLY FEE ================= */}

          {selectedClass && (
            <SectionCard title="Monthly Fee" icon={<FaMoneyBillWave />}>
              <div className="mb-5">
                <p className="text-sm text-slate-500">
                  {feeGroup} /{" "}
                  <span className="font-semibold uppercase text-slate-700">
                    {selectedClass}
                  </span>
                </p>
              </div>

              <Row>
                <FormInput
                  name="monthFee"
                  label="Monthly Fee"
                  value={state.monthlyObj.monthFee}
                  onChange={handleMonthlyFeeChange}
                  type="number"
                  placeholder="Enter Monthly Fee"
                  icon={<FaIndianRupeeSign />}
                />

                <FormInput
                  name="busFee"
                  label="Bus Fee"
                  value={state.monthlyObj.busFee}
                  onChange={handleMonthlyFeeChange}
                  type="number"
                  placeholder="Enter Bus Fee"
                  icon={<FaBus />}
                />
              </Row>

              <button
                type="button"
                onClick={handleMonthSubmit}
                className="
                  mt-5
                  rounded-lg
                  bg-[#1e3a5f]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#162d4a]
                "
              >
                Add Class Fee
              </button>
            </SectionCard>
          )}

          {/* ================= ADDED MONTHLY FEES ================= */}

          {state.monthList.length > 0 && (
            <SectionCard title="Added Monthly Fees" icon={<FaMoneyBillWave />}>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-slate-500">
                  Review the monthly fees added for each class.
                </p>

                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1e3a5f]">
                  {state.monthList.length}{" "}
                  {state.monthList.length === 1 ? "Class" : "Classes"}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {state.monthList.map((fee: any, index: number) => {
                  const monthlyFee = Number(fee.monthFee) || 0;

                  const busFee = Number(fee.busFee) || 0;

                  const total = monthlyFee + busFee;

                  return (
                    <div
                      key={`${fee.selectedClass}-${index}`}
                      className="
                          rounded-xl
                          border
                          border-slate-200
                          bg-slate-50
                          p-5
                          transition
                          hover:border-slate-300
                          hover:bg-white
                          hover:shadow-sm
                        "
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                            Class
                          </p>

                          <h3 className="mt-1 text-xl font-bold uppercase text-slate-800">
                            {fee.selectedClass}
                          </h3>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-[#1e3a5f]">
                          {index + 1}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3">
                          <span className="text-sm text-slate-500">
                            Monthly Fee
                          </span>

                          <span className="font-semibold text-slate-800">
                            ₹{monthlyFee.toLocaleString("en-IN")}
                          </span>
                        </div>

                        <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3">
                          <span className="text-sm text-slate-500">
                            Bus Fee
                          </span>

                          <span className="font-semibold text-slate-800">
                            ₹{busFee.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
                        <span className="text-sm font-medium text-slate-500">
                          Total Monthly
                        </span>

                        <span className="text-lg font-bold text-[#1e3a5f]">
                          ₹{total.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SectionCard>
          )}

          {/* ================= OTHER FEES ================= */}

          <SectionCard title="Other Fees" icon={<FaMoneyBillWave />}>
            <div className="mb-5">
              <p className="text-sm text-slate-500">
                Add one-time fees for this fee structure.
              </p>
            </div>

            <Row>
              <FormInput
                name="admissionFee"
                label="Admission Fee"
                value={state.feeObj.admissionFee}
                onChange={handleChange}
                type="number"
                placeholder="Enter Admission Fee"
                icon={<FaMoneyBillWave />}
              />

              <FormInput
                name="registrationFee"
                label="Registration Fee"
                value={state.feeObj.registrationFee}
                onChange={handleChange}
                type="number"
                placeholder="Enter Registration Fee"
                icon={<FaMoneyBillWave />}
              />
            </Row>

            <Row>
              <FormInput
                name="annualFee"
                label="Annual Fee"
                value={state.feeObj.annualFee}
                onChange={handleChange}
                type="number"
                placeholder="Enter Annual Fee"
                icon={<FaMoneyBillWave />}
              />

              <FormInput
                name="examinationFee"
                label="Examination Fee"
                value={state.feeObj.examinationFee}
                onChange={handleChange}
                type="number"
                placeholder="Enter Examination Fee"
                icon={<FaSchool />}
              />
            </Row>

            <Row>
              <FormInput
                name="securityFee"
                label="Security Fee"
                value={state.feeObj.securityFee}
                onChange={handleChange}
                type="number"
                placeholder="Enter Security Fee"
                icon={<FaMoneyBillWave />}
              />
            </Row>

            <Button title="Create Fee" />
          </SectionCard>
        </FormWrapper>
      </PageContent>
    </PageLayout>
  );
};

export default CreateFee;
