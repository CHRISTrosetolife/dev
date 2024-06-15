import { abs } from "./abs.mjs";
import { list_any } from "./list_any.mjs";
export function app_gs_adjacent(a, b) {
  return list_any(
    [
      ["x", "y"],
      ["y", "x"],
    ],
    (both) => {
      let [i, j] = both;
      let d1 = abs(a[i] - b[i]);
      let d2 = abs(a[j] - b[j]);
      return d1 === 1 && d2 === 0;
    },
  );
}
