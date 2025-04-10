import { app_record } from "./app_record.mjs";
import { app_verses_generic } from "./app_verses_generic.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function app_record_verses(context, book_code, chapter) {
  assert_arguments_length(arguments, 3);
  return await app_verses_generic(context, app_record, book_code, chapter);
}
