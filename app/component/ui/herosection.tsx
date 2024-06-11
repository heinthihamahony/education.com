import { Button } from "@/components/ui/button";

export default function Herosection() {
  return (
    <>
      <div className="text-center mt-20 space-y-7">
        <p className=" font-semibold text-[#888] border w-fit mx-auto px-4 py-1 rounded-full ">
          🚀 Study for your lift - Make the best future and life
        </p>
        <h1 className=" text-5xl font-bold">Study, Practice, Ship</h1>
        <h3 className=" text-2xl text-[#888]">
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
