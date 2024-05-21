import { add_1 } from "./add_1.mjs";
import { logic_parse } from "./logic_parse.mjs";
import { tests_generate_single } from "./tests_generate_single.mjs";
import { each_index_async } from "./each_index_async.mjs";
export async function logic_step_substitution_tests_generate() {
  let inputs = [
  ];
  await each_index_async(inputs, async (input, index) => {
    await tests_generate_single( logic_step_substitution.name, [input], add_1(index));
  });
}
