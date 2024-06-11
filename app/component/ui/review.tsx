import ReciewExtra from "./review-extra";

export default function Review() {
  return (
    <>
      <div className=" grid grid-cols-3 gap-5 mt-40 mx-44">
        <div className=" shadow-lg border rounded-2xl p-6 space-y-6">
          <div className=" flex items-center gap-2">
            <img
              className=" rounded-full w-14 border-2"
              src="https://framerusercontent.com/images/fRmg5Kj8Upo2bfwa5JetYBGuQ.png"
              alt=""
            />
            <div className="">
              <p className=" text-2xl font-semibold">Eva Elle</p>
              <p className=" text-[#676666]">@evaelle</p>
            </div>
          </div>
          <div className="">
            <p className="text-[#676666]">
              Thank you for building such an empowering tool, especially for
              designers! The site went from Figma to Framer in less than a week!
            </p>
          </div>
        </div>
        <div className=" shadow-lg border rounded-2xl p-6 space-y-6">
          <div className=" flex items-center gap-2">
            <img
              className=" rounded-full w-14 border-2"
              src="https://framerusercontent.com/images/fRmg5Kj8Upo2bfwa5JetYBGuQ.png"
              alt=""
            />
            <div className="">
              <p className=" text-2xl font-semibold">Guy Mccoy</p>
              <p className=" text-[#676666]">@mccoy</p>
            </div>
          </div>
          <div className="">
            <p className="text-[#676666]">
              Thank you for building such an empowering tool, especially for
              designers! The site went from Figma to Framer in less than a week!
            </p>
          </div>
        </div>
        <div className=" shadow-lg border rounded-2xl p-6 space-y-6">
          <div className=" flex items-center gap-2">
            <img
              className=" rounded-full w-14 border-2"
              src="https://framerusercontent.com/images/fRmg5Kj8Upo2bfwa5JetYBGuQ.png"
              alt=""
            />
            <div className="">
              <p className=" text-2xl font-semibold">Kayla Ray</p>
              <p className=" text-[#676666]">@kayray</p>
            </div>
          </div>
          <div className="">
            <p className="text-[#676666]">
              Thank you for building such an empowering tool, especially for
              designers! The site went from Figma to Framer in less than a week!
            </p>
          </div>
        </div>
      </div>
      <ReciewExtra />
    </>
  );
}
