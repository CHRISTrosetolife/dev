import { fn_name } from "./fn_name.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
export function object_property_get_code(
  object_variable_code,
  property_name_code,
) {
  return js_code_call_args(fn_name("object_property_get"), [
    object_variable_code,
    property_name_code,
  ]);
}
