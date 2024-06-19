import { Button } from "@nextui-org/react";

export default function HeroDashbook3() {
  return (
    <div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3">
          <div className=" shadow-lg duration-150 transition relative w-80">
            <div className=" text-lg font-semibold text-[#6678BA] border-y flex items-center gap-4 p-3">
              <svg
                className="w-10 bg-[#6678BA] p-2 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
              Hide Menu
            </div>
            <div className="">
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
        <div className="">
          <div className="bg-[#6678BA] w-[900px] flex items-center justify-between px-5">
            {" "}
            <div className="flex items-center gap-6">
              <p className="p-2 text-white flex items-center gap-3">
                Lesson Two: East and West Germany{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-clapperboard w-5"
                >
                  <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
                  <path d="m6.2 5.3 3.1 3.9" />
                  <path d="m12.4 3.4 3.1 4" />
                  <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
                </svg>
              </p>{" "}
              <p className="text-xs text-white font-semibold">
                31 mins 05 secs
              </p>
            </div>
            <a href="#" className="text-white flex items-center">
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
          <div className="">
            <iframe
              className="w-[900px] h-[450px] mt-5 mr-96"
              src="https://www.youtube.com/embed/bUxd3jqCr94?si=gPHLc51ZBqi68Sz6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
