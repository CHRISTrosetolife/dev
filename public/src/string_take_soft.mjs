import { string_take } from "./string_take.mjs";
import { string_size } from "./string_size.mjs";
export function string_take_soft(j, limit) {
  if (string_size(j) > limit) {
    let v = string_take(j, limit);
    return v;
  }
  return j;
}
