import { app_ceb_alternatives_partial_matches_nexts } from "./app_ceb_alternatives_partial_matches_nexts.mjs";
import { range } from "./range.mjs";
import { tests_generate_single } from "./tests_generate_single.mjs";
import { add_1 } from "./add_1.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { ceiling } from "./ceiling.mjs";
import { divide } from "./divide.mjs";
import { list_adder } from "./list_adder.mjs";
import { string_length } from "./string_length.mjs";
export async function app_ceb_alternatives_partial_matches_nexts_tests_generate() {
  let f = app_ceb_alternatives_partial_matches_nexts;
  let alternatives = ["for", "form", "front", "at"];
  let answer = "from";
  let length = string_length(answer);
  let chunk_size = 1;
  return list_adder((la) =>
    range(ceiling(divide(add_1(length), chunk_size)), (index) =>
      la(f(answer, chunk_size, 0, alternatives)),
    ),
  );
  return;
  await each_index_async(inputs, async (input, index) => {
    await tests_generate_single(f.name, input, add_1(index));
  });
}
