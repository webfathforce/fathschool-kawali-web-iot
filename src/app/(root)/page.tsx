import SchoolStatus from "@/components/main/SchoolStatus";
import SurveillancePanel from "@/components/main/SurveillancePanel";

export default function Home() {
  return (
    <main className="pt-4 pb-6">
      <SchoolStatus/>
      <SurveillancePanel/>
    </main>
  )
}
