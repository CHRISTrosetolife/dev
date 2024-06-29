import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
export async function app_record() {
  let verses = await bible_engbsb_storage_http_get(chapter_code);
}
