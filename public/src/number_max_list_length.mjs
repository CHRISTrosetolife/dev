import { list_length } from "./list_length.mjs";
import { number_max } from "./number_max.mjs";
export function number_max_list_length(a, b) {
  return number_max(list_length(a), list_length(b));
}
