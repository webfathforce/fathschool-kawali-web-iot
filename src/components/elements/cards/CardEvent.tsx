'use client';

import { Icons } from "@/lib/resource/IconExport";
import { FormattedTime } from "@/lib/utils/FormatedTime";
import { Card, CardBody, CardHeader, Chip, Divider } from "@heroui/react";

interface Props {
  id: number
  title: string;
  description: string;
  start: string;
  end: string;
  color: string;
  status: string
  created_at: string;
  remaining_days: number;
}

const CardEvent = (props: Props) => {
  return (
    <Card className={`w-full shadow-md border-s-2 lg:border-s-4 `} key={props.id} style={{ borderColor: props.color }}>
      <CardHeader className="w-full flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <Chip
            color={ props.status === "Ongoing" ? "warning" : props.status === "Ended" ? "danger" : props.status === "Upcoming" ? "primary" : "default"}
            size="sm"
            variant="flat"
          >
            {props.status}
          </Chip>
          <small>- {props.remaining_days} Hari Lagi</small>
        </div>
        <div>
          <h6 className="line-clamp-4 font-semibold">{props.title}</h6>
          <span className="flex items-center gap-1.5 mt-1.5">
            <Icons.date />
            <small>
              Dari {props.start} sampai {props.end}
            </small>
          </span>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <small>{FormattedTime(props.created_at)}</small>
      </CardBody>
    </Card>
  );
};

export default CardEvent;
