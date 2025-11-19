import { Button } from "@/components/ui/button";
import { RiHome3Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-5 bg-white h-25 z-50 border-t shadow-lg">
      <Button variant="secondary" size="icon"><RiHome3Line /></Button>
      <Button variant="secondary"><FaRegCalendarAlt /></Button>
      <Button className="mb-3"><IoMdAdd /></Button>
      <Button variant="secondary"><IoIosStats /></Button>
      <Button variant="secondary"><CgProfile /></Button>
    </div>
  )
}
