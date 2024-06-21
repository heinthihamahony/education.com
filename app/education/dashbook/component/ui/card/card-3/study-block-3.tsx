export function StudyBlock3({
  image,
  name,
  title,
  paragraph,
}: {
  image?: string;
  name?: string;
  percent?: string;
  title?: string;
  paragraph?: string;
}) {
  return (
    <>
      <div className=" border rounded-xl mx-3 shadow-lg">
        <div className=" flex gap-3 p-3 items-center">
          <img className="w-12 h-12 rounded-full" src={image} alt="" />
          <div className="">
            <p className=" text-sm font-light">{name}</p>
            <p className="text-[#999] text-sm">Instructor Name</p>
          </div>
        </div>
        <div className="bg-[#f1f1f4] p-5 space-y-3 rounded-b-xl">
          <p className="text-sm font-semibold">{title}</p>
          <p className=" text-xs font-light">{paragraph}</p>
        </div>
      </div>
    </>
  );
}
