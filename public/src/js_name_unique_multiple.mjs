import { list_includes } from "./list_includes.mjs";
import { string_combine } from "./string_combine.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function js_name_unique_multiple(asts, prefix) {
  let identifiers = list_concat_multiple(list_map(asts, js_identifiers));
  let i = 1;
  let variable_name;
  while (true) {
    variable_name = i === 1 ? prefix : string_combine(prefix, i);
    if (!list_includes(identifiers, variable_name)) {
      break;
    }
    i++;
  }
  return variable_name;
}
