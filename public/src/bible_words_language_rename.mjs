import { function_names_prefix_number_each } from "./function_names_prefix_number_each.mjs";
import { log } from "./log.mjs";
import { string_underscore_trail } from "./string_underscore_trail.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_rename } from "./function_rename.mjs";
import { string_combine } from "./string_combine.mjs";
export async function bible_words_language_rename() {
  let prefix_old = string_underscore_trail(fn_name("ceb_bible_words"));
  let prefix_new = string_underscore_trail(fn_name("bible_words_language_ceb"));
  await function_names_prefix_number_each(prefix_old, lambda);
  async function lambda(without, fn_old) {
    let fn_new = string_combine(prefix_new, without);
    log({
      fn_new,
    });
    await function_rename(fn_old, fn_new);
  }
}
