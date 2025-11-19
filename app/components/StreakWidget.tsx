import { Progress } from "@/components/ui/progress";
import { IoMdFlame } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

export default function StreakWidget() {
  return (
    <div className="bg-slate-50 rounded-3xl flex items-end gap-4 m-2 p-2">
      <div className="flex flex-col bg-slate-100 rounded-3xl justify-center items-center w-30 h-30 p-2">
        <IoMdFlame className="text-8xl text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
        <p className="font-bold">143 Days</p>
      </div>
      <div className="">
        <Progress value={80} className="drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
        <div className="flex gap-2 mt-4 bg-slate-100 p-4 font-bold rounded-3xl">
          <div>
            <FaCircleCheck className="text-orange-500" />
            <p>Mo</p>
          </div>
          <div>
            <FaCircleCheck />
            <p>Di</p>
          </div>
          <div>
            <FaCircleCheck />
            <p>Mi</p>
          </div>
          <div>
            <FaCircleCheck />
            <p>Do</p>
          </div>
          <div>
            <FaCircleCheck />
            <p>Fr</p>
          </div>
          <div>
            <FaCircleCheck />
            <p>Sa</p>
          </div>
          <div>
            <FaCircleCheck />
            <p>So</p>
          </div>
        </div>
      </div>
    </div>
  )
}
