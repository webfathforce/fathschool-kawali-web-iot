"use client";

import React from "react";
import Title from "../elements/Title";
import { Card } from "@heroui/react";

const SurveillancePanel = () => {
  return (
    <>
      <Title
        title="Lihat CCTV Sekolah"
        desc="Pantau kondisi lingkungan sekolah secara real-time"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card
            key={item}
            className="w-full h-52 cursor-pointer"
            classNames={{ base: "shadow-md border" }}
          />
        ))}
      </div>
    </>
  );
};

export default SurveillancePanel;
