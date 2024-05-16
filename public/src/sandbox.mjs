import { tests_generate_single } from "./tests_generate_single.mjs";
import { logic_parse } from "./logic_parse.mjs";
import { add_1 } from "./add_1.mjs";
export async function sandbox() {
  let inputs = [
    "a()",
    "a(b())",
    "a(b(c()))",
    "a(b(),c()))",
    "a(b(),c(d())))",
    "a(b(),c(d(),e())))",
    "a(b(),c(d(),e(),f())))",
  ];
  await each_index_async(inputs, (input, index) => {
    tests_generate_single(logic_parse.name, ["a(b(),c(d(),e(),f()))"], add_1(index));
  });
}
