import NavDash from "@/components/layouts/NavDash";
import InfoCondition from "@/components/pages/schoolCondition/InfoCondition";

export default function LoginPage() {
  return (
    <>
      <NavDash />

      <main className="container py-10">
        <InfoCondition />
      </main>
    </>
  );
}
