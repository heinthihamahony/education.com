import { RateIcon } from "./icon/rate-icon";
import { RateIcon2 } from "./icon/rate-icon2";

export function CourseCard({ name, image }: { name?: string; image?: string }) {
  return (
    <>
      <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
        <img className=" w-full" src={image} alt="" />
        <div className="p-3 space-y-2">
          <div className="">
            <p className=" font-bold">{name}</p>
            <p className=" text-[#888] text-sm">Instructor Name</p>
          </div>
          <div className=" flex items-center gap-2 ">
            <p className=" font-semibold text-sm ">4.5</p>

            <div className="flex items-center">
              <RateIcon />
              <RateIcon />
              <RateIcon />
              <RateIcon />
              <RateIcon2 />
            </div>
          </div>
          <p className="text-end">$0.0</p>
        </div>
      </div>
    </>
  );
}
