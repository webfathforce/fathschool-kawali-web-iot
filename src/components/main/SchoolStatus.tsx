"use client";

import React from "react";
import Title from "../elements/Title";
import SchoolWeather from "../fragments/SchoolWeather";
import { Tab, Tabs } from "@heroui/react";

const SchoolStatus = () => {
  return (
    <>
      <Title
        title="Info Kondisi Sekolah"
        desc="Pantau kondisi lingkungan sekolah secara real-time"
      />
      <Tabs color="primary" variant="underlined">
        <Tab key={"condition"} title="Kondisi saat ini">
          <SchoolWeather />
        </Tab>
        <Tab key={"device-status"} title="Status Perangkat" disabled />
      </Tabs>
    </>
  );
};

export default SchoolStatus;
