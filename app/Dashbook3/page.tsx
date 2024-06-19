import HeroDashbook from "../Dashbook/component/ui/HeroDashbook";
import Navbar3 from "../Dashbook/component/ui/navbar-3";
import HeroDashbook3 from "./component/ui/herodashbook";

export default function DashBook3() {
  return (
    <>
      <div className="">
        <Navbar3 />
        <HeroDashbook3 />
        <footer className="bg-[#6678BA] text-white ">
          <div className="text-center py-28">
            <p className=" text-5xl font-bold">Footer</p>
          </div>
        </footer>
      </div>
    </>
  );
}
