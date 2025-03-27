'use client';

import { useGetWeather } from "@/lib/hooks/useWeather";
import { getFormattedDate, getFormattedTime } from "@/lib/utils/dateTime";
import { Bell, Calender, Clock, Cloud, School, Thermometer } from "@/resource/icons";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import React from "react";

const SchoolWeather = () => {
  const { data } = useGetWeather();


  const WeatherData = [
    {
      label: "Kualitas Udara",
      icon: <Cloud />,
      value: data || 'Baik',
    },
    {
      label: "Kelembapan ",
      icon: <Cloud />,
      value: "70%",
    },
    {
      label: "Curah Hujan",
      icon: <Cloud />,
      value: "20mm",
    },
    {
      label: "Kualitas Air",
      icon: <Cloud />,
      value: "Bersih",
    },
    {
      label: "Efisiensi Listrik",
      icon: <Cloud />,
      value: "90%",
    },
    {
      label: "Kondisi Penerangan",
      icon: <Cloud />,
      value: "Cukup",
    },
  ];

  return (
    <>
      <Card classNames={{ base: "shadow-md" }}>
        <CardHeader className="flex flex-col items-start gap-4">
          {/* Header */}
          <div className="w-full flex items-center justify-between sm:gap-4 sm:justify-start">
            <small className="gap-2 items-center hidden sm:flex">
              <School size={18} />
              SMKN 1 Kawali 
            </small>

            <Divider orientation="vertical" className="h-4 hidden sm:block" />

            <small className="flex gap-2 items-center">
              <Calender size={18} />
              {getFormattedDate('dddd, DD MMM')}
            </small>

            <Divider orientation="vertical" className="h-4" />

            <small className="flex gap-2 items-center">
              <Clock size={18} />
             {getFormattedTime()} WIB
            </small>
          </div>

          <Divider />

          {/* Suhu Saat Ini */}
          <div className="flex items-center gap-4 p-2 rounded-xl bg-gradient-to-r from-orange-200/70 to-orange-100 dark:from-orange-900/70 dark:to-orange-800/15 text-orange-500 w-full">
            <div className="bg-orange-600/15 text-orange-500 p-3 rounded-full">
              <Thermometer size={32} />
            </div>

            <div>
              <h2>25°C</h2>
              <p className="text-zinc-800 dark:text-zinc-200">Kondisi saat ini</p>
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
          <span className="flex gap-2 items-center pt-2 border-t w-full">
            <Bell size={20} />
            <p>Peringatan: -</p>
          </span>
        </CardFooter>
      </Card>
    </>
  );
};

export default SchoolWeather;
