"use client";

import {
  useAttendanceExport,
  useAttendanceStudent,
} from "@/hooks/useAttendance";
import { CompactTable } from "@table-library/react-table-library/compact";
import { TableTheme } from "@/lib/resource/Other";
import { columnsAttendance } from "@/lib/resource/Columns";
import React from "react";
import { Button, Card, Input, Spinner } from "@heroui/react";
import { Icons } from "@/lib/resource/IconExport";

const TableAttendance = () => {
  const [dateRange, setDateRange] = React.useState({
    start_date: '',
    end_date: new Date().toISOString().split('T')[0],
  });

  const { AttendanceExport, AttendanceExportLoad } = useAttendanceExport(
    dateRange.start_date || undefined, 
    dateRange.end_date
  );

  const { Attedance, AttedanceLoad } = useAttendanceStudent(
    dateRange.start_date,
    dateRange.end_date
  );

  const tableData = { 
    nodes: Array.isArray(Attedance) ? Attedance : [] 
  };

  const handleDateChange = (field: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDateRange((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  return (
    <>
      <section className="mb-8">
        <h4 className=" mb-2">Laporan Kehadiran</h4>
        <p className="text-gray-600 dark:text-gray-400">
          Pilih rentang tanggal untuk melihat atau mengunduh laporan kehadiran
        </p>
      </section>

      {/* Responsive input section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Input
          label="Tanggal Mulai"
          type="date"
          placeholder="Dari Tanggal"
          labelPlacement="outside"
          value={dateRange.start_date}
          onChange={handleDateChange('start_date')}
          className="w-full"
        />
        <Input
          label="Tanggal Akhir"
          type="date"
          placeholder="Sampai Tanggal"
          labelPlacement="outside"
          value={dateRange.end_date}
          onChange={handleDateChange('end_date')}
          className="w-full"
        />
        <Button
          color="primary"
          className="w-full h-[40px] sm:mt-7"
          startContent={<Icons.file />}
          isDisabled={AttendanceExportLoad}
          isLoading={AttendanceExportLoad}
          onPress={AttendanceExport}
        >
          Export
        </Button>
      </section>

      {/* Table section with proper scrolling */}
      <section className="relative w-full rounded-2xl">
        {AttedanceLoad ? (
          <Card className="flex justify-center items-center min-h-48">
            <Spinner />
          </Card>
        ) : (
          <div className="relative rounded-2xl">
            {/* Table wrapper with scroll */}
            <div className="rounded-2xl overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
              <div className="min-w-[800px] rounded-2xl">
                <CompactTable
                  columns={columnsAttendance}
                  data={tableData}
                  theme={TableTheme()}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default TableAttendance;