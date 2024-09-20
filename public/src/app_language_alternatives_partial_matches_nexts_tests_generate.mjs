import { string_size } from "./string_size.mjs";
import { app_language_alternatives_partial_matches_nexts } from "./app_language_alternatives_partial_matches_nexts.mjs";
import { each } from "./each.mjs";
import { range } from "./range.mjs";
import { tests_generate_single } from "./tests_generate_single.mjs";
import { add_1 } from "./add_1.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { ceiling } from "./ceiling.mjs";
import { divide } from "./divide.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_map } from "./list_map.mjs";
export async function app_language_alternatives_partial_matches_nexts_tests_generate() {
  let f = app_language_alternatives_partial_matches_nexts;
  let alternatives = ["fur", "form", "front", "at", "fromi"];
  let answer = "from";
  let length = string_size(answer);
  let args = list_adder((la) =>
    each([1, 2], (chunk_size) =>
      each(range(ceiling(divide(add_1(length), chunk_size))), (index) =>
        la({
          answer,
          chunk_size,
          index,
          alternatives,
        }),
      ),
    ),
  );
  let inputs = list_map(args, (a) => {
    let { answer, chunk_size, index, alternatives } = a;
    return [answer, chunk_size, index, alternatives];
  });
  await each_index_async(inputs, async (input, index) => {
    await tests_generate_single(f.name, input, add_1(index));
  });
}
