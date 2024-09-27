import { list_all } from "./list_all.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_intersect_multiple(lists) {
  let { first, remaining } = list_first_remaining(lists);
  return list_adder((la) => {
    each(first, (element) => {
      if (list_all(remaining, (r) => list_includes(r, element))) {
        la(element);
      }
    });
  });
}
