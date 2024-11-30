import { fn_name } from "./fn_name.mjs";
import { generate_list_generic } from "./generate_list_generic.mjs";
import { function_names } from "./function_names.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export async function functions_list_generate() {
  let list = await function_names();
  let fn = fn_name("functions_list_generate");
  let suffix = "_generate";
  let name = string_suffix_without(fn, suffix);
  await generate_list_generic(list, name);
}
