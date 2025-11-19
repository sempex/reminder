import Image from "next/image"
export default function NextReminder() {

  return (
    <div className="bg-white rounded-3xl px-30 py-2 m-2 gap-4 text-black">
      <div>
        <Image src="/capsule.png" alt="capsule image" width={30} height={30} />
        <p className="">Magnesium</p>
      </div>
      <p>at 12:00 today</p>
    </div>
  )
}
