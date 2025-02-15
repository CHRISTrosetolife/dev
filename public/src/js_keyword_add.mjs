import { string_suffix_without } from "./string_suffix_without.mjs";
import { function_new_constant_string } from "./function_new_constant_string.mjs";
export async function js_keyword_add(kw) {
  let prefix = string_suffix_without(js_keyword_add, "_add");
  await function_new_constant_string(prefix, kw);
}
