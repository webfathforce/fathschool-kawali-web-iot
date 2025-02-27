import { CheckedUser } from "@/lib/types/Attendance";
import { Card, CardHeader, CardBody, Divider, Chip, Skeleton } from "@heroui/react";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";
import { LuClipboardCheck, LuHourglass } from "react-icons/lu";

const CardInfoAttendance = (props: CheckedUser & { isLoading: boolean }) => {

  // Status Absensi
  const getStatus = () => {
    switch (true) {
      case props.checkedin:
        return { text: "Checked In", color: "text-success", icon: <FaCheckCircle className="text-success text-lg sm:text-xl" aria-label="Checked In" /> };
      case props.checkedout:
        return { text: "Checked Out", color: "text-primary", icon: <FaClock className="text-primary text-lg sm:text-xl" aria-label="Checked Out" /> };
      case !props.checkedin && !props.checkedout && props.leave === "pending":
        return { text: "Izin Menunggu Persetujuan", color: "text-warning", icon: <LuHourglass className="text-warning text-lg sm:text-xl" aria-label="Izin Pending" /> };
      case !props.checkedin && !props.checkedout && props.leave === "accepted":
        return { text: "Izin Disetujui", color: "text-success", icon: <LuClipboardCheck className="text-success text-lg sm:text-xl" aria-label="Izin Disetujui" /> };
      default:
        return { text: "Belum Hadir", color: "text-danger", icon: <FaTimesCircle className="text-danger text-lg sm:text-xl" aria-label="Belum Hadir" /> };
    }
  };

  const status = getStatus();

  if (props.isLoading) {
    return (
      <div className="max-w-full h-44">
        <Skeleton className="h-20 mb-4 rounded-xl" />
        <Skeleton className="h-8 rounded-xl" />
      </div>
    );
  }

  return (
    <Card className="max-w-full shadow-md h-max">
      <CardHeader className="flex flex-col items-start justify-center gap-1 lg:gap-2">
        <Chip color="primary" variant="flat" size="sm">Siswa</Chip>
        <span>
          <h5 className="font-bold line-clamp-2">{props.user?.name}</h5>
          <small>{props.user?.email}</small>
        </span>
      </CardHeader>
      <Divider />
      <CardBody className="space-y-3">
        <div className="flex items-center gap-2">
          {status.icon}
          <p className={`font-medium ${status.color}`}>Status: {status.text}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardInfoAttendance;

