import { number_is } from "./number_is.mjs";
import { integer_parse_try } from "./integer_parse_try.mjs";
import { function_names_each } from "./function_names_each.mjs";
import { string_underscore_trail } from "./string_underscore_trail.mjs";
import { fn_name } from "./fn_name.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { function_rename } from "./function_rename.mjs";
export async function bible_words_language_rename() {
  let prefix_old = string_underscore_trail(fn_name("ceb_bible_words"));
  let prefix_new = string_underscore_trail(fn_name("bible_words_language"));
  await function_names_each(async (fn) => {
    if (string_starts_with(fn, prefix_old)) {
      let without = string_prefix_without(fn, prefix_old);
      let p = integer_parse_try(without);
      if (number_is(p)) {
        await function_rename(prefix_old, prefix_new);
      }
    }
  });
}
