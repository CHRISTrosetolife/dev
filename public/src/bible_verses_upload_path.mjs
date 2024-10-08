import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
import { path_join } from "./path_join.mjs";
export function bible_verses_upload_path(bible_folder, chapter, verse_number) {
  let { book_code, chapter_code } = bible_chapter_name_parse(chapter);
  let key = path_join([book_code, chapter_code, verse_number]);
  let storage_path = bible_storage_path_file_version(key, bible_folder);
  return storage_path;
}
