import { log } from "./log.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export function function_output_file_args_expression(function_name, args) {
  let split = string_split_comma(args);
  let mapped = list_map(split, eval);
  let a = eval("{}");
  log({
    aa,
  });
  return a;
}
