import Image from "next/image"
export default function NextReminder() {

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/capsule.png" alt="capsule image" width={32} height={32} />
          <div>
            <p className="font-bold text-lg text-gray-800">Magnesium</p>
            <p className="text-sm text-gray-500 mt-0.5">Supplement</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-[#C89E85]">12:00</p>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mt-1">Today</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-xs text-gray-600">Next reminder in 2h 15m</p>
        </div>
        <button className="text-xs font-semibold text-[#C89E85] hover:text-[#B88E75] transition-colors">
          Take now →
        </button>
      </div>
    </div>
  )
}
