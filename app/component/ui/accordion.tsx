import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="mx-40 bg-[#f2f2f2] px-6 py-2 rounded-2xl"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg hover:no-underline">
          What is Framer?
        </AccordionTrigger>
        <AccordionContent className="text-lg text-[#888] text-start">
          Framer is a the web builder for creative pros. Be sure to check out
          framer.com learn more.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg hover:no-underline">
          Is it easy to learn?
        </AccordionTrigger>
        <AccordionContent className="text-lg text-[#888] text-start">
          Framer is the fastest tool to build sites with, beacuse you can ship
          your design immediately, instead of having to rebuild your design in
          code or a second tool.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg hover:no-underline">
          Do I need to code?
        </AccordionTrigger>
        <AccordionContent className="text-lg text-[#888] text-start">
          Framer is an end to end tool that lets everyone design and ship
          websites. Ypu don't need to frondend team or web programming course.
          Just basic canvas skills.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
