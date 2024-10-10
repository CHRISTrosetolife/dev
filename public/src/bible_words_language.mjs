import { function_names_prefix_number_each } from "./function_names_prefix_number_each.mjs";
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
  let prefix = string_combine_multiple([
    "bible_words_language_",
    language,
    "_",
  ]);
  await function_names_prefix_number_each(prefix, async (without, fn) => {
    let imported = await function_import(fn);
    let words = await function_cache(imported, [args]);
    la(words);
  });
  let fn_names = list_map(range_1(count), (i) =>
    string_combine_multiple([prefix, i]),
  );
  let all = await list_adder_multiple_async(async (la) => {
    await each_async(fn_names, async (fn_name) => {});
  });
  return all;
}
