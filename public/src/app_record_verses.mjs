import { app_verses_generic } from "./app_verses_generic.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function app_record_verses(book_code, chapter) {
  assert_arguments_length(arguments, 2);
  let app_fn = app_record_verses;
  return await app_verses_generic(app_fn, book_code, chapter);
}
