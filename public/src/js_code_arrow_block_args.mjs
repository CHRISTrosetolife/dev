import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function js_code_arrow_block_args(names, body_string) {
  return string_combine_multiple([
    "(",
    list_join_comma_space(names),
    ")=>{",
    body_string,
    "}",
  ]);
}
