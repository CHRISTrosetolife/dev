import { logic_step_substitution } from "./logic_step_substitution.mjs";
import { tests } from "./tests.mjs";
import { add_1 } from "./add_1.mjs";
import { tests_generate_single } from "./tests_generate_single.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { tests_generate_single_generic } from "./tests_generate_single_generic.mjs";
import { logic_parse } from "./logic_parse.mjs";
export async function logic_step_substitution_tests_generate() {
  let inputs = [["all(x,equal(x,x))", "zero"]];
  await each_index_async(inputs, async (input, index) => {
    await tests_generate_single_generic(
      logic_step_substitution.name,
      input,
      add_1(index),
      [logic_parse],
      logic_unparse,
    );
  });
}
