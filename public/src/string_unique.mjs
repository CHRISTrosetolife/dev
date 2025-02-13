import { list_includes } from "./list_includes.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function string_unique(prefix, existing) {
  let i = 1;
  let variable_name;
  while (true) {
    variable_name = i === 1 ? prefix : string_combine_multiple([prefix, i]);
    if (!list_includes(existing, variable_name)) {
      break;
    }
    i++;
  }
  return variable_name;
}
