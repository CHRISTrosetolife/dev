import { function_name_generated } from "./function_name_generated.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function function_name_generated_combine(fn_caller, name) {
  return string_combine_multiple([
    function_name_generated(fn_caller),
    "_",
    name,
  ]);
}
