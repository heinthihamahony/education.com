import { Button } from "@/components/ui/button";

export default function Signup() {
  return (
    <>
      <div className=" space-y-10">
        <h1 className=" text-5xl font-bold text-center mt-40">
          Sign Up today.
        </h1>
        <div className=" flex gap-5 justify-center items-center ">
          <Button variant="secondary" className="font-semibold">
            Learn More
          </Button>
          <Button className="font-semibold shadow-lg shadow-[#a8a8a8]">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
