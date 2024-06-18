import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function Scroll() {
  return (
    <ScrollArea className="h-[260px] w-[250px] mt-3 mb-[20px]">
      <div className="">
        <p className=" flex gap-3 items-center mt-3">
          <svg
            className=" w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path>
          </svg>
          <p className=" text-[#666]">Name of your education</p>
        </p>
        <p className=" flex gap-3 items-center mt-3">
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
          </svg>
          <p className=" text-[#666]">Single</p>
        </p>
        <p className=" flex gap-3 items-center mt-3">
          <svg
            className=" w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 17C5.20914 17 7 18.7909 7 21H3V17ZM3 10C9.07513 10 14 14.9249 14 21H12C12 16.0294 7.97056 12 3 12V10ZM3 3C12.9411 3 21 11.0589 21 21H19C19 12.1634 11.8366 5 3 5V3Z"></path>
          </svg>
          <p className=" text-[#666]">Followers 1738,737,647</p>
        </p>
        <p className=" flex gap-3 items-center mt-3">
          <svg
            className=" w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9 13V16H15V13H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V13H9ZM11 11H13V14H11V11ZM7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V11H15V9H9V11H2V6C2 5.44772 2.44772 5 3 5H7ZM9 3V5H15V3H9Z"></path>
          </svg>
          <p className=" text-[#666]">Name of your company</p>
        </p>
      </div>
    </ScrollArea>
  );
}
