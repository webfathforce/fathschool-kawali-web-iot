import { Icons } from "@/lib/resource/IconExport";
import { getTimeNow } from "@/lib/utils/FormatedTime";
import { Button, Card, CardBody, Divider } from "@heroui/react";
import { TbTemperatureSun } from "react-icons/tb";

interface Props {
  airQuality: string;
  temperature: string;
  humidity: string;
  rainfall: string;
  waterQuality: string;
  electricityEfficiency: string;
  lightingCondition: string;
  warningSystem: string;
}

const CardInfoCondition = (props: Props) => {
  return (
    <Card className="max-w-full shadow-md lg:p-2">
      <CardBody>
        <span className="flex gap-2 items-center mt-1">
          <Icons.date />
          <p>{getTimeNow()}</p>
        </span>
        <Divider className="my-4" />

        <div>
          <div className="flex items-center gap-4">
            <Button
              isIconOnly
              variant="flat"
              radius="full"
              color="primary"
              className="h-16 w-16"
            >
              <TbTemperatureSun size={32} />
            </Button>
            <div>
              <h2>{props.temperature ?? "0°C"}</h2>
              <small>Suhu Saat ini</small>
            </div>
          </div>
        </div>

        <Divider className="my-4" />

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <span className="flex gap-2 items-center">
            <Icons.cloud />
            <p>Kualitas Udara: {props.airQuality ?? "Baik"}</p>
          </span>

          <span className="flex gap-2 items-center">
            <Icons.humidity />
            <p>Kelembaban: {props.humidity ?? "0%"}</p>
          </span>
          <span className="flex gap-2 items-center">
            <Icons.rainDrops />
            <p>Curah Hujan: {props.rainfall ?? "0mm"}</p>
          </span>
          <span className="flex gap-2 items-center">
            <Icons.water />
            <p>Kualitas Air: {props.waterQuality ?? "Bersih"}</p>
          </span>
          <span className="flex gap-2 items-center">
            <Icons.lightning />
            <p>Efisiensi Listrik: {props.electricityEfficiency ?? "0%"}</p>
          </span>
          <span className="flex gap-2 items-center">
            <Icons.light />
            <p>Kondisi Penerangan: {props.lightingCondition ?? "Cukup"}</p>
          </span>
        </div> */}

        <div className="grid lg:grid-cols-3 gap-6">
          
          <div className="border rounded-xl p-4">
            <span className="flex gap-2 items-center mb-1">
              <Icons.cloud />
              <p>Kualitas Udara</p>
            </span>
            <h3>{props.airQuality ?? "Baik"}</h3>
          </div>
         
          <div className="border rounded-xl p-4">
            <span className="flex gap-2 items-center mb-1">
              <Icons.humidity />
              <p>Kelembaban</p>
            </span>
            <h3>{props.humidity ?? "0%"}</h3>
          </div>
         
          <div className="border rounded-xl p-4">
            <span className="flex gap-2 items-center mb-1">
              <Icons.rainDrops />
              <p>Curah Hujan</p>
            </span>
            <h3>{props.rainfall ?? "0mm"}</h3>
          </div>
          
          <div className="border rounded-xl p-4">
            <span className="flex gap-2 items-center mb-1">
              <Icons.water />
              <p>Kualitas Air</p>
            </span>
            <h3>{props.waterQuality ?? "Bersih"}</h3>
          </div>
          
          <div className="border rounded-xl p-4">
            <span className="flex gap-2 items-center mb-1">
              <Icons.lightning />
              <p>Efisiensi Listrik</p>
            </span>
            <h3>{props.electricityEfficiency ?? "0%"}</h3>
          </div>
          
          <div className="border rounded-xl p-4">
            <span className="flex gap-2 items-center mb-1">
              <Icons.light />
              <p>Kondisi Penerangan</p>
            </span>
            <h3>{props.lightingCondition ?? "Cukup"}</h3>
          </div>

        </div>

        <Divider className="my-4" />
        <span className="flex gap-2 items-center">
          <Icons.notification />
          <p>Peringatan: {props.warningSystem ?? "Normal"}</p>
        </span>
      </CardBody>
    </Card>
  );
};

export default CardInfoCondition;
