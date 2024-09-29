import { js_name_unique_multiple } from "./js_name_unique_multiple.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function js_name_unique(ast, prefix) {
  assert_arguments_length(arguments, 2);
  let asts = [ast];
  return js_name_unique_multiple(asts, prefix);
}
