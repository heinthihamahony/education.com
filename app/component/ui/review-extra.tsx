export default function ReciewExtra() {
  return (
    <>
      <div className=" mt-40 text-center space-y-16">
        <h1 className=" md:text-5xl text-3xl font-bold">Reviews</h1>
        <p className=" md:text-2xl text-xl text-[#888] lg:mx-56">
          “Thank you for building such an empowering tool, especially for
          designers! The site went from Figma to Framer in less than a week!”
        </p>
        <div className=" flex items-center gap-2 justify-center">
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
      </div>
    </>
  );
}
