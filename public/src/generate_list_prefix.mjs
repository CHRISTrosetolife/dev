import { generate_list_generic } from "./generate_list_generic.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { function_names } from "./function_names.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
export async function generate_list_prefix(prefix) {
  prefix = string_combine_multiple([prefix, function_name_separator()]);
  let ns = await function_names();
  let list = list_filter_starts_with(ns, prefix);
  let name = string_combine_multiple([prefix, "list"]);
  list = list_filter(list, (l) => l !== name);
  return name;
  await generate_list_generic(list, name);
}
