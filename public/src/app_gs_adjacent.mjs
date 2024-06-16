import { list_yx } from "./list_yx.mjs";
import { list_xy } from "./list_xy.mjs";
import { abs } from "./abs.mjs";
import { list_any } from "./list_any.mjs";
export function app_gs_adjacent(a, b) {
  return list_any([list_xy(), list_yx()], (both) => {
    let [i, j] = both;
    let d1 = abs(a[i] - b[i]);
    let d2 = abs(a[j] - b[j]);
    return d1 === 1 && d2 === 0;
  });
}
