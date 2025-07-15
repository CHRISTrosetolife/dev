import { generate_suffix_without } from "./generate_suffix_without.mjs";
import { generate_list_string } from "./generate_list_string.mjs";
export async function generate_list_string_generated(fn, list) {
  let name = generate_suffix_without(fn);
  await generate_list_string(list, name);
  return list;
}
