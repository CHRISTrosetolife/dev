import { storage_url } from "./storage_url.mjs";
import { http_get } from "./http_get.mjs";
import { bible_engbsb_storage_path_file } from "./bible_engbsb_storage_path_file.mjs";
export async function bible_engbsb_storage_http_get(chapter_code) {
  let file_path = bible_engbsb_storage_path_file(chapter_code);
  let verses = await http_get(storage_url(file_path));
  return verses;
}
