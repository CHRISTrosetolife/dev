import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
export async function bible_engbsb_storage_http_get(chapter_code) {
  let version_code = "engbsb";
  let verses = await bible_storage_version_http_get(chapter_code, version_code);
  return verses;
}
