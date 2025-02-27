"use client";

import CardEvent from "@/components/elements/cards/CardEvent";
import { useGetEvent } from "@/hooks/useEvent";
import { Select, SelectItem, Spinner } from "@heroui/react";
import React from "react";

const EventSchool = () => {
  const [selectedStatus, setSelectedStatus] = React.useState<"All" | "Upcoming" | "Ongoing" | "Ended">("All");
  const { Event, EventLoad } = useGetEvent(selectedStatus);

  if (EventLoad) {
    return (
      <div className="flex justify-center items-center min-h-24 bg-white rounded-2xl shadow-md">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <div>
          <h4 className=" mb-2">Agenda Sekolah</h4>
          <p className="text-gray-600 dark:text-gray-400">
            Lihat daftar event terbaru di sekolah. Jika ada acara yang tersedia
          </p>
        </div>
        <Select
          label="Status"
          placeholder="Pilih type status"
          defaultSelectedKeys={[selectedStatus]}
          onChange={(e) => setSelectedStatus(e.target.value as "All" | "Upcoming" | "Ongoing" | "Ended")}
        >
          {["All", "Upcoming", "Ongoing", "Ended"].map((item) => (
            <SelectItem key={item}>{item}</SelectItem>
          ))}
        </Select>
      </div>

      {Event.length > 0 ? (
        <div className="flex flex-col gap-6 lg:grid grid-cols-2">
          {Event?.map((item) => (
            <CardEvent key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div>
          <p>Data Tidak Ditemukan</p>
        </div>
      )}
    </div>
  );
};

export default EventSchool;
