import HeroDashbook from "./component/ui/HeroDashbook";
import Navbar3 from "./component/ui/navbar-3";

export default function DashBook() {
  return (
    <>
      <div className="">
        <Navbar3 />
        <HeroDashbook />
      </div>
      <footer className="bg-[#6678BA] text-white">
        <div className="text-center py-28">
          <p className=" text-5xl font-bold">Footer</p>
        </div>
      </footer>
    </>
  );
}
