import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_intersect(a, b) {
  return list_adder((la) => {
    each(a, (element) => {
      if (list_includes(b, element)) {
        la(element);
      }
    });
  });
}
