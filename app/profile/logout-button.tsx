"use client";

import { MdLogout } from "react-icons/md";
import { signOut } from "@/app/api/actions";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="w-full flex items-center gap-3 p-3 hover:bg-red-50 rounded-xl transition-colors text-red-600"
    >
      <MdLogout className="text-xl" />
      <span className="flex-1 text-left">Logout</span>
      <span className="text-red-400">›</span>
    </button>
  );
}
