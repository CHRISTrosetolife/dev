import { list_size } from "./list_size.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function list_multiple_is(list) {
  return greater_than_equal(list_size(list), 2);
}
