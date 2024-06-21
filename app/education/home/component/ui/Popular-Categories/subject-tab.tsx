"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { CourseCard } from "./course-card";

export default function SubjectTab() {
  const variants = ["solid", "underlined", "bordered", "light"];

  const maths = [
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
  ];

  const informationTechnologySubject = [
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
  ];

  const lifescience = [
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
  ];

  const testprep = [
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
  ];

  const marketing = [
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
  ];

  const lifestyle = [
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
    {
      name: "This Here Is A Really Really Long Course Title",
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2378-h1626-iv1",
    },
  ];

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
                {maths.map((math) => (
                  <CourseCard name={math.name} />
                ))}
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
                {informationTechnologySubject.map(
                  (informationTechnologySubject) => (
                    <CourseCard name={informationTechnologySubject.name} />
                  )
                )}
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
                {lifescience.map((lifescience) => (
                  <CourseCard name={lifescience.name} />
                ))}
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
                {testprep.map((testprep) => (
                  <CourseCard name={testprep.name} />
                ))}
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
                {marketing.map((marketing) => (
                  <CourseCard name={marketing.name} />
                ))}
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
                {lifestyle.map((lifestyle) => (
                  <CourseCard name={lifestyle.name} />
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
