import { tests_generate_single } from "./tests_generate_single.mjs";
import { app_ceb_answer_partial } from "./app_ceb_answer_partial.mjs";
import { add_1 } from "./add_1.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { each } from "./each.mjs";
import { ceiling } from "./ceiling.mjs";
import { divide } from "./divide.mjs";
import { string_length } from "./string_length.mjs";
export async function app_ceb_answer_partial_tests_generate() {
  let answer = "from";
  let length = string_length(answer);
  each([1, 2, 3], (chunk_size) => {
    each(ceiling(divide(length, chunk_size)));
  });
  await each_index_async(inputs, async (input, index) => {
    await tests_generate_single(
      app_ceb_answer_partial.name,
      [input],
      add_1(index),
    );
  });
}
