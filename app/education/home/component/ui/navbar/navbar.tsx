import { Button } from "@nextui-org/react";

import Link from "next/link";
import { SelectDemo } from "../navbar-ui/select";
import { SearchDemo } from "../navbar-ui/search";
import BasketIcon from "../navbar-ui/basket";
import { ChangeLanguage } from "../navbar-ui/change-language";
import { PromotionalBanner } from "../navbar-ui/promotional-banner";
import { Logo } from "../navbar-ui/logo";
import { LogInButton } from "../navbar-ui/login-button";
import { SignupButton } from "../navbar-ui/signup-buttom";
import { Menu } from "../navbar-ui/nav-menu";
export default function Navbar2() {
  return (
    <>
      <PromotionalBanner />
      <div className=" flex items-center mx-20 gap-4 my-4">
        <Logo />
        <SelectDemo />
        <SearchDemo />
        <p className="text-sm w-[230px]">For teachers</p>
        <BasketIcon />
        <ChangeLanguage />
        <div className=" flex gap-1">
          <LogInButton />
          <SignupButton />
        </div>
      </div>
      <Menu />
    </>
  );
}
