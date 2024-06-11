import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="text-[#666] flex items-center justify-between border-y py-4">
        <div className="flex gap-3">
          <Link className="hover:text-[black]" href="#">
            Features
          </Link>
          <Link className="hover:text-[black]" href="#">
            Discover
          </Link>
          <Link className="hover:text-[black]" href="#">
            Gallery
          </Link>
          <Link className="hover:text-[black]" href="#">
            Templates
          </Link>
          <Link className="hover:text-[black]" href="#">
            Updates
          </Link>
        </div>
        <Button className="font-semibold shadow-lg shadow-[#a8a8a8]">
          Get Started
        </Button>
      </div>
    </>
  );
}
