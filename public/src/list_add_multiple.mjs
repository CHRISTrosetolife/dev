import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
export function list_add_multiple(list, other) {
  each(other, function (o) {
    list_add(list, o);
  });
}
