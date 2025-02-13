import { string_unique } from "./string_unique.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function js_name_unique_multiple(asts, prefix) {
  let identifiers = list_concat_multiple(list_map(asts, js_identifiers));
  let keywords = ["arguments"];
  list_add_multiple(identifiers, keywords);
  let v = string_unique(prefix, identifiers);
  return v;
}
