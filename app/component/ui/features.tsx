import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <>
      <div className=" lg:mx-44 mt-40 ">
        <p className=" text-5xl font-bold text-center mb-16">Features</p>
        <div className=" grid grid-cols-12 gap-5">
          <div className=" col-span-7 space-y-5 border shadow-lg p-5 rounded-3xl">
            <img
              src="https://framerusercontent.com/images/1W573oqBQLUf1YUC3PR1ZOtImcA.png"
              alt=""
            />
            <h2 className=" text-2xl font-bold">Plugins</h2>
            <p className=" text-xl text-[#888]">
              An in-depth guide to understanding the core principles,
              structures, and benefits of well-organized design systems in
              digital products.
            </p>
            <Button className="font-semibold shadow-lg shadow-[#a8a8a8]">
              Get Started
            </Button>
          </div>
          <div className=" col-span-5 space-y-5 border shadow-lg p-5 rounded-3xl">
            <img
              src="https://framerusercontent.com/images/hFfrtYyQL9QCgwW5nvb9WIskCs.png"
              alt=""
            />
            <h2 className=" text-2xl font-bold">Powerful Effects</h2>
            <p className=" text-xl text-[#888]">
              Add effects with a few clicks and capture your audience’s
              attention when they land on your website.
            </p>
          </div>
          <div className=" col-span-7 space-y-5 border shadow-lg p-5 rounded-3xl">
            <img
              src="https://framerusercontent.com/images/ysuObP8J8HwU48fNNGAdk65z0R4.png"
              alt=""
            />
            <h2 className=" text-2xl font-bold">Design & Layout</h2>
            <p className=" text-xl text-[#888]">
              Design your site on a familiar free-form canvas. Visually set up
              your breakpoints to make it responsive.
            </p>
          </div>
          <div className=" col-span-5 space-y-5 border shadow-lg p-5 rounded-3xl">
            <img
              className=" h-[140px]"
              src="https://framerusercontent.com/images/kpEz3HKDh8ZAhx99BLzOFRohTcc.png"
              alt=""
            />
            <h2 className=" text-2xl font-bold">Navigation</h2>
            <p className=" text-xl text-[#888]">
              Visually structure your pages and link to them easily.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
