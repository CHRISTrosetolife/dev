import { function_names_each } from "./function_names_each.mjs";
import { string_underscore_trail } from "./string_underscore_trail.mjs";
import { fn_name } from "./fn_name.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function bible_words_language_rename() {
  let prefix = string_underscore_trail(fn_name("ceb_bible_words"));
  await function_names_each((fn) => {
    if (string_starts_with(fn, prefix)) {
    }
  });
}
