import Image from "next/image";
import NextReminder from "./components/NextReminder";
export default function Home() {
  return (
    <div className="bg-[#C89E85] rounded-3xl text-white m-2 h-80">
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-2xl mt-4">Hallo, Tim!</p>
        <p>Wie geht es dir heute?</p>
      </div>
      <div className="flex justify-end">
        <Image src="/medicinehand.png" alt="capsule image" width={150} height={150} className="transform scale-x-[-1]" />
      </div>
    </div>
  )
}
