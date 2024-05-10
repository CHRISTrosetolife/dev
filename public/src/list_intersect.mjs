import { list_adder } from "./list_adder.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_intersect(a, b) {
  return list_adder((la) => {
    for (let element of a) {
      if (list_includes(b, element)) {
        la(element);
      }
    }
  });
}
