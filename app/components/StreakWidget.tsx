import { Progress } from "@/components/ui/progress";
import { IoMdFlame } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

interface DayStatus {
  date: Date;
  completed: boolean;
  missedDoses?: number;
  totalDoses?: number;
}

export interface StreakData {
  totalDays: number;
  currentWeek: Record<DayOfWeek, DayStatus>;
}

export default function StreakWidget({ input }: { input: StreakData }) {
  return (
    <div className="bg-slate-50 rounded-3xl flex items-center gap-4 m-2 p-2">
      <div className="flex flex-col bg-slate-100 rounded-3xl justify-center items-center w-30 h-30 p-2">
        <IoMdFlame className="text-8xl text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
        <p className="font-bold">{input.totalDays}</p>
      </div>
      <div className="flex items-center justify-center bg-slate-100 h-30 w-full font-bold rounded-3xl ">
        <div className="flex flex-col items-center w-9">
          <FaCircleCheck
            className={`${input.currentWeek["monday"].completed ? "text-orange-500" : ""} text-2xl`}
          />
          <p>Mo</p>
        </div>
        <div className="flex flex-col items-center w-9">
          <FaCircleCheck
            className={`${input.currentWeek["tuesday"].completed ? "text-orange-500" : ""} text-2xl`}
          />
          <p>Di</p>
        </div>
        <div className="flex flex-col items-center w-9">
          <FaCircleCheck
            className={`${input.currentWeek["wednesday"].completed ? "text-orange-500" : ""} text-2xl`}
          />
          <p>Mi</p>
        </div>
        <div className="flex flex-col items-center w-9">
          <FaCircleCheck
            className={`${input.currentWeek["thursday"].completed ? "text-orange-500" : ""} text-2xl`}
          />
          <p>Do</p>
        </div>
        <div className="flex flex-col items-center w-9">
          <FaCircleCheck
            className={`${input.currentWeek["friday"].completed ? "text-orange-500" : ""} text-2xl`}
          />
          <p>Fr</p>
        </div>
        <div className="flex flex-col items-center w-9">
          <FaCircleCheck
            className={`${input.currentWeek["saturday"].completed ? "text-orange-500" : ""} text-2xl`}
          />
          <p>Sa</p>
        </div>
        <div className="flex flex-col items-center w-9">
          <FaCircleCheck
            className={`${input.currentWeek["sunday"].completed ? "text-orange-500" : ""} text-2xl`}
          />
          <p>So</p>
        </div>
      </div>
    </div>
  );
}
