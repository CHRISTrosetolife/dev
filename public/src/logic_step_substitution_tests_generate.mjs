import { logic_step_substitution } from "./logic_step_substitution.mjs";
import { tests } from "./tests.mjs";
import { add_1 } from "./add_1.mjs";
import { tests_generate_single } from "./tests_generate_single.mjs";
import { each_index_async } from "./each_index_async.mjs";
export async function logic_step_substitution_tests_generate() {
  let tests = [["all(x,equal(x,x))", "zero", "equal(zero,zero)"]];
  await each_index_async(inputs, async (input, index) => {
    await tests_generate_single(
      logic_step_substitution.name,
      [input],
      add_1(index),
    );
  });
}
