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
      let d1 = a[i] - b[i];
      abs(d1) === 1 && abs(a[j] - b[j]) === 0;
    },
  );
}
