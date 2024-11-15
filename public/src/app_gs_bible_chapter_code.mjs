import { number_pad_2 } from "./number_pad_2.mjs";
import { number_pad } from "./number_pad.mjs";
export function app_gs_bible_chapter_code(book_id, chapter) {
  if (book_id === "PSA") {
    chapter = number_pad(chapter, 3);
  } else {
    chapter = number_pad_2(chapter);
  }
  return chapter;
}
