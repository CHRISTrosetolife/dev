import { list_between_after } from "./list_between_after.mjs";
import { list_concat } from "./list_concat.mjs";
export function list_between_surround(list, b) {
  return list_concat([b], list_between_after(list, b));
}
