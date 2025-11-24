import { Button } from "@/components/ui/button";
import { RiHome3Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { addMedicine } from "../api/add-medicine";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { use, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MedicationFrequency } from "../types";
import { TimePicker } from "./time-picker";
import DayOfWeekSelector from "./dayofwekkSelector";
export default function Navbar() {
  const [medication, setMedication] = useState("");
  const [description, setDescription] = useState("");
  const [dosage, setDosage] = useState("");
  const [type, setType] = useState("Select type");
  const [frequencyNum, setFrequencyNum] = useState<number>(2);
  const [frequencyType, setFrequencyType] = useState<"daily" | "weekly">(
    "daily",
  );
  const [daysOfWeek, setDaysOfWeek] = useState<number[]>();
  const [frequencyTimes, setFrequencyTimes] = useState<Map<number, string>>(
    new Map(),
  );

  const handleSubmit = () => {
    let frequency: MedicationFrequency = {
      type: "as_needed",
    };

    if (frequencyType === "daily") {
      frequency = {
        type: "daily",
        timesPerDay: frequencyNum,
        times: Array.from(frequencyTimes.values()),
      };
    }

    if (frequencyType === "weekly") {
      frequency = {
        type: "weekly",
        daysOfWeek: [],
        times: Array.from(frequencyTimes.values()),
      };
    }

    addMedicine({
      name: medication,
      description: description,
      dosage: dosage,
      type: type,
      frequency: frequency,
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-5 bg-white h-25 z-50 border-t shadow-lg">
      <Link href="/">
        <Button variant="secondary">
          <RiHome3Line />
        </Button>
      </Link>
      <Link href="/calendar">
        <Button variant="secondary">
          <FaRegCalendarAlt />
        </Button>
      </Link>
      <Dialog>
        <form onSubmit={() => handleSubmit()}>
          <DialogTrigger asChild>
            <Button className="mb-2">
              <IoMdAdd />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add medication</DialogTitle>
              <DialogDescription>
                Add your medication or supplement to your profile!
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Mediaction name:</p>
              <Input
                placeholder="Magnesium"
                onChange={(e) => setMedication(e.target.value)}
              />

              <p className="font-semibold">Mediaction description:</p>
              <Input
                placeholder="Helps with my dizziness"
                onChange={(e) => setDescription(e.target.value)}
              />

              <p className="font-semibold">Mediaction dosage(mg):</p>
              <Input
                placeholder="5mg"
                onChange={(e) => setDosage(e.target.value)}
              />

              <p className="font-semibold">Frequency</p>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <Input
                    placeholder="2"
                    onChange={(e) => setFrequencyNum(Number(e.target.value))}
                  />
                  <DropdownMenu>
                    <Button variant="outline" asChild>
                      <DropdownMenuTrigger>{frequencyType}</DropdownMenuTrigger>
                    </Button>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onSelect={() => setFrequencyType("daily")}
                      >
                        daily
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => setFrequencyType("weekly")}
                      >
                        weekly
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {frequencyType === "weekly" ? <DayOfWeekSelector /> : <></>}
                <div className="grid grid-cols-2 gap-1">
                  {Array.from({ length: frequencyNum }, (_, index) => (
                    <TimePicker
                      key={index}
                      index={index}
                      setTimes={(time: string) =>
                        setFrequencyTimes((prev) =>
                          new Map(prev).set(index, time),
                        )
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="font-semibold">Mediaction type:</p>
              <DropdownMenu>
                <Button variant="outline" asChild>
                  <DropdownMenuTrigger>{type}</DropdownMenuTrigger>
                </Button>
                <DropdownMenuContent>
                  <DropdownMenuItem onSelect={() => setType("Supplement")}>
                    Supplement
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setType("Medication")}>
                    Medication
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
      <Button variant="secondary">
        <IoIosStats />
      </Button>
      <Link href="/profile">
        <Button variant="secondary">
          <CgProfile />
        </Button>
      </Link>
    </div>
  );
}
