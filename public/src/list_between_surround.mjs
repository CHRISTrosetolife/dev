import { list_between_after } from "./list_between_after.mjs";
import { list_concat } from "./list_concat.mjs";
export function list_between_surround(list, item) {
  return list_concat([item], list_between_after(list, item));
}
