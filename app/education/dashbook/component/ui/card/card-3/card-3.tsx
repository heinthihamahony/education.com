import { StudyBlock3 } from "./study-block-3";

export function Card3() {
  const studyblock3 = [
    {
      image:
        "https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2062-h1626-iv1",
      name: "Course One",
      title: "Midterm Grades Posted",
      paragraph:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium debitis pariatur deserunt officia.",
    },
  ];
  return (
    <>
      <div className=" ">
        {studyblock3.map((studyblock3) => (
          <StudyBlock3
            image={studyblock3.image}
            name={studyblock3.name}
            title={studyblock3.title}
            paragraph={studyblock3.paragraph}
          />
        ))}
      </div>
    </>
  );
}
