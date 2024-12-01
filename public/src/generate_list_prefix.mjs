import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { function_names } from "./function_names.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function generate_list_prefix(prefix) {
  prefix = string_combine_multiple([prefix, function_name_separator()]);
  let ns = await function_names();
  list_filter_starts_with(ns, prefix);
}
