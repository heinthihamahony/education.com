import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="text-[#666] md:flex items-center justify-between border-y py-4 hidden">
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

export function SmNavbar() {
  return (
    <>
      <div className="md:hidden">
        <div className="flex items-center justify-between my-3 ">
          <img
            className="w-12 rounded-full"
            src="https://framerusercontent.com/images/fRmg5Kj8Upo2bfwa5JetYBGuQ.png"
            alt=""
          />
          <Button className="font-semibold shadow-lg shadow-[#a8a8a8]">
            Get Started
          </Button>
        </div>
        <div className=" flex gap-3 items-center font-semibold justify-between border-y border-y-[#e2e8f0]">
          <Link
            className="hover:bg-gray-200 p-3 active:underline underline-offset-4 decoration-2 decoration-[#939594] "
            href="#"
          >
            <svg
              className=" w-8 hover:bg-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14 4.4375C15.3462 4.4375 16.4375 3.34619 16.4375 2H17.5625C17.5625 3.34619 18.6538 4.4375 20 4.4375V5.5625C18.6538 5.5625 17.5625 6.65381 17.5625 8H16.4375C16.4375 6.65381 15.3462 5.5625 14 5.5625V4.4375ZM1 11C4.31371 11 7 8.31371 7 5H9C9 8.31371 11.6863 11 15 11V13C11.6863 13 9 15.6863 9 19H7C7 15.6863 4.31371 13 1 13V11ZM4.87601 12C6.18717 12.7276 7.27243 13.8128 8 15.124 8.72757 13.8128 9.81283 12.7276 11.124 12 9.81283 11.2724 8.72757 10.1872 8 8.87601 7.27243 10.1872 6.18717 11.2724 4.87601 12ZM17.25 14C17.25 15.7949 15.7949 17.25 14 17.25V18.75C15.7949 18.75 17.25 20.2051 17.25 22H18.75C18.75 20.2051 20.2051 18.75 22 18.75V17.25C20.2051 17.25 18.75 15.7949 18.75 14H17.25Z"></path>
            </svg>
          </Link>
          <Link
            className="hover:bg-gray-200 p-3 active:underline underline-offset-4 decoration-2 decoration-[#939594] "
            href="#"
          >
            <svg
              className=" w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM12.1779 7.17624C11.4834 7.48982 11 8.18846 11 9C11 10.1046 11.8954 11 13 11C13.8115 11 14.5102 10.5166 14.8238 9.82212C14.9383 10.1945 15 10.59 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C11.41 7 11.8055 7.06167 12.1779 7.17624Z"></path>
            </svg>
          </Link>
          <Link
            className="hover:bg-gray-200 p-3 active:underline underline-offset-4 decoration-2 decoration-[#939594] "
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-images w-8"
            >
              <path d="M18 22H4a2 2 0 0 1-2-2V6" />
              <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
              <circle cx="12" cy="8" r="2" />
              <rect width="16" height="16" x="6" y="2" rx="2" />
            </svg>
          </Link>
          <Link
            className="hover:bg-gray-200 p-3 active:underline underline-offset-4 decoration-2 decoration-[#939594] "
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-layout-template w-8"
            >
              <rect width="18" height="7" x="3" y="3" rx="1" />
              <rect width="9" height="7" x="3" y="14" rx="1" />
              <rect width="5" height="7" x="16" y="14" rx="1" />
            </svg>
          </Link>
          <Link
            className="hover:bg-gray-200 p-3 active:underline underline-offset-4 decoration-2 decoration-[#939594] "
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-refresh-ccw w-8"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 16h5v5" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
