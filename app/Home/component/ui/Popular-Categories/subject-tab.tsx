"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function SubjectTab() {
  const variants = ["solid", "underlined", "bordered", "light"];

  return (
    <div className="flex flex-col">
      <h1 className=" mb-8 text-2xl font-semibold">Popular Categories</h1>
      <div className=" text-white">
        <div className="">
          <Tabs
            variant="light"
            className=" "
            aria-label="Options"
            classNames={{
              tabList: "",
              cursor: "rounded-full bg-[#9FB4FF] shadow-lg",
              tab: "max-w-fit px-5 py-2 mb-8",
              tabContent: "group-data-[selected=true]:text-[]",
            }}
          >
            <Tab
              key="Math"
              className=""
              title={
                <div className="flex items-center justify-start text-left">
                  <span className=" text-black">Math</span>
                </div>
              }
            >
              <div className="grid grid-cols-4 text-black gap-6">
                <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
                  <img
                    className=" w-full"
                    src="https://lh3.google.com/u/0/d/1xrfYqydRTmwIjjCL-C5Mw05xVokc6D80=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1xrfYqydRTmwIjjCL-C5Mw05xVokc6D80=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1xrfYqydRTmwIjjCL-C5Mw05xVokc6D80=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1xrfYqydRTmwIjjCL-C5Mw05xVokc6D80=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1xrfYqydRTmwIjjCL-C5Mw05xVokc6D80=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1xrfYqydRTmwIjjCL-C5Mw05xVokc6D80=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1xrfYqydRTmwIjjCL-C5Mw05xVokc6D80=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1xrfYqydRTmwIjjCL-C5Mw05xVokc6D80=w2378-h1626-iv1"
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
            </Tab>
            <Tab
              key="Information Technology"
              className=""
              title={
                <div className="flex items-center justify-start text-left">
                  <span className=" text-black">Information Technology</span>
                </div>
              }
            >
              <div className="grid grid-cols-4 text-black gap-6">
                <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
                  <img
                    className=" w-full"
                    src="https://lh3.google.com/u/0/d/1dV_K-Io6HyUSE_UHAlRjcpl0GjiZYLnH=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1dV_K-Io6HyUSE_UHAlRjcpl0GjiZYLnH=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1dV_K-Io6HyUSE_UHAlRjcpl0GjiZYLnH=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1dV_K-Io6HyUSE_UHAlRjcpl0GjiZYLnH=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1dV_K-Io6HyUSE_UHAlRjcpl0GjiZYLnH=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1dV_K-Io6HyUSE_UHAlRjcpl0GjiZYLnH=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1dV_K-Io6HyUSE_UHAlRjcpl0GjiZYLnH=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1dV_K-Io6HyUSE_UHAlRjcpl0GjiZYLnH=w2378-h1626-iv1"
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
            </Tab>
            <Tab
              key="Life Science"
              className=""
              title={
                <div className="flex items-center justify-start text-left">
                  <span className=" text-black">Life Science</span>
                </div>
              }
            >
              <div className="grid grid-cols-4 text-black gap-6">
                <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
                  <img
                    className=" w-full"
                    src="https://lh3.google.com/u/0/d/1LiR7i3Gwlw0Hz5q4RwvMTbY0VVHPBh_h=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LiR7i3Gwlw0Hz5q4RwvMTbY0VVHPBh_h=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LiR7i3Gwlw0Hz5q4RwvMTbY0VVHPBh_h=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LiR7i3Gwlw0Hz5q4RwvMTbY0VVHPBh_h=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LiR7i3Gwlw0Hz5q4RwvMTbY0VVHPBh_h=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LiR7i3Gwlw0Hz5q4RwvMTbY0VVHPBh_h=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LiR7i3Gwlw0Hz5q4RwvMTbY0VVHPBh_h=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LiR7i3Gwlw0Hz5q4RwvMTbY0VVHPBh_h=w2378-h1626-iv1"
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
            </Tab>
            <Tab
              key="Test Prep"
              className=""
              title={
                <div className="flex items-center justify-start text-left">
                  <span className=" text-black">Test Prep</span>
                </div>
              }
            >
              <div className="grid grid-cols-4 text-black gap-6">
                <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
                  <img
                    className=" w-full"
                    src="https://lh3.google.com/u/0/d/1WTb5jdj6AnP4MbgSr5YFM-WmY8CW2E--=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1WTb5jdj6AnP4MbgSr5YFM-WmY8CW2E--=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1WTb5jdj6AnP4MbgSr5YFM-WmY8CW2E--=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1WTb5jdj6AnP4MbgSr5YFM-WmY8CW2E--=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1WTb5jdj6AnP4MbgSr5YFM-WmY8CW2E--=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1WTb5jdj6AnP4MbgSr5YFM-WmY8CW2E--=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1WTb5jdj6AnP4MbgSr5YFM-WmY8CW2E--=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1WTb5jdj6AnP4MbgSr5YFM-WmY8CW2E--=w2378-h1626-iv1"
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
            </Tab>
            <Tab
              key="Marketing"
              className=""
              title={
                <div className="flex items-center justify-start text-left">
                  <span className=" text-black">Marketing</span>
                </div>
              }
            >
              <div className="grid grid-cols-4 text-black gap-6">
                <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
                  <img
                    className=" w-full"
                    src="https://lh3.google.com/u/0/d/1fajPjOmwooqeAeEU7IZXYu7rXKecEHi1=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1fajPjOmwooqeAeEU7IZXYu7rXKecEHi1=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1fajPjOmwooqeAeEU7IZXYu7rXKecEHi1=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1fajPjOmwooqeAeEU7IZXYu7rXKecEHi1=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1fajPjOmwooqeAeEU7IZXYu7rXKecEHi1=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1fajPjOmwooqeAeEU7IZXYu7rXKecEHi1=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1fajPjOmwooqeAeEU7IZXYu7rXKecEHi1=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1fajPjOmwooqeAeEU7IZXYu7rXKecEHi1=w2378-h1626-iv1"
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
            </Tab>
            <Tab
              key="Lifestyle"
              className=""
              title={
                <div className="flex items-center justify-start text-left">
                  <span className=" text-black">Lifestyle</span>
                </div>
              }
            >
              <div className="grid grid-cols-4 text-black gap-6">
                <div className=" rounded-2xl border overflow-hidden shadow-lg shadow-[#999]">
                  <img
                    className=" w-full"
                    src="https://lh3.google.com/u/0/d/1LSHUSX0K4keLLiIkIkZ8Ld2E8IImg-AF=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LSHUSX0K4keLLiIkIkZ8Ld2E8IImg-AF=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LSHUSX0K4keLLiIkIkZ8Ld2E8IImg-AF=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LSHUSX0K4keLLiIkIkZ8Ld2E8IImg-AF=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LSHUSX0K4keLLiIkIkZ8Ld2E8IImg-AF=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LSHUSX0K4keLLiIkIkZ8Ld2E8IImg-AF=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LSHUSX0K4keLLiIkIkZ8Ld2E8IImg-AF=w2378-h1626-iv1"
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
                    src="https://lh3.google.com/u/0/d/1LSHUSX0K4keLLiIkIkZ8Ld2E8IImg-AF=w2378-h1626-iv1"
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
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
