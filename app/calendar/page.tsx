import { CustomCalendar } from "../components/calendar";
import { getCurrentUser } from "@/app/api/actions";
import { redirect } from "next/navigation";

export default async function Calendar() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex items-center justify-center m-4">
      <CustomCalendar />
    </div>
  );
}
