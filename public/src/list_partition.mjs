import { each } from "./each.mjs";
import { list_adder_multiple } from "./list_adder_multiple.mjs";
export function list_partition(list, predicate) {
  return list_adder_multiple(2, (la) => {
    each(list, (t) => {
      if (predicate(t)) {
        la(0, t);
      } else {
        la(1, t);
      }
    });
  });
}
