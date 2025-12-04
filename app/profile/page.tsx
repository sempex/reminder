"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CgProfile } from "react-icons/cg";
import { IoIosStats, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import LogoutButton from "./logout-button";
import { useQuery } from "@tanstack/react-query";
import { getPersonalMedications } from "../api/medicine";
import { createClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { MedicationFrequency } from "../types";

export default function Profile() {
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        router.push("/auth/login");
        return;
      }

      setUser(data.user);
      setIsLoading(false);
    };
    loadUser();
  }, [router]);

  const { data: medicines, isLoading: medicinesLoading } = useQuery({
    queryKey: ["medicines"],
    queryFn: getPersonalMedications,
    enabled: !!user,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-[#C89E85]" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const getFrequencyDisplay = (frequency: MedicationFrequency | null) => {
    if (!frequency) return "As needed";

    if (frequency.type === "daily") {
      return `${frequency.timesPerDay}x daily`;
    }

    if (frequency.type === "weekly") {
      return `${frequency.daysOfWeek?.length || 0}x weekly`;
    }

    return "As needed";
  };

  return (
    <div className="p-4 space-y-4">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-[#C89E85] to-[#B88E75] rounded-3xl p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Image
            src="/capsule.png"
            alt="pills background"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <div className="bg-gradient-to-br from-[#C89E85] to-[#B88E75] rounded-full p-4">
              <CgProfile className="text-white text-4xl" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{"User"}</h1>
            <p className="text-white/80 text-sm">{user?.email}</p>
          </div>
          <Button variant="secondary" size="icon">
            <MdOutlineSettings className="text-xl" />
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 shadow-lg border border-gray-100">
          <div className="flex flex-col items-center">
            <FaFire className="text-orange-500 text-2xl mb-2" />
            <p className="text-2xl font-bold text-gray-800">7</p>
            <p className="text-xs text-gray-500">Day Streak</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 shadow-lg border border-gray-100">
          <div className="flex flex-col items-center">
            <IoIosStats className="text-[#C89E85] text-2xl mb-2" />
            <p className="text-2xl font-bold text-gray-800">95%</p>
            <p className="text-xs text-gray-500">On Time</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 shadow-lg border border-gray-100">
          <div className="flex flex-col items-center">
            <div className="text-green-500 text-2xl mb-2">💊</div>
            <p className="text-2xl font-bold text-gray-800">142</p>
            <p className="text-xs text-gray-500">Total</p>
          </div>
        </div>
      </div>

      {/* Medications List */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-xl border border-gray-100">
        <h2 className="font-bold text-lg text-gray-800 mb-4">My Medications</h2>
        <div className="space-y-3">
          {medicines?.mediactions.map((medication) => {
            const frequency = medication.frequency as MedicationFrequency | null;
            return (
              <div
                key={medication.id}
                className="flex items-center gap-3 pb-3 border-b border-gray-200"
              >
                <div className="bg-gradient-to-br from-[#C89E85] to-[#B88E75] rounded-xl p-2">
                  <Image
                    src="/capsule.png"
                    alt="capsule"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex gap-1">
                    <p className="font-semibold text-gray-800">
                      {medication.name}
                    </p>
                    <p className="text-gray-400">| {medication.type}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="text-xs text-gray-500">{medication.dosage}</p>
                    <p className="text-xs text-gray-500">
                      | {getFrequencyDisplay(frequency)}
                    </p>
                  </div>
                </div>
                <div
                  className={`${medication.isActive ? "text-green-500" : "text-red-500"} text-sm`}
                >
                  {medication.isActive ? "Active" : "Inactive"}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Settings Menu */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-xl border border-gray-100">
        <h2 className="font-bold text-lg text-gray-800 mb-4">Settings</h2>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl transition-colors">
            <IoMdNotificationsOutline className="text-xl text-gray-600" />
            <span className="flex-1 text-left text-gray-800">
              Notifications
            </span>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl transition-colors">
            <MdOutlineSettings className="text-xl text-gray-600" />
            <span className="flex-1 text-left text-gray-800">Preferences</span>
            <span className="text-gray-400">›</span>
          </button>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
