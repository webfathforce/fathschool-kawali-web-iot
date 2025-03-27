"use client";

import { useGetWeather } from "@/lib/hooks/useWeather";
import { getTemperatureClass, parseTemperature } from "@/lib/utils/basic";
import { getFormattedDate, getFormattedTime } from "@/lib/utils/dateTime";
import {
  Bell,
  Calender,
  Clock,
  Cloud,
  RefreshCW,
  School,
  Thermometer,
} from "@/resource/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@heroui/react";
import React from "react";
import { toast } from "sonner";

const SchoolWeather = () => {
  const { data, isFetching, refetch } = useGetWeather();

  const WeatherData = [
    {
      label: "Kualitas Udara",
      icon: <Cloud />,
      value: data?.airQuality || "-",
    },
    {
      label: "Kelembapan ",
      icon: <Cloud />,
      value: data?.humidity || "0%",
    },
    {
      label: "Curah Hujan",
      icon: <Cloud />,
      value: data?.rainfall || "0mm",
    },
    {
      label: "Kualitas Air",
      icon: <Cloud />,
      value: data?.waterQuality || "-",
    },
    {
      label: "Efisiensi Listrik",
      icon: <Cloud />,
      value: data?.electricityEfficiency || "0%",
    },
    {
      label: "Kondisi Penerangan",
      icon: <Cloud />,
      value: data?.lightingCondition || "-",
    },
  ];

  if (isFetching) {
    toast.info("Memuat data...");
  }

  return (
    <>
      <Card classNames={{ base: "shadow-md" }}>
        <CardHeader className="flex flex-col items-start gap-4">
          {/* Header */}
          <div className="w-full flex items-center justify-between sm:gap-4 sm:justify-start">
            <small className="min-w-max gap-2 items-center hidden sm:flex">
              <School size={18} />
              SMKN 1 Kawali
            </small>

            <Divider orientation="vertical" className="h-4 hidden sm:block" />

            <small className="min-w-max flex gap-2 items-center">
              <Calender size={18} />
              {getFormattedDate("dddd, DD MMM")}
            </small>

            <Divider orientation="vertical" className="h-4" />

            <small className="min-w-max sm:w-full flex gap-2 items-center">
              <Clock size={18} />
              {getFormattedTime()} WIB
            </small>

            <Button
              className="hidden sm:block"
              isIconOnly
              variant="light"
              isDisabled={isFetching}
              onPress={() => refetch()}
            >
              <RefreshCW size={18} />
            </Button>
          </div>

          <Divider />

          {/* Suhu Saat Ini */}
          <div
            className={`flex items-center gap-4 p-2 rounded-xl bg-gradient-to-r w-full ${getTemperatureClass(
              parseTemperature(data?.temperature as string)
            )}`}
          >
            <div className={`p-3 rounded-full ${parseTemperature(data?.temperature as string) < 20 ? "bg-blue-600/15 text-blue-500": "bg-orange-600/15 text-orange-500"}`}>
              <Thermometer size={32} />
            </div>

            <div>
              <h2>{data?.temperature || "0°C"}</h2>
              <p className="text-zinc-800 dark:text-zinc-200">
                Kondisi saat ini
              </p>
            </div>
          </div>
        </CardHeader>

        {/* Detail Cuaca */}
        <CardBody className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WeatherData.map((item, index) => (
            <div key={index} className="border rounded-xl p-2.5 space-y-2">
              <span className="flex items-center gap-2">
                {item.icon}
                {item.label}
              </span>

              <h3>{item.value}</h3>
            </div>
          ))}
        </CardBody>

        <CardFooter>
          <span className="flex gap-2 items-center pt-4 border-t w-full">
            <Bell size={20} />
            <p>Peringatan: {data?.warningSystem || "Tidak ada peringatan"}</p>
          </span>
        </CardFooter>
      </Card>
    </>
  );
};

export default SchoolWeather;
