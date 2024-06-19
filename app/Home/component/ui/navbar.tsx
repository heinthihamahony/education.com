import { Button } from "@nextui-org/react";
import BasketIcon from "./basket";
import { ChangeLanguage } from "./change-language";
import { SearchDemo } from "./search";
import { SelectDemo } from "./select";
import Link from "next/link";

export default function Navbar2() {
  return (
    <>
      <div className=" bg-[#9FB4FF] text-center font-semibold py-2">
        🎉 Promotional Banner 🎉
      </div>
      <div className=" flex items-center mx-20 gap-4 my-4">
        <div className=" flex items-center gap-2">
          <svg
            className="w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(159,180,255,1)"
          >
            <path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H14C14.5523 21 15 20.5523 15 20V10.6973L17.0215 20.2076C17.1363 20.7479 17.6673 21.0927 18.2075 20.9779L21.142 20.3541C21.6822 20.2393 22.027 19.7083 21.9122 19.1681L19.0015 5.47402C18.8866 4.9338 18.3556 4.58896 17.8154 4.70378L15 5.30221V5C15 4.44772 14.5523 4 14 4H9C9 3.44772 8.55228 3 8 3H4ZM9 6H13V14H9V6ZM13 16V19H9V16H13ZM7 17V19H5V17H7ZM18.7699 18.8137L18.3541 16.8577L19.3323 16.6498L19.748 18.6058L18.7699 18.8137Z"></path>
          </svg>
          <p className="text-xl font-semibold">StudyLynx</p>
        </div>
        <SelectDemo />
        <SearchDemo />

        <p className="text-sm w-[230px]">For teachers</p>

        <BasketIcon />
        <ChangeLanguage />
        <div className=" flex gap-1">
          <Button className=" bg-white border">Log In</Button>
          <Button className=" bg-[#6678BA] border text-white">Sign Up</Button>
        </div>
      </div>
      <div className="bg-[#6678BA] font-semibold text-lg text-white flex items-center gap-5 px-20 py-4">
        <Link href="/Home" className=" hover:underline">
          Home
        </Link>
        <Link href="/Dashbook" className=" hover:underline">
          DashBook1
        </Link>
        <Link href="/Dashbook2" className=" hover:underline">
          DashBook2
        </Link>
      </div>
    </>
  );
}
