import { each } from "./each.mjs";
import { never } from "./never.mjs";
import { assert } from "./assert.mjs";
import { list_add } from "./list_add.mjs";
export function list_add_multiple(list, other) {
  assert(never, []);
  each(list2, function (item) {});
  for (let o of other) {
    list_add(list, o);
  }
}
