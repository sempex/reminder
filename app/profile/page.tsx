import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CgProfile } from "react-icons/cg";
import { IoIosStats, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineSettings, MdLogout } from "react-icons/md";
import { FaFire } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="p-4 space-y-4">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-[#C89E85] to-[#B88E75] rounded-3xl p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Image src="/capsule.png" alt="pills background" width={200} height={200} className="object-cover" />
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <div className="bg-gradient-to-br from-[#C89E85] to-[#B88E75] rounded-full p-4">
              <CgProfile className="text-white text-4xl" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Tim Reber</h1>
            <p className="text-white/80 text-sm">tim@example.com</p>
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
          <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
            <div className="bg-gradient-to-br from-[#C89E85] to-[#B88E75] rounded-xl p-2">
              <Image src="/capsule.png" alt="capsule" width={24} height={24} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Magnesium</p>
              <p className="text-xs text-gray-500">2x daily</p>
            </div>
            <div className="text-green-500 text-sm">Active</div>
          </div>
          <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
            <div className="bg-gradient-to-br from-[#C89E85] to-[#B88E75] rounded-xl p-2">
              <Image src="/capsule.png" alt="capsule" width={24} height={24} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Vitamin D</p>
              <p className="text-xs text-gray-500">1x daily</p>
            </div>
            <div className="text-green-500 text-sm">Active</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#C89E85] to-[#B88E75] rounded-xl p-2">
              <Image src="/capsule.png" alt="capsule" width={24} height={24} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Omega-3</p>
              <p className="text-xs text-gray-500">1x daily</p>
            </div>
            <div className="text-green-500 text-sm">Active</div>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-xl border border-gray-100">
        <h2 className="font-bold text-lg text-gray-800 mb-4">Settings</h2>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl transition-colors">
            <IoMdNotificationsOutline className="text-xl text-gray-600" />
            <span className="flex-1 text-left text-gray-800">Notifications</span>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl transition-colors">
            <MdOutlineSettings className="text-xl text-gray-600" />
            <span className="flex-1 text-left text-gray-800">Preferences</span>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 hover:bg-red-50 rounded-xl transition-colors text-red-600">
            <MdLogout className="text-xl" />
            <span className="flex-1 text-left">Logout</span>
            <span className="text-red-400">›</span>
          </button>
        </div>
      </div>
    </div>
  )
}
