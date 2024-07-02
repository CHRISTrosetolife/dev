import { string_trim_front } from "./string_trim_front.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { folder_audio_bible } from "./folder_audio_bible.mjs";
import { path_join } from "./path_join.mjs";
export function bible_chapter_audio_download_prefix(folder_name, chapter_name) {
  let { book_code, chapter_code } = bible_chapter_name_parse(chapter_name);
  let chapter_number = string_trim_front(chapter_code, "0");
  return path_join([
    folder_audio_bible(),
    folder_name,
    book_code,
    chapter_number,
    "/",
  ]);
}
