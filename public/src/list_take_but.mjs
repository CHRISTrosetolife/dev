import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
export function list_take_but(list, count) {
  return list_take(list, list_size(list) - count);
}
