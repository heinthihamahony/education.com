import { Button } from "@nextui-org/react";

export function CourseMenu() {
  return (
    <>
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
    </>
  );
}
