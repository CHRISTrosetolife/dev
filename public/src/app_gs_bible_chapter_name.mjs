import { number_pad } from "./number_pad.mjs";
import { number_pad_2 } from "./number_pad_2.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_bible_chapter_name(book_id, chapter) {
  if (book_code === "PSA") {
    chapter = number_pad();
  }
  return string_combine_multiple([book_id, number_pad_2(chapter)]);
}
