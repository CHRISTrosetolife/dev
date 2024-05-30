import { js_function_types } from "./js_function_types.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_function_types_is(after_type) {
  return list_includes(js_function_types(), after_type);
}
