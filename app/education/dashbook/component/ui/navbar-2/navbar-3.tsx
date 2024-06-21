import { Button } from "@nextui-org/react";

import { Link } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import BasketIcon from "@/app/education/home/component/ui/navbar-ui/basket";
import { ChangeLanguage } from "@/app/education/home/component/ui/navbar-ui/change-language";
import { SelectDemo } from "@/app/education/home/component/ui/navbar-ui/select";
import { SearchDemo } from "@/app/education/home/component/ui/navbar-ui/search";
import { Logo } from "@/app/education/home/component/ui/navbar-ui/logo";
import { BellIcon } from "./icon/bell-icon";
import { SettingIcon } from "./icon/setting-icon";
import { Avator } from "./icon/avator";
import { Menu } from "@/app/education/home/component/ui/navbar-ui/nav-menu";

export default function Navbar3() {
  return (
    <>
      {/* <div className=" bg-[#9FB4FF] text-center font-semibold py-2">
        🎉 Promotional Banner 🎉
      </div> */}
      <div className=" flex items-center mx-20 gap-4 my-4">
        <Logo />
        <SelectDemo />
        <SearchDemo />

        <p className="text-sm w-[230px]">For teachers</p>

        <BasketIcon />
        <ChangeLanguage />
        <div className=" flex items-center gap-3 border-l border-l-gray-300 pl-3">
          <BellIcon />
          <SettingIcon />
          <Avator />
        </div>
      </div>
      <Menu />
    </>
  );
}
