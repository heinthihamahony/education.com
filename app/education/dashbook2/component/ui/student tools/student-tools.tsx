import { BookmarksIcon } from "../icons/bookmark-icon";
import { FlashcardsIcon } from "../icons/flashcards-icon";
import { NotesIcon } from "../icons/notes-icon";

export function StudentTools() {
  return (
    <>
      <div className="p-5 bg-white ">
        <p className=" text-lg font-semibold mb-3">Student Tools</p>

        <a href="#" className="">
          <p className="text-sm text-[#6678BA] font-semibold flex items-center gap-2">
            <BookmarksIcon />
            Bookmarks
          </p>
        </a>
        <a href="#" className="">
          <p className="text-sm text-[#6678BA] font-semibold flex items-center gap-2 my-3">
            <NotesIcon />
            Notes
          </p>
        </a>
        <a href="#" className="">
          <p className="text-sm text-[#6678BA] font-semibold flex items-center gap-2">
            <FlashcardsIcon />
            Flashcards
          </p>
        </a>
      </div>
    </>
  );
}
