import { string_take } from "./string_take.mjs";
import { string_index } from "./string_index.mjs";
export function string_take_find(n, search) {
  let result;
  let index = string_index(n, search);
  if (index < 0) {
    result = n;
  } else {
    result = string_take(n, index);
  }
  return result;
}
