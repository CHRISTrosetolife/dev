import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export function function_output_file_args_expression(function_name, args) {
  let split = string_split_comma(args);
  let mapped = list_map(split, (s) =>
    new Function(js_code_statement_return(s))(),
  );
  return mapped;
}
