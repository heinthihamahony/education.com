import { Button } from "@/components/ui/button";

export default function Herosection() {
  return (
    <>
      <div className="text-center mt-20 space-y-7">
        <p className=" font-semibold text-[#888] border md:w-fit mx-auto md:px-4 py-1 rounded-full text-xs md:text-base">
          🚀 Study for your lift - Make the best future and life
        </p>
        <h1 className=" md:text-5xl text-3xl font-bold">Study, Practice, Ship</h1>
        <h3 className=" md:text-2xl text-xl text-[#888]">
          Go from design to site with Framer,
          <br /> the web builder for creative pros.
        </h3>
        <Button className="font-semibold shadow-lg shadow-[#a8a8a8]">
          Get Started
        </Button>
        <img
          className=" w-40 mx-auto"
          src="https://framerusercontent.com/images/fRmg5Kj8Upo2bfwa5JetYBGuQ.png"
          alt=""
        />
      </div>
    </>
  );
}
