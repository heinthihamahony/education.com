import { Avatar, Progress } from "@nextui-org/react";
import { ProgressDemo } from "./progress-67%";

export default function HeroDashbook() {
  return (
    <>
      <div className="bg-[#E3E4F0] px-20 pt-10 py-20">
        <h3 className=" mb-5 text-2xl font-semibold">My Dashboard</h3>
        <div className="bg-white">
          <div className="mx-10 py-6">
            <div className=" flex items-center gap-3 mb-5">
              <p className=" text-xl font-semibold">Study Blocks</p>
              <p className=" text-sm font-semibold text-[#A5AAB7]">Edit</p>
            </div>
            <div className="grid grid-cols-4 gap-10">
              <div className=" flex items-center gap-3 w-full border rounded-full p-3 shadow-lg shadow-lg-[#999]">
                <img
                  className="w-12 rounded-full"
                  src="https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2378-h1626-iv1"
                  alt=""
                />
                <div className=" space-y-3 w-full pr-5">
                  <div className=" flex justify-between">
                    <p className=" text-xs font-semibold">TODAY</p>
                    <p className=" text-xs font-semibold text-[#A5AAB7]">
                      Jun 13
                    </p>
                  </div>
                  <p className="text-[#313030] text-xs">1:00 pm - 4:30 pm</p>
                </div>
              </div>
              <div className=" flex items-center gap-3 border rounded-full p-3 shadow-lg shadow-lg-[#999]">
                <img
                  className="w-12 rounded-full"
                  src="https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2378-h1626-iv1"
                  alt=""
                />
                <div className=" space-y-3 w-full pr-5">
                  <div className=" flex justify-between">
                    <p className=" text-xs font-semibold">TOMORROW</p>
                    <p className=" text-xs font-semibold text-[#A5AAB7]">
                      Jun 14
                    </p>
                  </div>
                  <p className="text-[#313030] text-xs">1:00 pm - 4:30 pm</p>
                </div>
              </div>
              <div className=" flex items-center gap-3 border rounded-full p-3 shadow-lg shadow-lg-[#999]">
                <img
                  className="w-12 rounded-full"
                  src="https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2378-h1626-iv1"
                  alt=""
                />
                <div className=" space-y-3 w-full pr-5">
                  <div className=" flex justify-between">
                    <p className=" text-xs font-semibold">MONDAY</p>
                    <p className=" text-xs font-semibold text-[#A5AAB7]">
                      Jun 17
                    </p>
                  </div>
                  <p className="text-[#313030] text-xs">6:10 pm - 7:30 pm</p>
                </div>
              </div>
              <div className=" flex items-center gap-3 border rounded-full p-3 shadow-lg shadow-lg-[#999]">
                <img
                  className="w-12 rounded-full"
                  src="https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2378-h1626-iv1"
                  alt=""
                />
                <div className=" space-y-3 w-full pr-5">
                  <div className=" flex justify-between">
                    <p className=" text-xs font-semibold">THURSDAY</p>
                    <p className=" text-xs font-semibold text-[#A5AAB7]">
                      Jun 20
                    </p>
                  </div>
                  <p className="text-[#313030] text-xs">6:10 pm - 7:30 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-12 mt-10">
          <div className=" col-span-8 mr-10">
            <div className="space-y-6 ">
              <div className=" flex bg-white items-center rounded-2xl gap-5 shadow-lg shadow-lg-[#999]">
                <img
                  className="w-52 rounded-l-2xl overflow-hidden"
                  src="https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1"
                  alt=""
                />
                <div className=" space-y-3">
                  <div className="">
                    <p className=" text-lg font-semibold">This is A Course</p>
                    <p className="text-[#999] text-sm">Instructor Name</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <p className=" w-52 text-sm text-[#999]">My progress</p>
                    <ProgressDemo />
                    <p className="text-sm text-[#999] mr-10">67%</p>
                  </div>
                </div>
              </div>
              <div className=" flex bg-white items-center rounded-2xl gap-5 shadow-lg shadow-lg-[#999]">
                <img
                  className="w-52 rounded-l-2xl overflow-hidden"
                  src="https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1"
                  alt=""
                />
                <div className="space-y-3">
                  <div className="">
                    <p className=" text-lg font-semibold">This is A Course</p>
                    <p className="text-[#999] text-sm">Instructor Name</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <p className=" w-52 text-sm text-[#999]">My progress</p>
                    <ProgressDemo />
                    <p className="text-sm text-[#999] mr-10">67%</p>
                  </div>
                </div>
              </div>
              <div className=" flex bg-white items-center rounded-2xl gap-5 shadow-lg shadow-lg-[#999]">
                <img
                  className="w-52 rounded-l-2xl overflow-hidden"
                  src="https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1"
                  alt=""
                />
                <div className="space-y-3">
                  <div className="">
                    <p className=" text-lg font-semibold">This is A Course</p>
                    <p className="text-[#999] text-sm">Instructor Name</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <p className=" w-52 text-sm text-[#999]">My progress</p>
                    <ProgressDemo />
                    <p className="text-sm text-[#999] mr-10">67%</p>
                  </div>
                </div>
              </div>
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
              <div className="grid grid-cols-3 gap-5">
                <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
                  <img
                    className=" w-full"
                    src="https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1"
                    alt=""
                  />
                  <div className="p-3 space-y-2">
                    <div className="">
                      <p>This Here Is A Really Really Long Course Title </p>
                      <p className=" text-[#888] text-sm">Instructor Name</p>
                    </div>
                    <div className=" flex items-center gap-2 ">
                      <p className=" font-semibold text-sm ">4.5</p>

                      <div className="flex items-center">
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792V14.6564ZM11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-end">$0.0</p>
                  </div>
                </div>
                <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
                  <img
                    className=" w-full"
                    src="https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1"
                    alt=""
                  />
                  <div className="p-3 space-y-2">
                    <div className="">
                      <p>This Here Is A Really Really Long Course Title </p>
                      <p className=" text-[#888] text-sm">Instructor Name</p>
                    </div>
                    <div className=" flex items-center gap-2 ">
                      <p className=" font-semibold text-sm ">4.5</p>

                      <div className="flex items-center">
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792V14.6564ZM11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-end">$0.0</p>
                  </div>
                </div>
                <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
                  <img
                    className=" w-full"
                    src="https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1"
                    alt=""
                  />
                  <div className="p-3 space-y-2">
                    <div className="">
                      <p>This Here Is A Really Really Long Course Title </p>
                      <p className=" text-[#888] text-sm">Instructor Name</p>
                    </div>
                    <div className=" flex items-center gap-2 ">
                      <p className=" font-semibold text-sm ">4.5</p>

                      <div className="flex items-center">
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792V14.6564ZM11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-end">$0.0</p>
                  </div>
                </div>
                <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
                  <img
                    className=" w-full"
                    src="https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1"
                    alt=""
                  />
                  <div className="p-3 space-y-2">
                    <div className="">
                      <p>This Here Is A Really Really Long Course Title </p>
                      <p className=" text-[#888] text-sm">Instructor Name</p>
                    </div>
                    <div className=" flex items-center gap-2 ">
                      <p className=" font-semibold text-sm ">4.5</p>

                      <div className="flex items-center">
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792V14.6564ZM11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-end">$0.0</p>
                  </div>
                </div>
                <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
                  <img
                    className=" w-full"
                    src="https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1"
                    alt=""
                  />
                  <div className="p-3 space-y-2">
                    <div className="">
                      <p>This Here Is A Really Really Long Course Title </p>
                      <p className=" text-[#888] text-sm">Instructor Name</p>
                    </div>
                    <div className=" flex items-center gap-2 ">
                      <p className=" font-semibold text-sm ">4.5</p>

                      <div className="flex items-center">
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792V14.6564ZM11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-end">$0.0</p>
                  </div>
                </div>
                <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
                  <img
                    className=" w-full"
                    src="https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1"
                    alt=""
                  />
                  <div className="p-3 space-y-2">
                    <div className="">
                      <p>This Here Is A Really Really Long Course Title </p>
                      <p className=" text-[#888] text-sm">Instructor Name</p>
                    </div>
                    <div className=" flex items-center gap-2 ">
                      <p className=" font-semibold text-sm ">4.5</p>

                      <div className="flex items-center">
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                        <svg
                          className=" w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgba(255,185,1,1)"
                        >
                          <path d="M11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792V14.6564ZM11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-end">$0.0</p>
                  </div>
                </div>
              </div>
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
              <div className=" border rounded-xl mx-3 shadow-lg">
                <div className=" flex gap-3 p-3 items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2378-h1626-iv1"
                    alt=""
                  />
                  <div className="">
                    <p className=" text-sm font-light">
                      This is A Really Really Really Long Title For...
                    </p>
                    <p className="text-[#999] text-sm">Instructor Name</p>
                  </div>
                </div>
                <div className="bg-[#f1f1f4] p-5 space-y-3 rounded-b-xl">
                  <p className="text-sm font-semibold">
                    Assignment Deadline Change
                  </p>
                  <p className=" text-xs font-light">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusantium debitis pariatur deserunt officia.
                  </p>
                </div>
              </div>
              <div className=" border rounded-xl mx-3 shadow-lg">
                <div className=" flex gap-3 p-3 items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2378-h1626-iv1"
                    alt=""
                  />
                  <div className="">
                    <p className=" text-sm font-light">Course One</p>
                    <p className="text-[#999] text-sm">Instructor Name</p>
                  </div>
                </div>
                <div className="bg-[#f1f1f4] p-5 space-y-3 rounded-b-xl">
                  <p className="text-sm font-semibold">Midterm Grades Posted</p>
                  <p className=" text-xs font-light">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusantium debitis pariatur deserunt officia.
                  </p>
                </div>
              </div>
              <div className=" border rounded-xl mx-3 shadow-lg">
                <div className=" flex gap-3 p-3 items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2378-h1626-iv1"
                    alt=""
                  />
                  <div className="">
                    <p className=" text-sm font-light">Course Three</p>
                    <p className="text-[#999] text-sm">Instructor Name</p>
                  </div>
                </div>
                <div className="bg-[#f1f1f4] p-5 space-y-3 rounded-b-xl">
                  <p className="text-sm font-semibold">Quiz Cancellation</p>
                  <p className=" text-xs font-light">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusantium debitis pariatur deserunt officia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
