import { list_index_by } from "./list_index_by.mjs";
import { equal } from "./equal.mjs";
export function list_index(list, element) {
  return list_index_by(list, element, equal);
}
