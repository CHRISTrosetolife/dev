import { integer_parse_try } from "./integer_parse_try.mjs";
import { function_names_each } from "./function_names_each.mjs";
import { string_underscore_trail } from "./string_underscore_trail.mjs";
import { fn_name } from "./fn_name.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export async function bible_words_language_rename() {
  let prefix = string_underscore_trail(fn_name("ceb_bible_words"));
  await function_names_each((fn) => {
    if (string_starts_with(fn, prefix)) {
      let without = string_prefix_without(fn, prefix);
      let p = integer_parse_try(without);
      if (p) {
      }
    }
  });
}
