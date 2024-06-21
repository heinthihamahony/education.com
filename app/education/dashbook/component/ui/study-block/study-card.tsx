export function StudyCard({
  name,
  image,
  date,
  time,
}: {
  name?: string;
  image?: string;
  date?: string;
  time?: string;
}) {
  return (
    <>
      <div className="  flex items-center gap-3 w-full border rounded-full p-3 shadow-lg shadow-lg-[#999]">
        <img className="w-12 rounded-full" src={image} alt="" />
        <div className=" space-y-3 w-full pr-5">
          <div className=" flex justify-between">
            <p className=" text-xs font-semibold">{name}</p>
            <p className=" text-xs font-semibold text-[#A5AAB7]">{date}</p>
          </div>
          <p className="text-[#313030] text-xs">{time}</p>
        </div>
      </div>
    </>
  );
}
