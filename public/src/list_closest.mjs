import { abs } from "./abs.mjs";
import { each } from "./each.mjs";
import { list_first } from "./list_first.mjs";
export function list_closest(list, item) {
  let closest = list_first(list);
  let best = Number.POSITIVE_INFINITY;
  each(list, (e) => {
    let difference = abs(item - e);
    if (difference < best) {
      best = difference;
      closest = e;
    }
  });
  return closest;
}
