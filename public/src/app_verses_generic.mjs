import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
import { object_property_get_or_async } from "./object_property_get_or_async.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
export async function app_verses_generic(book_code, chapter, app_fn) {
  let chapter_code = app_gs_bible_chapter_name(book_code, chapter);
  let a = await global_function_initialize(app_fn, () => ({}));
  let verses = await object_property_get_or_async(
    a,
    chapter_code,
    async () => await bible_engbsb_storage_http_get(chapter_code),
  );
  return verses;
}
