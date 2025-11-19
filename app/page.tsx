import Image from "next/image";
import NextReminder from "./components/NextReminder";
import StreakWidget from "./components/StreakWidget";
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
      <StreakWidget />
    </>
  )
} 
