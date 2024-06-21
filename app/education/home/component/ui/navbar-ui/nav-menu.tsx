import Link from "next/link";

export function Menu() {
  return (
    <div className="bg-[#6678BA] font-semibold text-lg text-white flex items-center gap-5 px-20 py-4">
      <Link href="/education/home" className=" hover:underline">
        Home
      </Link>
      <Link href="/education/dashbook" className=" hover:underline">
        DashBook1
      </Link>
      <Link href="/education/dashbook2" className=" hover:underline">
        DashBook2
      </Link>
    </div>
  );
}
