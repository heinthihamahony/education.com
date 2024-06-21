import { report } from "process";
import { ProgressDemo } from "./progressicon/progress-67%";


export function Studyblock2({
  name,
  image,
  percent,
}: {
  name?: string;
  image?: string;
  percent?: string;
}) {
  return (
    <>
      <div className=" flex bg-white items-center rounded-2xl gap-5 shadow-lg shadow-lg-[#999]">
        <img
          className="w-52 rounded-l-2xl overflow-hidden"
          src={image}
          alt=""
        />
        <div className=" space-y-3">
          <div className="">
            <p className=" text-lg font-semibold">{name}</p>
            <p className="text-[#999] text-sm">Instructor Name</p>
          </div>
          <div className=" flex items-center gap-3">
            <p className=" w-52 text-sm text-[#999]">My progress</p>
            <ProgressDemo />
            <p className="text-sm text-[#999] mr-10">{percent}</p>
          </div>
        </div>
      </div>
    </>
  );
}
