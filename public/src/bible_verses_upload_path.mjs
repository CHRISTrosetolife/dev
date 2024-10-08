import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
import { path_join } from "./path_join.mjs";
export function bible_verses_upload_path(
  book_code,
  chapter_code,
  verse_number,
  bible_folder,
) {
  let key = path_join([book_code, chapter_code, verse_number]);
  let storage_path = bible_storage_path_file_version(key, bible_folder);
  return storage_path;
}
