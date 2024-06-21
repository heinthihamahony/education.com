"user client";
import { Footer } from "../home/component/ui/footer/footer";
import HeroDashbook from "./component/ui/HeroDashbook";
import Navbar3 from "./component/ui/navbar-2/navbar-3";

export default function DashBook() {
  return (
    <>
      <div className="">
        <Navbar3 />
        <HeroDashbook />
      </div>
      <Footer />
    </>
  );
}
