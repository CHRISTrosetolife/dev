import { list_filter } from "./list_filter.mjs";
import { equal_not } from "./equal_not.mjs";
export function list_without(atom, pair) {
  return list_filter(atom, (a) => equal_not(a, pair));
}
