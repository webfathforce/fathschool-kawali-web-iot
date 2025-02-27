"use client";

import CardInfoAttendance from "@/components/elements/cards/CardInfoAttendance";
import { useCheckedUser } from "@/hooks/useAttendance";

const InfoAttendance = () => {
  const { CheckedUser, CheckedUserLoad } = useCheckedUser();

  return (
    <main>
      {/* <div className="mb-4">
        <h4>Info Kehadiran</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ad?</p>
      </div> */}
      <CardInfoAttendance {...CheckedUser} isLoading={CheckedUserLoad} />
    </main>
  );
};

export default InfoAttendance;
