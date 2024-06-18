import { Button } from "@nextui-org/react";
import BasketIcon from "./component/ui/basket";
import { ChangeLanguage } from "./component/ui/change-language";

import { SearchDemo } from "./component/ui/search";
import { SelectDemo } from "./component/ui/select";
import Navbar from "../component/ui/navbar";
import Navbar2 from "./component/ui/navbar";
import Background from "./component/ui/background";
import SubjectTab from "./component/ui/Popular-Categories/subject-tab";
import CallToAction from "./component/ui/Call-to-Action";

export default function Home() {
  return (
    <>
      <Navbar2 />
      <div className=" mt-16">
        <Background />
        <div className="mx-28 mt-20">
          <SubjectTab />
        </div>
        <CallToAction />
      </div>
      <footer className="bg-[#6678BA] text-white">
        <div className="text-center py-28">
          <p className=" text-5xl font-bold">Footer</p>
        </div>
      </footer>
    </>
  );
}
