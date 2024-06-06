import { string_includes_curry } from "./string_includes_curry.mjs";
import { list_any } from "./list_any.mjs";
export function string_includes_multiple(s, targets) {
  return list_any(targets, string_includes_curry(s));
}
