import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_without_by(list, item) {
  return list_filter(list, (a) => !equal(a, item));
}
