import { list_between } from "./list_between.mjs";
import { list_concat } from "./list_concat.mjs";
export function list_between_surround(list, b) {
  return list_concat(list_between(list, b), [b]);
}
