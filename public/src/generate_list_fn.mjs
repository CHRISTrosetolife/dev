import { object_property_get } from "./object_property_get.mjs";
import { generate_list_generic } from "./generate_list_generic.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export async function generate_list_fn(get, fn) {
  let list = await get();
  let suffix = "_generate";
  let f_name = object_property_get(fn, "name");
  let name = string_suffix_without(f_name, suffix);
  await generate_list_generic(list, name);
}
