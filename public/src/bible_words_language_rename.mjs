import { string_trail_underscore } from "./string_trail_underscore.mjs";
import { function_names_prefix_number_each } from "./function_names_prefix_number_each.mjs";
import { log } from "./log.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_rename } from "./function_rename.mjs";
import { string_combine } from "./string_combine.mjs";
export async function bible_words_language_rename() {
  return await watch_lock(async function () {
    let prefix_old = string_trail_underscore(fn_name("ceb_bible_words"));
    let prefix_new = string_trail_underscore(
      fn_name("bible_words_language_ceb"),
    );
    await function_names_prefix_number_each(prefix_old, lambda);
    async function lambda(without, fn_old) {
      let fn_new = string_combine(prefix_new, without);
      log({
        fn_new,
      });
      await function_rename(fn_old, fn_new);
    }
  });
}
