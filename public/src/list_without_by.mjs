import { equal_by } from "./equal_by.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_without_by(list, item, mapper) {
  return list_filter(list, (a) => !equal_by(a, item, mapper));
}
