import { each } from "./each.mjs";
import { list_adder_multiple } from "./list_adder_multiple.mjs";
export function list_partition(map, predicate) {
  return list_adder_multiple(2, (la) => {
    each(map.tiles, (t) => {
      if (predicate(t)) {
        la(0, t);
      } else {
        la(1, t);
      }
    });
  });
}
