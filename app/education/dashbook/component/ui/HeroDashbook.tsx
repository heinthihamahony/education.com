import { Avatar, Progress } from "@nextui-org/react";

import { StudyBlock } from "./study-block/study-block";

import { Card2 } from "./card/card-2/card2";
import { Card } from "./card/card-1/card";
import { Card3 } from "./card/card-3/card-3";

export default function HeroDashbook() {
  return (
    <>
      <div className="bg-[#E3E4F0] px-20 pt-10 py-20">
        <h3 className=" mb-5 text-2xl font-semibold">My Dashboard</h3>
        <div className="bg-white px-10 py-6">
          <div className=" flex items-center gap-3 mb-5">
            <p className=" text-xl font-semibold">Study Blocks</p>
            <p className=" text-sm font-semibold text-[#A5AAB7]">Edit</p>
          </div>
          <StudyBlock />
        </div>
        <div className=" grid grid-cols-12 mt-10">
          <div className=" col-span-8 mr-10">
            <div className="space-y-6 ">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="bg-white p-10 space-y-5 mt-10">
              <div className="flex items-center justify-between ">
                <h2 className=" text-xl font-semibold">Explore More Courses</h2>
                <p className="text-sm text-[#999] flex items-center">
                  Explore All Courses{" "}
                  <svg
                    className="w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(153,153,153,1)"
                  >
                    <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                  </svg>
                </p>
              </div>
              <Card2 />
            </div>
          </div>
          <div className=" col-span-4">
            <div className="bg-white p-5 space-y-5">
              <div className="flex items-center justify-between ">
                <h2 className=" text-xl font-semibold">Notifications</h2>
                <p className="text-sm text-[#999] flex items-center">
                  Older Posts{" "}
                  <svg
                    className="w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(153,153,153,1)"
                  >
                    <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                  </svg>
                </p>
              </div>
              <Card3 />
              <Card3 />
              <Card3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
