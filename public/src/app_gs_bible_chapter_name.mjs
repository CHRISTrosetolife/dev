import { number_pad } from "./number_pad.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_bible_chapter_name(book_id, chapter) {
  return string_combine_multiple([book_id, number_pad(chapter, 2)]);
}
