export function CourseVideo() {
  return (
    <>
      <div className="">
        <iframe
          className="w-[900px] h-[450px] mt-5 mr-96"
          src="https://www.youtube.com/embed/bUxd3jqCr94?si=gPHLc51ZBqi68Sz6"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
