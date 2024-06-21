import { AccordionDemo } from "../accordion/accordion";
import { CourseMenu } from "../course menu/course-menu";
import { StudentTools } from "../student tools/student-tools";
import { SuggestSchedule } from "../suggest-schedule/suggest-schedule";

export default function HeroDashbook2() {
  return (
    <>
      <img
        className="w-full h-20"
        src="https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1"
        alt=""
      />

      {/* Hero Cards */}
      <div className="bg-[#E3E4F0] px-20 ">
        <div className="py-10 ">
          <h3 className=" mb-5 text-xl font-semibold ">
            My Dashboard / This Is A Really Really Really Long Title To Use As
            An Example{" "}
          </h3>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8 bg-white px-6 py-5 space-y-3 ">
              <div className="space-y-2">
                <div className="">
                  <p className=" text-lg font-semibold">
                    This Is A Really Really Really Long Title To Use As An
                    Example
                  </p>
                  <p className="text-[#999] text-sm">Instructor Name</p>
                </div>
                <div className="">
                  <p className="text-sm">
                    <span className=" text-[#6678BA] font-semibold">
                      Course Description
                    </span>{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor...
                  </p>
                </div>
                <a
                  className="flex items-center gap-1 text-[#6678BA] text-sm font-semibold"
                  href="#"
                >
                  Show More{" "}
                  <svg
                    className="w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(102,120,186,1)"
                  >
                    <path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.96788 9.11619L3.0321 10.8838L12 15.6315Z"></path>
                  </svg>
                </a>
              </div>
              <div className="">
                <AccordionDemo />
              </div>
            </div>
            <div className="col-span-4 space-y-8">
              <SuggestSchedule />
              <CourseMenu />
              <StudentTools />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
