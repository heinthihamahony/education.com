import CallToAction from "./component/ui/buttonsection/Call-to-Action";
import SubjectTab from "./component/ui/Popular-Categories/subject-tab";
import Background from "./component/ui/herosection/background";
import Navbar2 from "./component/ui/navbar/navbar";
import { Footer } from "./component/ui/footer/footer";

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
      <Footer />
    </>
  );
}
