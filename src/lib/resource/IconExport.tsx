import { FiEye, FiEyeOff, FiFileText } from "react-icons/fi";
import { LuMoonStar, LuSun, LuClock8 } from "react-icons/lu";
import { RiUser3Line, RiWaterPercentLine } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { BsInfo } from "react-icons/bs";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WiDayCloudyGusts, WiRain } from "react-icons/wi";
import { IoWaterOutline } from "react-icons/io5";
import { PiLightningLight } from "react-icons/pi";
import { GoLightBulb } from "react-icons/go";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { TiInfoLarge } from "react-icons/ti";

export const Icons = {
  eye: () => <FiEye />,
  eyeOff: () => <FiEyeOff />,
  sun: () => <LuSun size={24} />,
  moon: () => <LuMoonStar size={24} />,
  user: () => <RiUser3Line size={24} />,
  date: () => <MdOutlineDateRange size={18} />,
  info: () => <BsInfo  size={18} />,
  clock: () => <LuClock8 size={18} />,
  file: () => <FiFileText size={18} />,

  // Card Condition
  light: () => <GoLightBulb size={18} />,
  lightning: () => <PiLightningLight size={18} />,
  water: () => <IoWaterOutline size={18} />,
  humidity: () => <RiWaterPercentLine size={18} />,
  rainDrops: () => <WiRain size={22} />,
  cloud: () => <WiDayCloudyGusts size={22} />,
  temperature: () => <TbTemperatureCelsius size={22} />,
  
  // Navbar Bottom
  profile: () => <RiUser3Line size={20} />,
  home: () => <AiOutlineHome size={20} />,
  infoBold: () => <TiInfoLarge size={20} />,
  settings: () => <IoSettingsOutline size={20} />,
  notification: () => <IoNotificationsOutline size={20} />,
}

   {/* <div>

        <div className="flex items-center gap-4">
          <span className="bg-default-200 rounded-full flex items-center justify-center w-max p-3">
            <TbTemperatureSun size={28} />
          </span>
          <div>
            <h2>{data.temperature}</h2>
            <p>Suhu Saat Ini</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="p-3 rounded-lg border">
            <span className="flex items-center gap-2 mb-2">
              <Icons.cloud />
              <p>Kondisi Udara</p>
            </span>
            <h4>{data.airQuality}</h4>
          </div>
          
          <div className="p-3 rounded-lg border">
            <span className="flex items-center gap-2 mb-2">
              <Icons.humidity />
              <p>Kelembapan</p>
            </span>
            <h4>{data.humidity}</h4>
          </div>
          
          <div className="p-3 rounded-lg border">
            <span className="flex items-center gap-2 mb-2">
              <Icons.rainDrops />
              <p>Curah Hujan</p>
            </span>
            <h4>{data.rainfall}</h4>
          </div>
         
          <div className="p-3 rounded-lg border">
            <span className="flex items-center gap-2 mb-2">
              <Icons.water />
              <p>Kualitas Air</p>
            </span>
            <h4>{data.waterQuality}</h4>
          </div>
          
          <div className="p-3 rounded-lg border">
            <span className="flex items-center gap-2 mb-2">
              <Icons.lightning />
              <p>Efisiensi Listrik</p>
            </span>
            <h4>{data.electricityEfficiency}</h4>
          </div>
          
          <div className="p-3 rounded-lg border">
            <span className="flex items-center gap-2 mb-2">
              <Icons.light />
              <p>Penerangan</p>
            </span>
            <h4>{data.lightingCondition}</h4>
          </div>

        </div>

      </div> */}