import { list_add } from "./list_add.mjs";
export function list_add_multiple(list, other) {
  for (let s of other) {
    list_add(list, s);
  }
}
