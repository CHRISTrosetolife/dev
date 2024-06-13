import { list_size } from "./list_size.mjs";
import { number_max } from "./number_max.mjs";
export function number_max_list_length(a, b) {
  return number_max(list_size(a), list_size(b));
}
