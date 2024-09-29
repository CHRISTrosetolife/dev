import { list_includes } from "./list_includes.mjs";
import { string_combine } from "./string_combine.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map } from "./list_map.mjs";
export function js_name_unique(ast, prefix) {
  assert_arguments_length(arguments, 2);
  let asts = [ast];
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
