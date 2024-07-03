import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_trim_front } from "./string_trim_front.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
export function bible_chapter_folder(chapter_name, folder_name) {
  let { book_code, chapter_code } = bible_chapter_name_parse(chapter_name);
  let chapter_number = string_trim_front(chapter_code, "0");
  let p = string_combine_multiple([
    folder_name,
    book_code,
    chapter_number,
    "/",
  ]);
  return p;
}
