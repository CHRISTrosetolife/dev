import { http_storage_get } from "./http_storage_get.mjs";
import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
export async function bible_storage_version_http_get(
  chapter_code,
  version_code,
) {
  let file_path = bible_storage_path_file_version(chapter_code, version_code);
  let verses = await http_storage_get(file_path);
  return verses;
}
