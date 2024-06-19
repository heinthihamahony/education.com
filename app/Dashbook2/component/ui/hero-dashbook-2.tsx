import { Button } from "@nextui-org/react";
import { AccordionDemo } from "./accordion";

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
              <div className="">
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
              <div className="p-5 bg-white space-y-2">
                <p className=" text-lg font-semibold">Suggest Schedule</p>
                <div className=" text-[#6678BA] text-sm flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-calendar-days w-8"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 18h.01" />
                    <path d="M12 18h.01" />
                    <path d="M16 18h.01" />
                  </svg>
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
              <div className="p-5 bg-white space-y-2">
                <p className=" text-lg font-semibold">Course Menu</p>
                <Button className="bg-[#DCE4FF] w-full flex justify-start">
                  <p className="">My Courses</p>
                </Button>
                <Button className="bg-[#DCE4FF] w-full flex justify-start">
                  <p className="">Course Dates</p>
                </Button>
                <Button className="bg-[#DCE4FF] w-full flex justify-start">
                  <p className="">Discussion</p>
                </Button>
                <Button className="bg-[#DCE4FF] w-full flex justify-start">
                  <p className="">Instructor</p>
                </Button>
                <Button className="bg-[#DCE4FF] w-full flex justify-start">
                  <p className="">Course Info</p>
                </Button>
              </div>
              <div className="p-5 bg-white ">
                <p className=" text-lg font-semibold mb-3">Student Tools</p>

                <a href="#" className="">
                  <p className="text-sm text-[#6678BA] font-semibold flex items-center gap-2">
                    <svg
                      className="w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgba(102,120,186,1)"
                    >
                      <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z"></path>
                    </svg>
                    Bookmarks
                  </p>
                </a>
                <a href="#" className="">
                  <p className="text-sm text-[#6678BA] font-semibold flex items-center gap-2 my-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6678BA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-notebook-pen w-6"
                    >
                      <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
                      <path d="M2 6h4" />
                      <path d="M2 10h4" />
                      <path d="M2 14h4" />
                      <path d="M2 18h4" />
                      <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                    </svg>
                    Notes
                  </p>
                </a>
                <a href="#" className="">
                  <p className="text-sm text-[#6678BA] font-semibold flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6678BA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-layers-3 w-6"
                    >
                      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                      <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
                      <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
                    </svg>
                    Flashcards
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
