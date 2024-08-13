import { list_filter } from "./list_filter.mjs";
import { equal_not } from "./equal_not.mjs";
export function list_without_by(list, item) {
  return list_filter(list, (a) => equal_not(a, item));
}
