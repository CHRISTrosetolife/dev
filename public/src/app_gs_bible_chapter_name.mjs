import { app_gs_bible_chapter_code } from "./app_gs_bible_chapter_code.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_bible_chapter_name(book_id, chapter) {
  chapter = app_gs_bible_chapter_code(book_id, chapter);
  return string_combine_multiple([book_id, chapter]);
}
