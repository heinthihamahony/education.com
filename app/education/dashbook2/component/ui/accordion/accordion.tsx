import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

import { ActiveCheck } from "../icons/active-check";
import { LockIcon } from "../icons/lock-icon";
import { Check } from "../icons/check";
import { BookIcon } from "../icons/book-icon";
import { MovieCardIcon } from "../icons/movie-card-icon";
import { SecondaryCheck } from "../icons/secondary-check";
import { ClickBookIcon } from "../icons/clickbook-icon";
import { PencilIcon } from "../icons/pencil-icon";
import { LightCheck } from "../icons/light-check";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {/* Module 1 */}

      <AccordionItem value="item-1">
        <AccordionTrigger className="bg-[#6678BA] text-white px-5 rounded-lg">
          <p className="flex items-center gap-2">
            <ActiveCheck />
            Module 1: Post-WWII
          </p>
          <p className="pl-[430px] text-sm">4 hrs 32 mins</p>
        </AccordionTrigger>
      </AccordionItem>

      {/* Module 2 */}

      <AccordionItem value="item-2">
        <AccordionTrigger className="bg-[#6678BA] text-white px-5 rounded-t-lg">
          <p className="flex items-center gap-2">
            <Check /> Module 2: Introduction to the Cold War
          </p>
          <p className="pl-72 text-sm">6 hrs 12 mins</p>
        </AccordionTrigger>
        <AccordionContent className="bg-[#f1f1f4] p-5 space-y-4 rounded-b-lg overflow-hidden">
          <div className="bg-white px-4 py-3 flex justify-between items-center rounded-xl">
            <p className=" flex items-center gap-2">
              {" "}
              <ActiveCheck />
              Lesson One: The Atomic Bomb
              <BookIcon />
            </p>
            <p className="pl-72 text-sm">1 hr 50 mins</p>
          </div>

          <div className="bg-white px-4 py-3 rounded-xl">
            <Link
              href="/education/dashbook3"
              className="flex items-center gap-2 justify-between"
            >
              <p className=" flex items-center gap-2">
                {" "}
                <ActiveCheck />
                Lesson Two: East and West Germany
                <MovieCardIcon />
              </p>
              <p className="text-sm">31 mins 05 secs</p>
            </Link>
          </div>
          <div className="bg-white px-4 py-3 flex justify-between items-center rounded-xl">
            <p className=" flex items-center gap-2">
              {" "}
              <SecondaryCheck />
              Lesson Three: The USSR
              <div className="flex items-center gap-1">
                <BookIcon />
                <ClickBookIcon />
              </div>
            </p>
            <p className="text-sm">3 hrs 13 mins</p>
          </div>
          <div className="bg-white px-4 py-3 flex justify-between items-center rounded-xl">
            <p className=" flex items-center gap-2">
              {" "}
              <SecondaryCheck />
              Lesson Three: Assignment
              <div className="flex items-center">
                <PencilIcon />
              </div>
            </p>
          </div>
          <div className="bg-white px-4 py-3 flex justify-between items-center rounded-xl">
            <p className=" flex items-center gap-2">
              {" "}
              <SecondaryCheck />
              Module 1 Quiz
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Module 3 */}

      <AccordionItem value="item-3">
        <AccordionTrigger className="bg-[#6678BA] text-white px-5 rounded-lg">
          <p className="flex items-center gap-2">
            <SecondaryCheck />
            Module 3: Stalinism
          </p>
          <p className="pl-[430px] text-sm">3 hrs 51 mins</p>
        </AccordionTrigger>
      </AccordionItem>

      {/* Module 4 */}

      <AccordionItem value="item-4">
        <AccordionTrigger className="bg-[#6678BA] text-white px-5 rounded-lg">
          <p className="flex items-center gap-2">
            <SecondaryCheck />
            Module 4: The Central Intelligence Agency
          </p>
          <p className="pl-[255px] text-sm">4 hrs 42 mins</p>
        </AccordionTrigger>
      </AccordionItem>

      {/* Midterm Exam 1 */}

      <AccordionItem value="item-5">
        <div className="bg-[#A5AAB7] text-white font-semibold px-5 rounded-lg flex items-center justify-between py-4">
          <p className="flex items-center gap-2">
            <LightCheck />
            Midterm Exam 1
          </p>
          <div className=" flex items-center gap-5">
            <p className=" text-sm">3 hrs 51 mins</p>
            <LockIcon />
          </div>
        </div>
      </AccordionItem>

      {/* Module 5 */}

      <AccordionItem value="item-6">
        <div className="bg-[#A5AAB7] text-white font-semibold px-5 rounded-lg flex items-center justify-between py-4">
          <p className="flex items-center gap-2">
            <LightCheck />
            Module 5: The Cuban Missile Crisis
          </p>
          <div className=" flex items-center gap-5">
            <p className=" text-sm">3 hrs 58 mins</p>
            <LockIcon />
          </div>
        </div>
      </AccordionItem>

      {/* Module 6 */}

      <AccordionItem value="item-7">
        <div className="bg-[#A5AAB7] text-white font-semibold px-5 rounded-lg flex items-center justify-between py-4">
          <p className="flex items-center gap-2">
            <LightCheck />
            Module 6: The Gorbachev Years
          </p>
          <div className=" flex items-center gap-5">
            <p className=" text-sm">5 hrs 7 mins</p>
            <LockIcon />
          </div>
        </div>
      </AccordionItem>

      {/* Module 7 */}

      <AccordionItem value="item-8">
        <div className="bg-[#A5AAB7] text-white font-semibold px-5 rounded-lg flex items-center justify-between py-4">
          <p className="flex items-center gap-2">
            <LightCheck />
            Module 7: Fall of the Soviet Union
          </p>
          <div className=" flex items-center gap-5">
            <p className=" text-sm">6 hrs 11 mins</p>
            <LockIcon />
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
