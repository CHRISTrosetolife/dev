import { string_size } from "./string_size.mjs";
import { add } from "./add.mjs";
export function app_learn_code_index_of_tokens(input, tokens) {
  let source_index = 0;
  let c_previous = "";
  for (let c of tokens) {
    source_index = input.indexOf(c, add(source_index, string_size(c_previous)));
    c_previous = c;
  }
  return source_index;
}
