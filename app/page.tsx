import Image from "next/image";
import NextReminder from "./components/NextReminder";
import StreakWidget from "./components/StreakWidget";
import { StreakData } from "./components/StreakWidget";
const activeStreakData: StreakData = {
  totalDays: 23,
  currentWeek: {
    monday: {
      date: new Date("2025-11-18"),
      completed: true,
      totalDoses: 3,
      missedDoses: 0
    },
    tuesday: {
      date: new Date("2025-11-19"),
      completed: true,
      totalDoses: 3,
      missedDoses: 0
    },
    wednesday: {
      date: new Date("2025-11-20"),
      completed: true,
      totalDoses: 3,
      missedDoses: 1
    },
    thursday: {
      date: new Date("2025-11-21"),
      completed: false,
      totalDoses: 3,
      missedDoses: 0
    },
    friday: {
      date: new Date("2025-11-22"),
      completed: false,
      totalDoses: 3,
      missedDoses: 0
    },
    saturday: {
      date: new Date("2025-11-23"),
      completed: false,
      totalDoses: 2,
      missedDoses: 0
    },
    sunday: {
      date: new Date("2025-11-24"),
      completed: false,
      totalDoses: 2,
      missedDoses: 0
    }
  }
};
export default function Home() {
  return (
    <>
      <div className="bg-[#C89E85] rounded-3xl text-white m-2 p-4 relative overflow-hidden">
        <div className="flex flex-col items-center justify-center z-30 relative">
          <p className="font-semibold text-2xl my-5">Hallo, Tim!</p>
        </div>
        <div className="relative mt-4">

          <div className="relative z-10 mt-8">
            <NextReminder />
          </div>
        </div>
        <Image src="/medicinehand.png" alt="medicinehand picture" className="transform scale-x-[-1] absolute top-2 right-0 z-20 pointer-events-none" width={150} height={150} />
      </div>
      <StreakWidget input={activeStreakData} />
    </>
  )
} 
