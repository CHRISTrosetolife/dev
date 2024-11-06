import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
import { object_property_get_or_async } from "./object_property_get_or_async.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
export async function app_verses_generic(app_fn, book_code, chapter) {
  let chapter_code = app_gs_bible_chapter_name(book_code, chapter);
  let a = await global_function_initialize(app_fn, () => ({}));
  let version_code = app_record_version_code();
  let verses = await object_property_get_or_async(
    a,
    chapter_code,
    async () =>
      await bible_storage_version_http_get(chapter_code, version_code),
  );
  return verses;
}
