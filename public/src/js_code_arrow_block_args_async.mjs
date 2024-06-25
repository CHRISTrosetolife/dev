import { js_code_arrow_block_args } from "./js_code_arrow_block_args.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function js_code_arrow_block_args_async(names, body_string) {
  assert_arguments_length(arguments, 2);
  return "async " + js_code_arrow_block_args(names, body_string);
}
