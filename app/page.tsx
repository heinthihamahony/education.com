import Image from "next/image";
import Navbar from "./component/ui/navbar";
import Herosection from "./component/ui/herosection";
import Features from "./component/ui/features";
import Review from "./component/ui/review";
import FAQ from "./component/ui/faq";
import Signup from "./component/ui/signup-today";

export default function Home() {
  return (
    <>
      <div className="mx-6 mb-20">
        <Navbar />
        <Herosection />
        <Features />
        <Review />
        <FAQ />
        <Signup />
      </div>
    </>
  );
}
