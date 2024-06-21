

import { MovieCardIcon } from "@/app/education/dashbook2/component/ui/icons/movie-card-icon";
import { CourseVideo } from "./course video/course-video";
import { MenuIcon } from "./icons/menu-icon";
import { CourseMenu } from "@/app/education/dashbook2/component/ui/course menu/course-menu";
import { StudentTools } from "@/app/education/dashbook2/component/ui/student tools/student-tools";

export default function HeroDashbook3() {
  return (
    <div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3">
          <div className=" shadow-lg duration-150 transition relative w-80">
            <div className=" text-lg font-semibold text-[#6678BA] border-y flex items-center gap-4 p-3">
              <MenuIcon />
              Hide Menu
            </div>
            <div className="">
              <CourseMenu />
              <StudentTools />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="bg-[#6678BA] w-[900px] flex items-center justify-between px-5">
            {" "}
            <div className="flex items-center gap-6">
              <p className="p-2 text-white flex items-center gap-3">
                Lesson Two: East and West Germany <MovieCardIcon />
              </p>{" "}
              <p className="text-xs text-white font-semibold">
                31 mins 05 secs
              </p>
            </div>
            <a href="#" className="text-white flex items-center ">
              Next{" "}
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
              </svg>
            </a>
          </div>
          <CourseVideo />
        </div>
      </div>
    </div>
  );
}
