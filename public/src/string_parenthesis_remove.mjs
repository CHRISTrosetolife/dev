import { string_last_index } from "./string_last_index.mjs";
import { string_size } from "./string_size.mjs";
import { string_skip } from "./string_skip.mjs";
import { string_take } from "./string_take.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_index } from "./string_index.mjs";
import { string_includes_multiple } from "./string_includes_multiple.mjs";
export function string_parenthesis_remove(t) {
  if (string_includes_multiple(t, "()")) {
    let l = string_index(t, "(");
    let right = ")";
    let r = string_last_index(t, right);
    t = string_combine_multiple([
      string_take(t, l),
      string_skip(t, r + string_size(right)),
    ]);
  }
  return t;
}
