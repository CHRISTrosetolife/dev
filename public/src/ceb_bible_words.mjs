import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
import { list_map } from "./list_map.mjs";
import { range_1 } from "./range_1.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { each_async } from "./each_async.mjs";
import { function_run } from "./function_run.mjs";
export async function ceb_bible_words() {
  let count = 5;
  let fn_names = list_map(range_1(count), (i) =>
    string_combine_multiple([ceb_bible_words.name, "_", i]),
  );
  let all = await list_adder_multiple_async(async (la) => {
    await each_async(fn_names, async (fn_name) => {
      let words = await function_run(fn_name, []);
      la(words);
    });
  });
  let mapped = string_count_words(all);
  return mapped;
}
