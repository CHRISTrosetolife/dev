import { tests_generate_single } from "./tests_generate_single.mjs";
import { app_ceb_answer_partial } from "./app_ceb_answer_partial.mjs";
import { add_1 } from "./add_1.mjs";
import { each_index_async } from "./each_index_async.mjs";
export async function app_ceb_answer_partial_tests_generate() {
  let answer = "from";
  await each_index_async(inputs, async (input, index) => {
    await tests_generate_single(
      app_ceb_answer_partial.name,
      [input],
      add_1(index),
    );
  });
}
