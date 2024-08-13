import { list_index_generic } from "./list_index_generic.mjs";
import { equal } from "./equal.mjs";
export function list_index(list, element) {
  return list_index_generic(list, element, equal);
}
