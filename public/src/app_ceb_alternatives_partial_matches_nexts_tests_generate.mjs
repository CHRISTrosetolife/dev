import { range } from "./range.mjs";
import { tests_generate_single } from "./tests_generate_single.mjs";
import { app_ceb_answer_partial } from "./app_ceb_answer_partial.mjs";
import { add_1 } from "./add_1.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { each } from "./each.mjs";
import { ceiling } from "./ceiling.mjs";
import { divide } from "./divide.mjs";
import { string_length } from "./string_length.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_map } from "./list_map.mjs";
export async function app_ceb_alternatives_partial_matches_nexts_tests_generate() {
  let answer = "from";
  let length = string_length(answer);
  let list = list_adder((la) =>
    each([1, 2, 3], (chunk_size) => {
      each(range(ceiling(divide(add_1(length), chunk_size))), (index) => {
        la({
          answer,
          chunk_size,
          index,
        });
      });
    }),
  );
  let inputs = list_map(list, (a) => {
    let { answer, chunk_size, index } = a;
    return [answer, chunk_size, index];
  });
  await each_index_async(inputs, async (input, index) => {
    await tests_generate_single(
      app_ceb_answer_partial.name,
      input,
      add_1(index),
    );
  });
}
