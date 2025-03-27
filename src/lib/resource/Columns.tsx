import { Chip } from "@heroui/react";
import { Icons } from "./IconExport";

const columnsAttendance = [
  {
    label: "Hari",
    renderCell: (item) => item.day,
  },
  {
    label: "Tanggal",
    renderCell: (item) => (
      <div className="flex items-center gap-2 whitespace-nowrap">
        <Icons.date /> 
        <span>{item.date}</span>
      </div>
    ),
    resize: true,
  },
  {
    label: "Status",
    renderCell: (item) => (
      <div className="whitespace-nowrap">
        <Chip startContent={<Icons.info />} color={item.status === "Hadir" ? "success" : "danger"} variant="flat" size="sm" className={item.status === 'Hadir' ? 'text-success' : 'text-danger'}>
          {item.status}
        </Chip>
      </div>
    ),
    resize: true,
  },
  {
    label: "Jam Masuk",
    renderCell: (item) => (
      <div className="flex items-center gap-2 whitespace-nowrap">
        <Icons.clock />
        <span>{item.check_in}</span>
      </div>
    ),
    resize: true,
  },

];

export {
  columnsAttendance
}