import { Button } from "@/components/ui/button";
import { RiHome3Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-5 bg-white h-25 z-50 border-t shadow-lg">
      <Link href="/"><Button variant="secondary"><RiHome3Line /></Button></Link>
      <Link href="/calendar"><Button variant="secondary"><FaRegCalendarAlt /></Button></Link>
      <Button className="mb-3"><IoMdAdd /></Button>
      <Button variant="secondary"><IoIosStats /></Button>
      <Link href="/profile"><Button variant="secondary"><CgProfile /></Button></Link>
    </div>
  )
}
