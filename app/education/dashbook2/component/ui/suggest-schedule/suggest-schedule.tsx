"use client";

import { CalculatorIcon } from "lucide-react";



export function SuggestSchedule() {
  return (
    <>
      <div className="p-5 bg-white space-y-2">
        <p className=" text-lg font-semibold">Suggest Schedule</p>
        <div className=" text-[#6678BA] text-sm flex items-center gap-3">
          <CalculatorIcon />
          <div className="">
            <p>Fri, Jun 14, 2024</p>
            <p className=" font-semibold">Course Begins</p>
          </div>
        </div>
        <a
          href="#"
          className=" flex items-center text-[#999] text-sm justify-end"
        >
          More Course Dates{" "}
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(153,153,153,1)"
          >
            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
          </svg>
        </a>
      </div>
    </>
  );
}
