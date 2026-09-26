"use client";

import React, { useState } from "react";

import {
  FaBus,
  FaIdCard,
  FaPhoneAlt,
  FaUser,
  FaCar,
  FaList,
} from "react-icons/fa";

import Button from "@/components/common/Button";
import FormInput from "@/components/common/FormInput";
import FormWrapper from "@/components/common/FormWrapper";
import PageContent from "@/components/common/PageContent";
import PageHeader from "@/components/common/PageHeader";
import ListBtn from "@/components/common/ListBtn";
import Row from "@/components/common/Row";
import SectionCard from "@/components/common/SectionCard";
import PageLayout from "@/components/layouts/PageLayout";

const heading = {
  title: "Add New Transport",
  subTitle: "Transport Management",
  desc: "Add a new transport vehicle and manage driver information",
};

const CreateTransport = () => {
  const [state, setState] = useState({
    transportObj: {
      transportId: "",
      registrationNumber: "",
      seatingCapacity: "",
      vehicleType: "",
      name: "",
      phone: "",
      licenseNumber: "",
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setState({
      ...state,
      transportObj: {
        ...state.transportObj,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("Transport Data:", state.transportObj);
  };

  return (
    <PageLayout>
      <PageContent>
        <div className="flex flex-wrap justify-between gap-4">
          <PageHeader heading={heading} />

          <ListBtn
            btn={{
              href: "/dashboard/admin/transport/transport-list",
              title: "Transport List",
              icon: <FaList size={13} />,
            }}
          />
        </div>

        <FormWrapper onSubmit={handleSubmit}>
          {/* ================= VEHICLE INFORMATION ================= */}

          <SectionCard title="Vehicle Information" icon={<FaBus />}>
            <Row>
              <FormInput
                name="transportId"
                label="Transport ID"
                value={state.transportObj.transportId}
                onChange={handleChange}
                type="text"
                placeholder="Enter transport number"
                icon={<FaIdCard />}
              />

              <FormInput
                name="registrationNumber"
                label="Registration Number"
                value={state.transportObj.registrationNumber}
                onChange={handleChange}
                type="text"
                placeholder="Enter registration number"
                icon={<FaIdCard />}
              />
            </Row>

            <Row>
              <FormInput
                name="seatingCapacity"
                label="Seating Capacity"
                value={state.transportObj.seatingCapacity}
                onChange={handleChange}
                type="number"
                placeholder="Enter seating capacity"
                icon={<FaBus />}
              />

              <FormInput
                name="vehicleType"
                label="Vehicle Type"
                value={state.transportObj.vehicleType}
                onChange={handleChange}
                type="text"
                placeholder="Enter vehicle type"
                icon={<FaCar />}
              />
            </Row>
          </SectionCard>

          {/* ================= DRIVER INFORMATION ================= */}

          <SectionCard title="Driver Information" icon={<FaUser />}>
            <Row>
              <FormInput
                name="name"
                label="Driver Name"
                value={state.transportObj.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter driver name"
                icon={<FaUser />}
              />

              <FormInput
                name="phone"
                label="Driver Phone"
                value={state.transportObj.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Enter phone number"
                icon={<FaPhoneAlt />}
              />
            </Row>

            <Row>
              <FormInput
                name="licenseNumber"
                label="License Number"
                value={state.transportObj.licenseNumber}
                onChange={handleChange}
                type="text"
                placeholder="Enter license number"
                icon={<FaIdCard />}
              />
            </Row>

            <Button title="Create Transport" />
          </SectionCard>
        </FormWrapper>
      </PageContent>
    </PageLayout>
  );
};

export default CreateTransport;
