import { functions_names } from "./functions_names.mjs";
import { generate_list_generic } from "./generate_list_generic.mjs";
import { generate_list_prefix_prefix } from "./generate_list_prefix_prefix.mjs";
import { generate_list_prefix_name } from "./generate_list_prefix_name.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
export async function generate_list_prefix(input) {
  let prefix = generate_list_prefix_prefix(input);
  let ns = await functions_names();
  let list = list_filter_starts_with(ns, prefix);
  let name = generate_list_prefix_name(input);
  list = list_filter(list, (l) => l !== name);
  return await generate_list_generic(list, name);
}
