import HeroDashbook from "../Dashbook/component/ui/HeroDashbook";
import Navbar3 from "../Dashbook/component/ui/navbar-3";
import HeroDashbook2 from "./component/ui/hero-dashbook-2";

export default function DashBook2() {
  return (
    <>
      <div className="">
        <Navbar3 />
        <HeroDashbook2 />
        <footer className="bg-[#6678BA] text-white ">
          <div className="text-center py-28">
            <p className=" text-5xl font-bold">Footer</p>
          </div>
        </footer>
      </div>
    </>
  );
}
