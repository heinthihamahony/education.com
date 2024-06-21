import { StudyCard } from "./study-card";

export function StudyBlock() {
  const studyblock1 = [
    {
      image:
        "https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2378-h1626-iv1",
      name: "TODAY",
      date: "JUN 14",
      time: "10 am - 11:30 am",
    },
  ];
  const studyblock2 = [
    {
      image:
        "https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2378-h1626-iv1",
      name: "TOMORROW",
      date: "JUN 15",
      time: "10 am - 11:30 am",
    },
  ];
  const studyblock3 = [
    {
      image:
        "https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2378-h1626-iv1",
      name: "MONDAY",
      date: "JUN 16",
      time: "10 am - 11:30 am",
    },
  ];
  const studyblock4 = [
    {
      image:
        "https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2378-h1626-iv1",
      name: "THURSDAY",
      date: "JUN 17",
      time: "10 am - 11:30 am",
    },
  ];
  return (
    <>
      <div className="">
        <div className="grid grid-cols-4 gap-10">
          <div className=" ">
            {studyblock1.map((studyblock1) => (
              <StudyCard
                image={studyblock1.image}
                name={studyblock1.name}
                date={studyblock1.date}
                time={studyblock1.time}
              />
            ))}
          </div>
          <div className=" ">
            {studyblock2.map((studyblock2) => (
              <StudyCard
                image={studyblock2.image}
                name={studyblock2.name}
                date={studyblock2.date}
                time={studyblock2.time}
              />
            ))}
          </div>
          <div className=" ">
            {studyblock3.map((studyblock3) => (
              <StudyCard
                image={studyblock3.image}
                name={studyblock3.name}
                date={studyblock3.date}
                time={studyblock3.time}
              />
            ))}
          </div>
          <div className=" ">
            {studyblock4.map((studyblock4) => (
              <StudyCard
                image={studyblock4.image}
                name={studyblock4.name}
                date={studyblock4.date}
                time={studyblock4.time}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
