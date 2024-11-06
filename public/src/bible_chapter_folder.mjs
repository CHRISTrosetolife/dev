import { bible_chapter_unpadded } from "./bible_chapter_unpadded.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { path_join } from "./path_join.mjs";
export function bible_chapter_folder(folder_name, chapter_name) {
  let { book_code, chapter_code } = bible_chapter_name_parse(chapter_name);
  let chapter_number = bible_chapter_unpadded(chapter_code);
  let p = path_join([folder_name, book_code, chapter_number, "/"]);
  return p;
}
