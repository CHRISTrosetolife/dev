import { list_includes } from "./list_includes.mjs";
import { string_combine } from "./string_combine.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
export function js_name_unique(ast, prefix) {
  let identifiers = js_identifiers(ast);
  let i = 1;
  let variable_name;
  while (true) {
    variable_name = string_combine(prefix, i);
    if (!list_includes(identifiers, variable_name)) {
      break;
    }
    i++;
  }
  return variable_name;
}
