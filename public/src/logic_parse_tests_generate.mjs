import { add_1 } from "./add_1.mjs";
import { logic_parse } from "./logic_parse.mjs";
import { tests_generate_single } from "./tests_generate_single.mjs";
import { each_index_async } from "./each_index_async.mjs";
export async function logic_parse_tests_generate() {
  let inputs = [
    "a()",
    "a(b())",
    "a(b(c()))",
    "a(b(),c())",
    "a(b(),c(d()))",
    "a(b(),c(d(),e()))",
    "a(b(),c(d(),e(),f()))",
    "a(b)",
    "a(b,c)",
  ];
  await each_index_async(inputs, async (input, index) => {
    await tests_generate_single(logic_parse.name, [input], add_1(index));
  });
}
