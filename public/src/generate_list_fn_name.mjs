import { generate_list_generic } from "./generate_list_generic.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export async function generate_list_fn_name(get, fn) {
  let list = await get();
  let suffix = "_generate";
  let name = string_suffix_without(fn, suffix);
  await generate_list_generic(list, name);
}
