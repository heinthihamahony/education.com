import { CourseCard } from "@/app/education/home/component/ui/Popular-Categories/course-card";

export function Card2() {
  const card = [
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
    <>
      <div className="grid grid-cols-3 text-black gap-5">
        {card.map((card) => (
          <CourseCard name={card.name} />
        ))}
      </div>
    </>
  );
}
