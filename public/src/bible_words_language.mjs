import { string_combine } from "./string_combine.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { function_names_each } from "./function_names_each.mjs";
import { string_underscore_trail } from "./string_underscore_trail.mjs";
import { function_import } from "./function_import.mjs";
import { function_cache } from "./function_cache.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
import { list_map } from "./list_map.mjs";
import { range_1 } from "./range_1.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_words_language(args) {
  let { language } = args;
  let prefix = string_underscore_trail(
    string_combine("bible_words_language_", language),
  );
  await list_adder_async(async (la) => {
    await function_names_each(async (fn) => {
      if (string_starts_with(fn, prefix)) {
        la(fn);
      }
    });
  });
  let fn_names = list_map(range_1(count), (i) =>
    string_combine_multiple([prefix, i]),
  );
  let all = await list_adder_multiple_async(async (la) => {
    await each_async(fn_names, async (fn_name) => {
      let fn = await function_import(fn_name);
      let words = await function_cache(fn, [args]);
      la(words);
    });
  });
  return all;
}
