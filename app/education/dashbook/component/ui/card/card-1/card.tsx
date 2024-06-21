import { Studyblock2 } from "./study-block-2";


export function Card() {
  const studyblock = [
    {
      image:
        "https://lh3.google.com/u/0/d/1mlX-8uKNShdSLYRi4GZNk8PYqfLGYVRr=w2062-h1626-iv1",
      name: "This Is A Course",
      percent: "67%",
    },
  ];
  return (
    <>
      <div className=" ">
        {studyblock.map((studyblock) => (
          <Studyblock2
            image={studyblock.image}
            name={studyblock.name}
            percent={studyblock.percent}
          />
        ))}
      </div>
    </>
  );
}
