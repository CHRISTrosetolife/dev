import { global_function_initialize } from "./global_function_initialize.mjs";
import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
import { object_property_get_or_async } from "./object_property_get_or_async.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function app_record_verses(book_code, chapter) {
  assert_arguments_length(arguments, 2);
  let chapter_code = string_combine_multiple([book_code, chapter]);
  let a = await global_function_initialize(app_record_verses, () => ({}));
  let verses = await object_property_get_or_async(
    a,
    chapter_code,
    async () => await bible_engbsb_storage_http_get(chapter_code),
  );
  return verses;
}
